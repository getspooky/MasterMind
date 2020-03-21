/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, Response } from "express";
import { SessionInterface } from "../Interfaces/SessionInterface";

/**
 * @public
 * @desc Display a listing of the resource.
 * @function
 * @name index
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const index = async function(req: Request, res: Response): Promise<void> {
  return res.status(200).render("Profile");
};

/**
 * @public
 * @desc Log Out User.
 * @function
 * @name logOut
 * @param {SessionInterface} req
 * @param {Response} res
 * @returns {void}
 */
const logOut = async function(
  req: SessionInterface,
  res: Response
): Promise<void> {
  const destroy: Function = req.session.destroy();
  return res.redirect("/");
};

export default { index };
