/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Model, Document } from "mongoose";

export interface ArticleInterface extends Document {
  title: string;
  content: string;
  status: boolean;
  category?: Array<string>;
}

export interface ArticleModelInterface extends Model<ArticleInterface> {}
