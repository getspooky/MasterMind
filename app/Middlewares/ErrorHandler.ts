/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Router, Request, Response, NextFunction } from "express";
import { HttpExceptionInterface } from "../Interfaces/HttpExceptionInterface";

export function ErrorHandler(
  err: HttpExceptionInterface,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { status, message }: HttpExceptionInterface = err;
  // If err has no specified error code, set error code to 'Internal Server Error (500)'
  if (!status) status = 500;
  return res.status(status).json({
    errors: { message }
  });
}
