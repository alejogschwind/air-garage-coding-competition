import { useState, useEffect } from "react";

const usePagination = ({ totalItems, numOfItemsPerPage }) => {
  const lastPage = Math.ceil(totalItems / numOfItemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);



  return { currentPage, lastPage, setCurrentPage };
};

export default usePagination;