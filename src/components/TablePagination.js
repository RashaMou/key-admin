import React from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const TablePagination = ({
  pagesCount,
  currentPage,
  handleNextClick,
  handlePageClick,
  handlePreviousClick,
}) => {
  return (
    <Pagination>
      <PaginationItem disabled={currentPage <= 0}>
        <PaginationLink onClick={handlePreviousClick} previous href="#" />
      </PaginationItem>
      {[...Array(pagesCount)].map((page, index) => {
        return (
          <PaginationItem active={index === currentPage} key={index}>
            <PaginationLink onClick={(e) => handlePageClick(e, index)} href="#">
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage >= pagesCount}>
        <PaginationLink onClick={handleNextClick} next href="#" />
      </PaginationItem>
    </Pagination>
  );
};

TablePagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default TablePagination;
