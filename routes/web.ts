/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Router, Request, Response } from "express";
import * as core from "express-serve-static-core";

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application.
|
*/

export const Route: core.Router = Router();

Route.get("/test", (req: Request, res: Response): void => {
  res.status(200).send("Welcome to MasterMind");
});

Route.get("/", (req: Request, res: Response): void => res.render("Welcome"));
