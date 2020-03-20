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
import { compose as ComposeMiddleware } from "compose-middleware";
import LoginController from "../app/Controllers/LoginController";
import RegisterController from "../app/Controllers/RegisterController";
import ArticleController from "../app/Controllers/ArticleController";
import ProfileController from "../app/Controllers/ArticleController";
import LoginValidator from "../app/Validators/Login";
import RegisterValidator from "../app/Validators/Register";
import ArticleValidator from "../app/Validators/Article";
import { Authenticated } from "../app/Middlewares/Authenticated";

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

Route.get("/login", LoginController.index);

Route.post("/login", LoginValidator(), LoginController.login);

Route.get("/register", RegisterController.index);

Route.post("/register", RegisterValidator(), RegisterController.register);

// Routes that require authentication

Route.get("/profile", Authenticated, ProfileController.index);

Route.get("/articles", Authenticated, ArticleController.index);

Route.get("/article/create", Authenticated, ArticleController.create);

Route.post(
  "/article",
  ComposeMiddleware([Authenticated, ArticleValidator()]),
  ArticleController.store
);
