import z, { ZodError } from "zod";
import type { Request, Response } from "express";

import { makeGetProductUseCase } from "@/app/use-cases/factories/make-get-product-usecase.js";

export async function getProductController(request: Request, response: Response){
  try {
    const querySchema = z.object({
      orderBy: z.enum(["title", "price", "category", "id"]).default("title"),
    });

    const { orderBy } = querySchema.parse(request.query);
    const getProductUseCase = makeGetProductUseCase();
    const { products } = await getProductUseCase.execute({ orderBy });

    return response.status(200).send({ products });

  } catch (error) {
    console.error(error)

    if(error instanceof ZodError){
      return response
        .status(400)
        .send({ message: "Validation error.", issues: error.format() })
    }

    return response
      .status(500)
      .send({ error: "Server internal error." })
  }
}
