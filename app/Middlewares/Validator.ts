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
 * @type {string}
 */
type ServiceType = "Login" | "Register";

/**
 * @public
 * @desc Get a validator for an incoming registration request.
 * @function
 * @name validator
 * @param {ServiceType} service
 * @returns {Array<ValidationChain>}
 */
export const Validator: Function = function(
  service: ServiceType
): Array<ValidationChain> {
  const rules: Array<ValidationChain> = [
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
      })
  ];
  if (service === "Register")
    rules.push(
      check("username")
        .not()
        .isEmpty()
        .withMessage("Username is missing")
        .isLength({
          min: 10
        })
        .withMessage("Username must have more than 10 characters")
    );
  return rules;
};