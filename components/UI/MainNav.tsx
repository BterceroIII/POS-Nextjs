import { CategoriesResonseSchema } from "@/src/schemas";
import Logo from "./Logo";
import Link from "next/link";

async function getCategories() {
  const url = `${process.env.API_URL}/category`;
  const request = await fetch(url);
  const json = await request.json();
  const categories = await CategoriesResonseSchema.parse(json);
  return categories;
}

export default async function MainNav() {
  const categories = await getCategories();

  return (
    <header className="px-10 py-5 bg-gray-700 flex flex-col md:flex-row justify-between ">
      <div className="flex justify-center">
        <Logo />
      </div>

      <nav className="flex flex-col md:flex-row gap-2 items-center mt-5 md:mt-0">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/${category.id}`}
            className="text-white hover:text-green-400 font-bold p-2 transition-colors duration-300"
          >
            {category.name}
          </Link>
        ))}

        <Link
          href={"/admin/sales"}
          className="rounded bg-green-500 font-bold py-2 px-10 hover:bg-green-300 transition-colors duration-300"
        >
          Panel de Administracion
        </Link>
      </nav>
    </header>
  );
}
