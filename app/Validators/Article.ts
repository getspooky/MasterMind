/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { check, ValidationChain } from "express-validator";

/**
 * @public
 * @desc Get a validator for an incoming registration request(Login).
 * @function
 * @name validator
 * @returns {Array<ValidationChain>}
 */
export default function(): Array<ValidationChain> {
  return [
    check("title")
      .not()
      .isEmpty()
      .withMessage("Title is missing")
      .isString()
      .withMessage("Title is not valid"),
    check("content")
      .not()
      .isEmpty()
      .withMessage("Content is missing")
      .isLength({
        min: 100
      })
  ];
}
