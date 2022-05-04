export const useSearchTableData = (rows, searchValue) => {
  const columns = rows[0] && Object.keys(rows[0]);

  return rows.filter((row) =>
    columns.some(
      (column) =>
        row[column]
          .toString()
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) > -1
    )
  );
};
