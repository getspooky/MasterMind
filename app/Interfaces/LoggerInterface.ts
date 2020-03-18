/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export interface LoggerInterface {
  error(err: any): void;
  appStarted(port: number, host: string, tunnelStarted?): void;
}
