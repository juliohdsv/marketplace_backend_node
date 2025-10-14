import { describe, it, expect } from "vitest";
import request from "supertest";

import { app } from "../../index.js";

describe("Find id Product (e2e)", ()=> {

  it("Should be able find product", async()=> {
    const response = await request(app)
      .get("/products/1")
      .expect(200);

    expect(response.headers["content-type"]).toMatch(/application\/json/);
    expect(response.body).toHaveProperty("product");
    expect(response.body.product).toHaveProperty("id", 1);
  })

  it("Should not be able find product", async()=> {
    const response = await request(app)
      .get("/products/0")
      .expect(400);

    expect(response.body).toHaveProperty("message", "Validation error.")
    expect(response.body).toHaveProperty("issues");
  })

})
