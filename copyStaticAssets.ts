/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as shell from "shelljs";

shell.cp("-R", "public/js", "dist/public/js/");
shell.cp("-R", "public/css", "dist/public/css/");
shell.cp("-R", "public/assets", "dist/public/assets/");
shell.cp("-R", "lang", "dist/lang/");
shell.cp("-R", "views", "dist/views/");
shell.cp("-R", "logs", "dist/logs/");
