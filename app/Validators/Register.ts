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
 * @desc Get a validator for an incoming registration request(Register).
 * @function
 * @name validator
 * @returns {Array<ValidationChain>}
 */
export default function(): Array<ValidationChain> {
  return [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is missing")
      .isEmail()
      .withMessage("Email is not valid"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is missing")
      .isLength({
        min: 10
      }),
    check("username")
      .not()
      .isEmpty()
      .withMessage("Username is missing")
      .isLength({
        min: 10
      })
      .withMessage("Username must have more than 10 characters")
  ];
}
