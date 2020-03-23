/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Response, NextFunction } from "express";
import { HttpExceptionInterface } from "../Interfaces/HttpExceptionInterface";
import { SessionInterface } from "../Interfaces/SessionInterface";

export function ErrorHandler(
  err: HttpExceptionInterface,
  req: SessionInterface,
  res: Response,
  next: NextFunction
): void {
  let { status, message }: HttpExceptionInterface = err;
  // If err has no specified error code, set error code to 'Internal Server Error (500)'
  if (!status) status = 500;
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash("danger", message as string);
  return res.status(status).redirect(req.url);
}
