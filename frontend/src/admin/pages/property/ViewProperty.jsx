import React, { useState } from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { toast, ToastContainer } from "react-toastify";
import { useFetchData } from "../../../hooks/useFetchData";
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

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import axios from "axios";

export const ViewProperty = () => {
  document.title = "View Property";

  const apiUrl = "http://localhost:4000/api/v1/property";

  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const properties = data.properties;

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

  const handleDelete = async (propertyId) => {
    try {
      const deleteUrl = apiUrl + `/${propertyId}`;
      const response = await axios.delete(deleteUrl);

      if (response.data.success) {
        refetch(); 
        toast.success(response.data.message);
      } else {
        toast.error("Failed to delete news");
      }
    } catch (error) {
      console.log(error);
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
            View Property
          </h2>
          <Paper sx={{ marginTop: "20px" }}>
            {loading && (
              <div className="flex justify-center">
                <CircularProgress size="large" color="secondary" />{" "}
                {/* Show loading state */}
              </div>
            )}
            {error && <p>{error}</p>} {/* Show error message */}
            {properties && (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>S No.</TableCell>
                        <TableCell>Property Category</TableCell>
                        <TableCell>Property Name</TableCell>
                        <TableCell>Property Location</TableCell>
                        <TableCell>Property Description</TableCell>
                        <TableCell>Property Address</TableCell>
                        <TableCell>Parking</TableCell>
                        <TableCell>Furnish Type</TableCell>
                        <TableCell>Flat Amenity</TableCell>
                        <TableCell>Society Amenity</TableCell>
                        <TableCell>Location Advantages</TableCell>
                        <TableCell size="large">Property Images</TableCell>
                        <TableCell>Property Brochure</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {properties
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((property, i) => {
                          return (
                            <TableRow key={property._id}>
                              <TableCell>{i + 1}</TableCell>
                              <TableCell>{property.category?.name}</TableCell>
                              <TableCell>{property.name}</TableCell>
                              <TableCell>{property.location}</TableCell>
                              <TableCell>{property.description}</TableCell>
                              <TableCell>
                                {property.address +
                                  ", " +
                                  property.city +
                                  ", " +
                                  property.state +
                                  ", " +
                                  property.pincode}
                              </TableCell>
                              <TableCell>{property.parking}</TableCell>
                              <TableCell>{property.furnishType}</TableCell>
                              <TableCell>
                                {property.amenities.filter((item) => item.type == 'flat_amenity').map((amenityItem, i) => (
                                  <span key={i}>{amenityItem.name + " "}</span>
                                ))}
                              </TableCell>
                              <TableCell>
                                {property.amenities.filter((item) => item.type == 'society_amenity' ).map((amenityItem, i) => (
                                  <span key={i}>{amenityItem.name + " "}</span>
                                ))}
                              </TableCell>
                              <TableCell>
                                {property.amenities.filter((item) => item.type == 'location_advantages').map((amenityItem, i) => (
                                  <span key={i}>{amenityItem.name + " "}</span>
                                ))}
                              </TableCell>
                              <TableCell>
                                <div className="flex flex-col gap-3"> 
                                {property.propertyImages?.map(
                                  (element, index) => {
                                    return (
                                      <img
                                        key={index}
                                        src={`http://localhost:4000/${element}`}
                                        alt={
                                          element.split("/")[
                                            element.split("/").length - 1
                                          ]
                                        }
                                        style={{
                                          width: "300px",
                                        }}
                                      />
                                    );
                                  }
                                )}
                                </div>
                                
                              </TableCell>
                              <TableCell>
                                {
                                  property.brochure.split("\\")[
                                    property.brochure.split("\\").length - 1
                                  ]
                                }
                              </TableCell>
                              <TableCell>
                                <div className="flex sm:block">
                                  <Button
                                    onClick={() => handleDelete(property._id)}
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
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={properties.length} // Total number of contacts
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
