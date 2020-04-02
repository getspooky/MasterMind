/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Router, Request, Response, RequestHandler } from "express";
import * as core from "express-serve-static-core";
import { compose as ComposeMiddleware } from "compose-middleware";
import csrf from "csurf";
import LoginController from "../app/Controllers/LoginController";
import RegisterController from "../app/Controllers/RegisterController";
import ArticleController from "../app/Controllers/ArticleController";
import ProfileController from "../app/Controllers/ProfileController";
import LoginValidator from "../app/Validators/Login";
import RegisterValidator from "../app/Validators/Register";
import ArticleValidator from "../app/Validators/Article";
import { Authenticated } from "../app/Middlewares/Authenticated";

/**
 * @desc Preventing Cross Site Request Forgery (CSRF)
 * @type {RequestHandler}
 */
const csrfProtection: RequestHandler = csrf({ cookie: true });

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application.
|
*/

export const Route: core.Router = Router();

Route.use(csrfProtection);

Route.get("/test", (req: Request, res: Response): void => {
  res.redirect(300, "/");
});

Route.get("/", (req: Request, res: Response): void => res.render("Welcome"));

Route.get("/team", (req: Request, res: Response): void => res.render("Team"));

Route.get("/login", LoginController.index);

Route.post("/login", LoginValidator(), LoginController.login);

Route.get("/register", RegisterController.index);

Route.post(
  "/register",
  ComposeMiddleware(RegisterValidator()),
  RegisterController.register
);

// Routes that require authentication

Route.get("/profile", Authenticated, ProfileController.index);

Route.get("/profile/logout", Authenticated, ProfileController.logOut);

Route.get("/articles", ArticleController.index);

Route.get("/article/details", ArticleController.show);

Route.get("/article/create", Authenticated, ArticleController.create);

Route.post(
  "/article",
  ComposeMiddleware([Authenticated, ArticleValidator()]),
  ArticleController.store
);
