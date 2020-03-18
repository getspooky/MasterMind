import app from "./App";
import { logger } from "./Logger";

/**
 * The server object listens on port 4200.
 *
 * @var {number}
 */
const port: number = parseInt(process.env.APP_PORT) || 4200;

const prettyHost: string = process.env.APP_HOST || "localhost";

// Start your app.
app.listen(port, prettyHost, async err => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
