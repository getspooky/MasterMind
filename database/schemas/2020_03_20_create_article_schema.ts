/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Schema } from "mongoose";

/* Article Schema */
export const CreateArticleSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    title: {
      type: Schema.Types.String,
      required: true,
      minLength: 10,
      maxlength: 200
    },
    content: {
      type: Schema.Types.String,
      required: true,
      minLength: 120
    },
    status: {
      type: Schema.Types.Boolean,
      defaut: false
    }
  },
  { timestamps: true }
);
