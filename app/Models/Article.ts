/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import mongoose from "mongoose";
import { CreateArticleSchema } from "../../database/schemas/2020_03_20_create_article_schema";
import {
  ArticleModelInterface,
  ArticleInterface
} from "../Interfaces/ArticleInterface";

// pre save middleware.
CreateArticleSchema.pre("save", async function(next) {
  // Hash given password.
  next();
});

// pre validate middleware.
CreateArticleSchema.pre("validate", async next => {
  next();
});

// pre remove middleware.
CreateArticleSchema.pre("remove", async next => {
  next();
});

export default mongoose.model<ArticleInterface, ArticleModelInterface>(
  "Article",
  CreateArticleSchema
);
