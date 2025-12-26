import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`border p-2 rounded-xl ${
          currentPage === 1
            ? "text-black/30 border-black/30 cursor-not-allowed!"
            : "text-muted/90 border-muted/90"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 ${
              currentPage === page
                ? "text-white bg-primary rounded-xl"
                : "text-black"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`border p-2 rounded-xl ${
          currentPage === totalPages
            ? "text-black/30 border-black/30 cursor-not-allowed!"
            : "text-muted/90 border-muted/90"
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default Pagination;
