import Pagination from "@mui/material/Pagination";

const PaginationUI = ({ pageCount, page, setPage }) => {
  const handleChange = (e, value) => setPage(value);

  return <Pagination count={pageCount} page={page} onChange={handleChange} />;
};

export default PaginationUI;
