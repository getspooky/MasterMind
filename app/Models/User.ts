/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import mongoose, { Model } from "mongoose";
import { hash, compare } from "bcrypt";
import { env } from "../../helpers";
import { CreateUserSchema } from "../../database/schemas/2020_03_18_create_user_schema";
import { UserModelInterface } from "../Interfaces/UserInterface";

const salt: string = env("dsd");
// pre save middleware.
CreateUserSchema.pre("save", async function(next) {
  // Hash given password.
  // eslint-disable-next-line radix
  this["password"] = await hash(this["password"], parseInt(salt));
  next();
});

// pre validate middleware.
CreateUserSchema.pre("validate", async next => {
  next();
});

// pre remove middleware.
CreateUserSchema.pre("remove", async next => {
  next();
});

// Compare two given Passwords.
CreateUserSchema.statics.comparePassword = async function(
  password: string,
  hash: string
): Promise<boolean | TypeError> {
  const match: boolean = await compare(password, hash);
  if (match) {
    return true;
  } else {
    throw new TypeError("Incorrect Password");
  }
};

export const User: Model<UserModelInterface> = mongoose.model<
  UserModelInterface
>("User", CreateUserSchema);
