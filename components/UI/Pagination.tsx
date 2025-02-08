import Link from "next/link";

type PaginationProps = {
  page: number;
  totalPages: number;
  baseUrl: string;
};

export default function Pagination({
  page,
  totalPages,
  baseUrl,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center py-10">
      {page > 1 && (
        <Link
          href={`${baseUrl}?page=${page - 1}`}
          className="px-4 py-2 mx-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          &laquo;
        </Link>
      )}

      {pages.map((currentPage) => (
        <Link
          key={currentPage}
          href={`${baseUrl}?page=${currentPage}`}
          className={`px-4 py-2 mx-2 rounded-lg ${currentPage === page ? "bg-gray-300" : "bg-gray-100"} hover:bg-gray-200 transition-colors `}
        >
          {currentPage}
        </Link>
      ))}

      {page < totalPages && (
        <Link
          href={`${baseUrl}?page=${page + 1}`}
          className="px-4 py-2 mx-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
