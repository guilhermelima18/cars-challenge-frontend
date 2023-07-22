import { Button } from "react-bootstrap";

type PaginationItemProps = {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
};

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return <Button variant="danger">{number}</Button>;
  }

  return (
    <Button
      data-testid="btn-pagination"
      variant="outline-danger"
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};
