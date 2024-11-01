import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
} from "@mui/material";
import { useFetchData } from "../../../hooks/useFetchData"; // Import your hook
import { AdminLayout } from "../../components/AdminLayout";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

export const ViewNews = () => {
  document.title = "View News";
  const apiUrl = `${process.env.BASE_URL}/api/v1/news`;

  const { data, loading, error, refetch } = useFetchData(apiUrl); // Use the custom hook

  const news = data.news;

  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  // Handle pagination change (page number)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (newsId) => {
    try {
      const deleteUrl = apiUrl + `/${newsId}`;
      const response = await axios.delete(deleteUrl);

      if (response.data.success) {
        refetch(); // Refetch data after deletion
        toast.success(response.data.message);
      } else {
        toast.error("Failed to delete news");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred while deleting");
    }
  };
  return (
    <>
      <ToastContainer />
      <AdminLayout />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h2 className="text-xl font-bold p-2 text-center sm:text-left">
            View News
          </h2>
          <Paper sx={{ marginTop: "20px" }}>
            {loading && (
              <div className="flex justify-center">
                <CircularProgress size="large" color="secondary" />{" "}
                {/* Show loading state */}
              </div>
            )}
            {error && <p>{error}</p>} {/* Show error message */}
            {news && (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>S No.</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {news
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((article, i) => (
                          <TableRow key={article._id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>{article.title.slice(0,20) + '...'}</TableCell>
                            <TableCell>{article.description.slice(0,80) + '....'}</TableCell>
                            <TableCell>{article.url}</TableCell>
                            <TableCell>
                              <img
                                src={`${process.env.BASE_URL}/${article.image}`}
                                alt={article.title}
                                style={{
                                  height: "100px",
                                  width: "200px",
                                  objectFit: "contain",
                                  objectPosition: "center",
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              {new Date(article.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <div className="flex sm:block">
                                <Link
                                  to={`/admin/dashboard/update-news/${article._id}`}
                                >
                                  <Button
                                    onClick={() => handleEdit(article._id)}
                                    endIcon={<EditIcon />}
                                    variant="outlined"
                                    size="small"
                                    color="success"
                                    style={{
                                      textTransform: "none",
                                      marginRight: "20px",
                                      marginBottom: "10px"
                                    }}
                                  >
                                    Edit
                                  </Button>
                                </Link>
                                <Button
                                  onClick={() => handleDelete(article._id)}
                                  endIcon={<DeleteIcon />}
                                  variant="contained"
                                  size="small"
                                  color="error"
                                  style={{ textTransform: "none" }}
                                >
                                  Delete
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={news.length} // Total number of contacts
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </>
            )}
          </Paper>
        </div>
      </div>
    </>
  );
};
