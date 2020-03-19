/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, Response } from "express";

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
  return res.status(200).render("Register");
};

/**
 * @desc Display the specified resource.
 * @function
 * @name show
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const register = function(req: Request, res: Response): void {};

export default { index, register };
