/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, NextFunction } from "express";
import { SharedResponseInterface } from "./Interfaces/SharedInterface";
import i18n from "i18n";
import path from "path";

// Support Multi languages
i18n.configure({
  //define how many languages we would support in our application
  locales: ["en"],

  //define the path to language json files, default is /locales
  directory: path.join(__dirname, "../lang"),

  //define the default language
  defaultLocale: "en",

  // define a custom cookie name to parse locale settings from
  cookie: "i18n"
});

export default function(
  req: Request,
  res: SharedResponseInterface,
  next: NextFunction
) {
  i18n.init(req, res);
  res.locals.__lang = res.__;
  return next();
}
