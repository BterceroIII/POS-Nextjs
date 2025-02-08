import { Product } from "@/src/schemas";
import { formatCurrency, getImagePath, isAviable } from "@/src/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded bg-white shadow relative p-5">
      <div className={`${!isAviable(product.inventory) && "opacity-50"}`}>
        <Image
          src={getImagePath(product.image)}
          alt={`Imagen de producto ${product.productName}`}
          width={400}
          height={600}
          priority
        />
        <div className="p-3 space-y-2">
          <h3 className="text-xl font-bold text-gray-600">
            {product.productName}
          </h3>
          <p className="text-gray-500 font-bold">{product.description}</p>
          <p className="text-gray-500">Disponibles: {product.inventory}</p>
          <p className="text-2xl font-extrabold  text-gray-900">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
      {isAviable(product.inventory) ? (
        <AddProductButton product={product} />
      ) : (
        <p className="absolute top-0 right-0 bg-red-600 text-white font-bold p-2 rounded-bl-lg">
          Agotado
        </p>
      )}
    </div>
  );
}
