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
const login = function(req: Request, res: Response): void {};

export default { index, login };