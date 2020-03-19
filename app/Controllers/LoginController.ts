/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright andc license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { LoginInterface } from "../Interfaces/LoginInterface";
import { SessionInterface } from "../Interfaces/SessionInterface";
import { generateSessionKey } from "../Controllers/RegisterController";
import { env } from "../../helpers";
import User from "../Models/User";

/*
|--------------------------------------------------------------------------
| Login Controller
|--------------------------------------------------------------------------
|
| This controller handles authenticating users for the application and
| redirecting them to your home screen.
|
*/

/**
 * @desc Where to redirect users after login.
 * @type {URL|string}
 */
const redirectTo: URL | string = "/courses";

/**
 * @desc Display a listing of the resource.
 * @function
 * @name index
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const index = function(req: Request, res: Response): void {
  return res.status(200).render("Login");
};

/**
 * @desc Display the specified resource.
 * @function
 * @name show
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const login = async function(
  req: SessionInterface,
  res: Response
): Promise<void | TypeError> {
  const { email, password }: LoginInterface = { ...req.body };
  // Finds the validation errors in this request and wraps them in an object with handy functions
  if (!validationResult(req).isEmpty)
    return new TypeError("The given inputs was Invalid");
  // Attempt to log the user into the application.
  const attemptLogin = await User.findOne({ email });
  if (!attemptLogin) throw new TypeError("Account does not exists!");
  if (!(await User.comparePassword(password, attemptLogin.password)))
    throw new TypeError("Password Incorrect !");
  // store session id
  req.session.user_id_token = generateSessionKey(
    email,
    attemptLogin._id,
    env("SESSION_GENERATOR")
  );
  return res.status(201).redirect(redirectTo);
};

export default { index, login };
