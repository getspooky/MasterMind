/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Schema } from "mongoose";

/* User Schema */
export const CreateUserSchema: Schema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      required: true,
      minLength: 10
    },
    email: {
      type: Schema.Types.String,
      required: true,
      minLength: 5,
      validate: {
        validator(v) {
          // eslint-disable-next-line no-useless-escape
          return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
            v
          );
        }
      }
    },
    password: {
      type: Schema.Types.String,
      required: true,
      minLength: 10
    },
    email_verified_at: {
      type: Schema.Types.Boolean,
      required: false,
      default: false
    },
    // Reset Password Schema
    reset: {
      token: {
        type: Schema.Types.String,
        required: false,
        length: 90,
        expires: "15m"
      }
    }
  },
  { timestamps: true }
);
