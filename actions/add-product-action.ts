"use server";

import { ErrorResponseSchema, ProductFormSchema } from "@/src/schemas";

type ActionStateType = {
  errors: string[];
  success: string;
};

export async function addProduct(
  prevState: ActionStateType,
  formData: FormData,
) {
  const product = ProductFormSchema.safeParse({
    productName: formData.get("productName"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: formData.get("image"),
    inventory: formData.get("inventory"),
    categoryId: formData.get("categoryId"),
  });

  if (!product.success) {
    return {
      errors: product.error.issues.map((issue) => issue.message),
      success: "",
    };
  }

  // Comunicar con el servidor API

  const url = `${process.env.API_URL}/product`;
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product.data),
  });
  const json = await req.json();

  if (!req.ok) {
    const errors = ErrorResponseSchema.parse(json);
    return {
      errors: errors.message.map((issue) => issue),
      success: "",
    };
  }

  return {
    errors: [],
    success: "Producto Agregado Correctamente",
  };
}
