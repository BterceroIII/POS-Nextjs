import { CategoriesResonseSchema, Product } from "@/src/schemas";
import UploadProductImage from "./UploadProductImage";

async function getCategories() {
  const url = `${process.env.API_URL}/category`;
  const req = await fetch(url);
  const json = await req.json();
  const categories = CategoriesResonseSchema.parse(json);
  return categories;
}

export default async function ProductForm({ product }: { product?: Product }) {
  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2 ">
        <label htmlFor="productName" className="block">
          Nombre Producto
        </label>
        <input
          id="productName"
          type="text"
          placeholder="Nombre Producto"
          className="border border-gray-300 w-full p-2"
          name="productName"
          defaultValue={product?.productName}
        />
      </div>

      <div className="space-y-2 ">
        <label htmlFor="description" className="block">
          Descripción
        </label>
        <textarea
          id="description"
          placeholder="Descripción Producto"
          className="border border-gray-300 w-full p-2"
          name="description"
          defaultValue={product?.description}
        />
      </div>

      <div className="space-y-2 ">
        <label htmlFor="price" className="block">
          Precio
        </label>
        <input
          id="price"
          type="number"
          placeholder="Precio Producto"
          className="border border-gray-300 w-full p-2"
          name="price"
          min={0}
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2 ">
        <label htmlFor="inventory" className="block">
          Inventario
        </label>
        <input
          id="inventory"
          type="number"
          placeholder="Cantidad Disponible"
          className="border border-gray-300 w-full p-2"
          name="inventory"
          min={0}
          defaultValue={product?.inventory}
        />
      </div>

      <div className="space-y-2 ">
        <label htmlFor="categoryId" className="block">
          Categoría
        </label>
        <select
          id="categoryId"
          className="border border-gray-300 w-full p-2 bg-white"
          name="categoryId"
          defaultValue={product?.categoryId}
        >
          <option value="">Seleccionar Categoría</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <UploadProductImage currentImage={product?.image} />
    </>
  );
}
