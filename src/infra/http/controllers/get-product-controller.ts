import z, { ZodError } from "zod";
import { makeGetProductUseCase } from "@/app/use-cases/factories/make-get-product-usecase.ts";
import type { Request, Response } from "express";
import { ProductNotExistsError } from "@/app/errors/product-not-exists-error.ts";

export async function getProductController(request: Request, response: Response){
  try {
    const schema = z.object({ id: z.coerce.number() })
    const { id } = schema.parse(request.params);
    const getProductUseCase = makeGetProductUseCase();
    const { product } = await getProductUseCase.execute(id);

    return response.status(200).send({ product });

  } catch (error) {
    console.error(error)

    if(error instanceof ProductNotExistsError){
      return response
        .status(404)
        .send({ message: "Bad request" })
    }

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
