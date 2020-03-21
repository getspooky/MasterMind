/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import session from "express-session";
import path from "path";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { convertDeltaToHtml } from "node-quill-converter";
import md5 from "md5";
import moment from "moment";
import "./Environment";
import { env } from "../helpers";
import { compose } from "compose-middleware";
import { Route } from "../routes/web";
import Internationalization from "./i18n";
import { DetectProxy } from "./Middlewares/DetectProxy";
import { ErrorHandler } from "./Middlewares/ErrorHandler";

/*
|-----------------------------------------------------------------------------
| MasterMind Server configuration
|-----------------------------------------------------------------------------
*/

// Create Express server
const app = express();

// Serve static files such as images, CSS files, and JavaScript files,
app.use("/static", express.static(path.join(__dirname, "../public")));

// Setup pug template engine to use with express js
app.set("view engine", "pug");

// set various HTTP headers to help protect your server
app.use(helmet());

// set local varaible
app.locals.moment = moment;
app.locals.convertDeltaToHtml = convertDeltaToHtml;
app.locals.md5 = md5;

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

// use session to authenticate users
app.use(
  session({
    secret: env("SESSION_SECRET"),
    resave: false,
    saveUninitialized: false
  })
);

app.use(cookieParser());

app.use(Internationalization);

// load API Routes
app.use(compose(DetectProxy, Route));

// handle Errors
if (process.env.APP_ENV === "development") {
  // only use in development
} else {
  app.use(ErrorHandler);
}

// Page not Found
app.use((req: Request, res: Response, next: NextFunction) => res.render("404"));

export default app;
