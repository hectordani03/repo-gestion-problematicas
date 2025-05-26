const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = (currentPage, totalPages) => {
    if (totalPages <= 1) return [1];
    
    const pages = new Set([1, totalPages, currentPage]);
    
    if (currentPage > 2) pages.add(currentPage - 1);
    if (currentPage < totalPages - 1) pages.add(currentPage + 1);
    
    if (currentPage > 3) pages.add('ellipsis-start');
    if (currentPage < totalPages - 2) pages.add('ellipsis-end');
    
    const pageOrder = {
      'ellipsis-start': 1.5,
      'ellipsis-end': totalPages - 0.5
    };
    
    return [...pages]
      .filter(p => p === 'ellipsis-start' || p === 'ellipsis-end' || (p >= 1 && p <= totalPages))
      .sort((a, b) => (pageOrder[a] || a) - (pageOrder[b] || b));
  };
  const pages = getPages(currentPage, totalPages);
  
  return (
    <div className="flex gap-1 items-center">
      {pages.map((page, idx) =>
        page === "ellipsis-start" || page === "ellipsis-end" ? (
          <span key={idx} className="px-2 text-gray-400 select-none">
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
            className={`px-3 py-1 rounded-md text-sm border transition ${
              page === currentPage
                ? "bg-blue-500 text-white cursor-default"
                : "bg-white text-blue-500 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default PaginationControls;
