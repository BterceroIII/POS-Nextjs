import AddProductoForm from "@/components/products/AddProductoForm";
import Heading from "@/components/UI/Heading";
import Link from "next/link";


export default function NewProductPage() {
  return (
    <>
        <Link
            href='/admin/products?page=1'
            className='rounded bg-green-400 font-bold py-2 px-10'
        >Volver</Link>
        <Heading>Administrar Productos</Heading>
        <AddProductoForm />
    </>
  )
}
