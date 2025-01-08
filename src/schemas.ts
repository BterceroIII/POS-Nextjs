import {z} from 'zod';

export const ProductSchema = z.object({
    id: z.number(),
    productName: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.coerce.number(),
    inventory: z.number(),
    categoryId: z.number()
})

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string()
})

export const CategoriesResonseSchema = z.array(CategorySchema);
export const CategoryWithProductsResponseSchema = CategorySchema.extend({
    products: z.array(ProductSchema)
});

const ShoppingCartContentsSchema = ProductSchema.pick({
    productName: true,
    image: true,
    price: true,
    inventory: true,
}).extend({
    productId: z.number(),
    quantity: z.number()
})
export const ShopingCartSchema = z.array(ShoppingCartContentsSchema);

export type Product = z.infer<typeof ProductSchema>
export type ShoppingCart = z.infer<typeof ShopingCartSchema>
export type CartItem = z.infer<typeof ShoppingCartContentsSchema>