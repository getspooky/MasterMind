/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import pug from "pug";
import helmet from "helmet";
import "./Environment";
import { compose } from "compose-middleware";
import { Route } from "../routes/web";
import { DetectProxy } from "./Middlewares/DetectProxy";

/*
|-----------------------------------------------------------------------------
| MasterMind Server configuration
|-----------------------------------------------------------------------------
*/

if (process.env.APP_ENV === "development") {
  // only use in development
}

// Create Express server
const app = express();

// Setup pug template engine to use with express js
app.set("view engine", "pug");

// set various HTTP headers to help protect your server
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// load API Routes
app.use(compose(DetectProxy, Route));

export default app;
