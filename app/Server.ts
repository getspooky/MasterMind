/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import app from "./App";
import { env } from "../helpers";
import { logger } from "./Logger";

/**
 * The server object listens on port 4200.
 *
 * @var {number}
 */
const port: number = parseInt(env("APP_PORT")) || 3000;

const prettyHost: string = env("APP_HOST") || "localhost";

const dbHost: string = `mongodb://${env("DB_HOST")}/${env("DB_NAME")}`;

// Start your app.
app.listen(port, prettyHost, async err => {
  if (err) {
    return logger.error(err.message);
  }
  await logger.databaseStarted(dbHost, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  logger.appStarted(port, prettyHost);
});
