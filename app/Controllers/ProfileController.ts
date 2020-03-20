/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, Response } from "express";
import { validationResult } from "express-validator";

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

export default { index };
