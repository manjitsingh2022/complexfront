import { useEffect, useState } from 'react';
import { useCommonState } from '../common';
import { Link } from 'react-router-dom';


export const Message = ({ message }) => {
  console.log(message,'messssssss')
  const [displayMessage, setDisplayMessage] = useCommonState(false);

  useEffect(() => {
    if (message) {
      setDisplayMessage(true);
      const timeout = setTimeout(() => {
        setDisplayMessage(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <>
      {displayMessage && message && (
        <div
          className={`${
            message.includes("success") ? "bg-green-200" : "bg-red-200"
          } border-l-4 border ${
            message.includes("success") ? "border-green-500" : "border-red-500"
          } p-4 mt-3`} 
        >
          <p className="text-sm">{message}</p>
        </div>
      )}
    </>
  );
};



// reate pagination in a React.js application


 export const Pagination = ({ totalItems, itemsPerPage, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const handlePageChange = (page) => {
    onPageChange(page);
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium">{((currentPage - 1) * itemsPerPage) + 1}</span>
            to
            <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalItems)}</span>
            of
            <span className="font-medium">{totalItems}</span>
            results
          </p>
        </div>
        <div>
          <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Link
              to=""
              onClick={goToPreviousPage}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${currentPage === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
            >
              <span className="sr-only">Previous</span>
              &lt;
            </Link>
            {pageNumbers.map((page) => (
              <Link
                key={page}
                to=""
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${currentPage === page ? 'bg-indigo-600 text-white' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
              >
                {page}
              </Link>
            ))}
            <a
              href=""
              onClick={goToNextPage}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'}`}
            >
              <span className="sr-only">Next</span>
              &gt;
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

