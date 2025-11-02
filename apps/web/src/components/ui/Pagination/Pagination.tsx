import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shadcn/ui/pagination";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationComponent({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            title="Anterior"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePrevious();
            }}
            className={page === 1 ? "opacity-50 pointer-events-none" : ""}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(i + 1);
              }}
              isActive={page === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 5 && <PaginationEllipsis />}

        <PaginationItem>
          <PaginationNext
            title="Próximo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
            className={
              page === totalPages ? "opacity-50 pointer-events-none" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
