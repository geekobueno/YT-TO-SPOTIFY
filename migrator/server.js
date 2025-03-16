import compression from "compression";
import { renderPage } from "vite-plugin-ssr/server";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

async function startServer() {
  const app = express();
  app.use(compression());

  if (isProduction) {
    app.use(express.static(`${__dirname}/dist/client`));
  } else {
    const viteServer = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(viteServer.middlewares);
  }

  // API routes
  app.use("/api", (await import("./src/server/api/index.js")).default);

  // Auth routes
  app.use("/auth", (await import("./src/server/auth/index.js")).default);

  // SSR
  app.get("*", async (req, res, next) => {
    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl,
      };
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;

      if (!httpResponse) return next();

      const { body, statusCode, contentType, earlyHints } = httpResponse;
      if (res.writeEarlyHints) {
        res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
      }
      res.status(statusCode).type(contentType).send(body);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
