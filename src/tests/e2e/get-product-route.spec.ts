import { describe, it, expect } from "vitest";
import request from "supertest";

import { app } from "../../index.js";

describe("Get Products (e2e)", ()=> {

  it("Should be able get products", async()=> {
    const response = await request(app)
      .get("/products")
      .query({ orderBy: "title" })
      .expect(200);

    expect(response.headers["content-type"]).toMatch("application/json");
    expect(response.body).toHaveProperty("products");
    expect(Array.isArray(response.body.products)).toBe(true);
  })

  it("Should not be able get products", async()=> {
    const response = await request(app)
      .get("/products")
      .query({ orderBy: "money" })
      .expect(400);

    expect(response.body).toHaveProperty("message");
  })

})
