/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright andc license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { LoginInterface } from "../Interfaces/LoginInterface";
import { SessionInterface } from "../Interfaces/SessionInterface";
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
const redirectTo: URL | string = "/profile";

/**
 * @desc Display a listing of the resource.
 * @function
 * @name index
 * @param {SessionInterface} req
 * @param {Response} res
 * @returns {void}
 */
const index = function (req: SessionInterface, res: Response): void {
  return res.status(200).render("Login", {
    csrfToken: req.csrfToken(),
    flash: req.flash(),
  });
};

/**
 * @desc Display the specified resource.
 * @function
 * @name show
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const login = async function (
  req: SessionInterface,
  res: Response,
  next: NextFunction
): Promise<void | TypeError> {
  try {
    const { email, password }: LoginInterface = { ...req.body };
    // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!validationResult(req).isEmpty())
      throw new TypeError("The given inputs was Invalid");
    // Attempt to log the user into the application.
    const attemptLogin = await User.findOne({ email });
    if (!attemptLogin) throw new TypeError("Account does not exists!");
    if (!(await User.comparePassword(password, attemptLogin.password)))
      throw new TypeError("Password Incorrect !");
    // store session id
    req.session.user_id_token = attemptLogin._id;
    return res.status(201).redirect(redirectTo);
  } catch (err) {
    next(err);
  }
};

export default { index, login };
