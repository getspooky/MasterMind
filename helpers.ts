/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * @desc Gets the value of an environment variable. Supports boolean, empty and null.
 * @param {string} key
 * @param { string | number | boolean } value
 * @returns {string}
 */
export function env(
  key: string,
  value: string | number | boolean = null
): string {
  return (process.env[key] || value) as string;
}
