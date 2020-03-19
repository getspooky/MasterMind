/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import request from "supertest";
import app from "../app/App";

describe("/Welcome", function() {
  it("Should return status 200", function(done) {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200, done);
  });
});
