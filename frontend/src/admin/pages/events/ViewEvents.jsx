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

import axios from "axios";
import { useFetchData } from "../../../hooks/useFetchData";
import { AdminLayout } from "../../components/AdminLayout";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

import CircularProgress from "@mui/material/CircularProgress";

export const ViewEvents = () => {
  document.title = "View Events";

  const apiUrl = `${process.env.BASE_URL}/api/v1/events`;

  const { data, loading, error, refetch } = useFetchData(apiUrl); // Use the custom hook

  const events = data.events;

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

  const handleDelete = async (eventId) => {
    try {
      const deleteUrl = apiUrl + `/${eventId}`;
      const response = await axios.delete(deleteUrl);

      if (response.data.success) {
        refetch(); // Refetch data after deletion
        toast.success(response.data.message);
      } else {
        toast.error("Failed to delete event");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred while deleting");
    }
  };

  return (
    <>
      <ToastContainer />
      <AdminLayout />{" "}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h2 className="text-xl font-bold p-2 text-center sm:text-left">
            View Events
          </h2>
          <Paper sx={{ marginTop: "20px" }}>
            {loading && (
              <div className="flex justify-center">
                <CircularProgress size="large" color="secondary" />{" "}
                {/* Show loading state */}
              </div>
            )}
            {error && <p>{error}</p>} {/* Show error message */}
            {events && (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>S No.</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Images</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {events
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((event, i) => (
                          <TableRow key={event._id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>
                              {event.title.slice(0, 20) + "..."}
                            </TableCell>
                            <TableCell>
                              {event.description.slice(0, 20) + "..."}
                            </TableCell>
                            <TableCell>
                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: "10px",
                                }}
                              >
                                {event.image.map((img, index) => (
                                  <img
                                    key={index}
                                    src={`${process.env.BASE_URL}/${img}`}
                                    alt={`Image ${index + 1}`}
                                    style={{
                                      height: "100px",
                                      width: "150px",
                                      objectFit: "contain",
                                      objectPosition: "center",
                                      borderRadius: "8px",
                                      boxShadow:
                                        "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    }}
                                  />
                                ))}
                              </div>
                            </TableCell>

                            <TableCell>
                              {new Date(event.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <div className="flex sm:block">
                                <Button
                                  onClick={() => handleDelete(event._id)}
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
                  count={events.length} // Total number of contacts
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
