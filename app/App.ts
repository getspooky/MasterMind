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
import { compose } from "compose-middleware";
import "./Environment";

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

export default app;
