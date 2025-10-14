import z, { ZodError } from "zod";
import type { Request, Response } from "express";
import { ProductNotExistsError } from "@/app/errors/product-not-exists-error.ts";
import { makeFindIdProductUseCase } from "@/app/use-cases/factories/make-find-id-product-usecase.ts";

export async function findIdProductController(request: Request, response: Response){
  try {
    const schema = z.object({ id: z.coerce.number() })
    const { id } = schema.parse(request.params);
    const findIdProductUseCase = makeFindIdProductUseCase();
    const { product } = await findIdProductUseCase.execute(id);

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
