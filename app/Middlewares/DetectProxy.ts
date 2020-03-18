/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, Response } from "express";

/**
 * Detect Proxies with a node js Header.
 *
 * @type {Array}
 */
export const headers = [
  "HTTP_VIA",
  "VIA",
  "Proxy-Connection",
  "HTTP_X_FORWARDED_FOR",
  "HTTP_FORWARDED_FOR",
  "HTTP_X_FORWARDED",
  "HTTP_FORWARDED",
  "HTTP_CLIENT_IP",
  "HTTP_FORWARDED_FOR_IP",
  "X-PROXY-ID",
  "MT-PROXY-ID",
  "X-TINYPROXY",
  "X_FORWARDED_FOR",
  "FORWARDED_FOR",
  "X_FORWARDED",
  "FORWARDED",
  "CLIENT-IP",
  "CLIENT_IP",
  "PROXY-AGENT",
  "HTTP_X_CLUSTER_CLIENT_IP",
  "FORWARDED_FOR_IP",
  "HTTP_PROXY_CONNECTION"
];

/**
 * Detect proxies.
 *
 * @export
 * @function
 * @name detectProxy
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 * @returns {void}
 */
export function DetectProxy(req: Request, res: Response, next: Function) {
  try {
    if (
      Array.isArray(headers) &&
      headers.some(header => typeof req.headers[header] !== "undefined")
    ) {
      // tests whether at least one element in the array passes the test
      new TypeError(
        "The HTTP request contains headers with conflicting information"
      );
    }
    next();
  } catch (err) {
    next(err);
  }
}
