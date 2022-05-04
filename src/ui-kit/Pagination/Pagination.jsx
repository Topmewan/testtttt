import React from "react";
import { getPagesArray } from "../../utils/helpers/array.helpers";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./Pagination.module.scss";

const Pagination = ({ activePage, totalPages,className,setActivePage}) => {
  const pagesArr = getPagesArray(totalPages);

  return (
    <div className={`${styles.pagination} ${className}`}>
      <span onClick={() => setActivePage(activePage - 1)}>Назад</span>
      <div className={styles.pages}>
        {pagesArr.map((page) => (
          <span
            className={`${activePage === page && styles.active}`}
            key={nanoid()}
            onClick={() => setActivePage(page)}
          >
            {page}
          </span>
        ))}
      </div>
      <span onClick={() => setActivePage(activePage + 1)}>Далее</span>
    </div>
  );
};

export default Pagination;
