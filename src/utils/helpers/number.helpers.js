export const getTotalPage = (totalContent, contentPerPage) => {
  return Math.ceil(totalContent / contentPerPage);
};
