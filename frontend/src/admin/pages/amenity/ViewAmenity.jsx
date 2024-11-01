import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AdminLayout } from "../../components/AdminLayout";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Link } from "react-router-dom";
import { useFetchData } from "../../../hooks/useFetchData";
import axios from "axios";

export const ViewAmenity = () => {
  document.title = "View Amenity";
  const apiUrl = `${process.env.BASE_URL}/api/v1/amenities`;

  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const amenity = data.amenity;

  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  // Handle pagination change (page number)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (amenityId) => {
    try {
      const deleteUrl = apiUrl + `/${amenityId}`;
      const response = await axios.delete(deleteUrl);

      if (response.data.success) {
        refetch(); // Refetch data after deletion
        toast.success(response.data.message);
      } else {
        toast.error("Failed to delete contact");
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
            View Amenity
          </h2>
          <Paper sx={{ marginTop: "20px" }}>
            {loading && (
              <div className="flex justify-center">
                <CircularProgress size="large" color="secondary" />{" "}
                {/* Show loading state */}
              </div>
            )}
            {error && <p>{error}</p>} {/* Show error message */}
            {amenity && (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>S No.</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {amenity
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((amenity, i) => (
                          <TableRow key={amenity._id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>
                              {amenity.type === "flat_amenity"
                                ? "Flat Amenity"
                                : amenity.type === "society_amenity"
                                ? "Society Amenity"
                                : amenity.type === "location_advantages"
                                ? "Location Advantage"
                                : "Unknown"}
                            </TableCell>
                            <TableCell>{amenity.name}</TableCell>
                            <TableCell>
                              <img
                                src={`${process.env.BASE_URL}/${amenity.image}`}
                                alt={amenity.name}
                                style={{
                                  height: "50px",
                                  width: "100px",
                                  objectFit: "contain",
                                  objectPosition: "center",
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <div className="flex sm:block">
                                <Link
                                  to={`/admin/dashboard/update-amenity/${amenity._id}`}
                                >
                                  <Button
                                    onClick={() => handleEdit(amenity._id)}
                                    endIcon={<EditIcon />}
                                    variant="outlined"
                                    size="small"
                                    color="success"
                                    style={{
                                      textTransform: "none",
                                      marginRight: "20px",
                                    }}
                                  >
                                    Edit
                                  </Button>
                                </Link>
                                <Button
                                  onClick={() => handleDelete(amenity._id)}
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
                  count={amenity.length} // Total number of contacts
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
