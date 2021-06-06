import React from 'react';

import { ReactComponent as LeftArrowIcon } from "../../assets/svgs/leftarrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/svgs/rightarrow.svg";

import {
  PaginationWrapper,
  Button,
} from './styles';

const Pagination = ({ currentPage, lastPage, setCurrentPage }) => {

  const [pages, setPages] = React.useState([]);
  const calculatePages = () => {
    // TODO: Think a better way to be less complex.
    if (lastPage === 0) return [];
    let pages = [];

    // Two before current page
    for (let i = 2; i > 0; i--) {
      if (currentPage - i > 0) {
        pages.push(currentPage - i);
      }
    }

    pages.push(currentPage);

    // Two after current page
    let nextPageToAdd = pages[pages.length - 1] + 1;
    while (pages.length < 5 && nextPageToAdd <= lastPage) {
      pages.push(nextPageToAdd);
      nextPageToAdd = pages[pages.length - 1] + 1;
    }

    // Case That current page is last page, we need
    // to add more than 2 pages before current page
    nextPageToAdd = pages[0] - 1;
    while (pages.length < 5 && nextPageToAdd > 0) {
      pages.unshift(nextPageToAdd);
      nextPageToAdd = pages[0] - 1;
    }

    return pages;
  };

  const previousPage = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage + 1 <= lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  React.useEffect(() => {
    setPages(calculatePages());
  }, [currentPage, lastPage]);

  return (
    <PaginationWrapper>
      <Button
        arrow={true}
        clickable={currentPage !== 1}
        onClick={previousPage}
      >
        <LeftArrowIcon />
      </Button>
      {
        pages.map(page => {
          return (
            <Button
              active={currentPage === page}
              clickable={currentPage !== page}
              onClick={() => setCurrentPage(page)}
            >{page}</Button>
          );
        })
      }
      <Button
        arrow={true}
        clickable={currentPage !== lastPage}
        onClick={nextPage}
      >
        <RightArrowIcon />
      </Button>
    </PaginationWrapper >
  );
};

export default Pagination;
