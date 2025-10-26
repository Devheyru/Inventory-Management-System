import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  baseUrl: string;
  searchParams: Record<string, string>;
}

export default function Pagination({
  totalPages,
  currentPage,
  baseUrl,
  searchParams,
}: PaginationProps) {
  if (totalPages < 1) return null;
  const getPageUrl = (page: number) => {
    const params = new URLSearchParams({
      ...searchParams,
      page: String(page),
    });
    return `${baseUrl}?${params.toString()}`;
    0;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }
    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }
    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex items-center justify-center gap-1">
      <Link
        href={getPageUrl(currentPage - 1)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg ${
          currentPage <= 1
            ? "text-gray-400 cursor-not-allowed bg-gray-100"
            : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"
        } `}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft />
        <span className="whitespace-nowrap">Previous</span>
      </Link>

      {visiblePages.map((page, key) => {
        if (page === "...") {
          return (
            <span key={key} className="px-3 py-2 text-sm text-gray-500">
              ...
            </span>
          );
        }
        const pageNumber = page as number;
        const isCurrentPage = pageNumber === currentPage;

        return (
          <Link
            key={key}
            href={getPageUrl(pageNumber)}
            className={`px-3 py-2 text-sm font-medium rounded-lg ${
              isCurrentPage
                ? "bg-purple-700 text-white"
                : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}
      <Link
        href={getPageUrl(currentPage + 1)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg ${
          currentPage >= totalPages
            ? "text-gray-400 cursor-not-allowed bg-gray-100"
            : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"
        } `}
        aria-disabled={currentPage >= totalPages}
      >
        <span className="whitespace-nowrap">Next</span>
        <ChevronRight />
      </Link>
    </nav>
  );
}
