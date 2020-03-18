/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Document } from "mongoose";

export interface UserInterface {
  username: string;
  email: string;
  password: string;
}

export interface UserModelInterface extends UserInterface, Document {}
