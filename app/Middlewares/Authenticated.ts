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
 * @desc Check if the user is already authenticated.
 * @exports
 * @function
 * @name Authenticated
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 * @returns {boolean|TypeError}
 */
export const Authenticated = function(
  req: SessionInterface,
  res: Response,
  next: Function
): boolean | void {
  if (
    req.session.user_id_token === null ||
    typeof req.session.user_id_token === "undefined"
  )
    return res.redirect("/");
  next();
};
