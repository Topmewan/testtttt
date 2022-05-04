import {useEffect, useState} from "react";
import {Pagination} from "../index";
import {useSortableData} from "../../hooks";
import {getTotalPage} from "../../utils/helpers/number.helpers";
import {useSearchParams} from "react-router-dom";

import styles from "./Table.module.scss";


const Table = ({columns, rows}) => {
  const {items, requestSort} = useSortableData(rows);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageQuery = searchParams.get('page') || 1;
  const [activePage, setActivePage] = useState(pageQuery);

  const rowsPerPage = 10;
  const count = items.length;
  const totalPages = getTotalPage(count, rowsPerPage);

  const paginationRows = items.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  const handlePage = (page) => {
    setActivePage(page)
  }

  useEffect(() => {
    setSearchParams({page: activePage})
  }, [activePage, setSearchParams])

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>
              <div className={styles.item}>
                <p>{column.label}</p>
                <span onClick={() => requestSort(column.accessor)}>
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.353553"
                        y1="0.646447"
                        x2="6.18011"
                        y2="6.47301"
                        stroke="#FCFCFC"
                      />
                      <line
                        x1="5.64645"
                        y1="6.30331"
                        x2="11.3033"
                        y2="0.646453"
                        stroke="white"
                      />
                    </svg>
                  </span>
              </div>
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {paginationRows.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.body}</td>
          </tr>
        ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={handlePage}
          className={styles.pagination}
        />
      )}
    </div>
  );
};

export default Table;
