/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import User from "../Models/User";
import { RegisterInterface } from "../Interfaces/RegisterInterface";
import { SessionInterface } from "../Interfaces/SessionInterface";

/*
|--------------------------------------------------------------------------
| Register Controller
|--------------------------------------------------------------------------
|
| This controller handles the registration of new users as well as their
| validation and creation.
|
*/

/**
 * @desc Where to redirect users after login.
 * @type {string}
 */
const redirectTo: string = "/profile";

/**
 * @public
 * @desc Display a listing of the resource.
 * @function
 * @name index
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const index = function(req: Request, res: Response): void {
  return res.status(200).render("Register", { csrfToken: req.csrfToken() });
};

/**
 * @public
 * @desc Display the specified resource.
 * @function
 * @name show
 * @param {SessionInterface} req
 * @param {Response} res
 * @returns {void}
 */
const register = async function(
  req: SessionInterface,
  res: Response,
  next: NextFunction
): Promise<void | TypeError> {
  try {
    const { username, email, password }: RegisterInterface = { ...req.body };
    // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!validationResult(req).isEmpty)
      throw new TypeError("The given inputs was Invalid");
    if (await User.findOne({ email }))
      throw new TypeError("Account already exists!");
    // Create a new Instance.
    const attemptRegister = await new User({
      email,
      username,
      password
    }).save();
    if (!attemptRegister) throw new TypeError("Oops Something went wrong!");
    // store session id
    req.session.user_id_token = attemptRegister._id;
    return res.status(201).redirect(redirectTo);
  } catch (err) {
    next(err);
  }
};

export default { index, register };
