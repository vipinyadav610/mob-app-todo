import React from "react";

function Pagination({ todosPerPage, totalTodos, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)}>{number}</a>
        </li>
      ))}
    </div>
  );
}

export default Pagination;
