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
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import { useFetchData } from "../../../hooks/useFetchData"; // Import your hook
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { AdminLayout } from "../../components/AdminLayout";

export const ViewContact = () => {
  document.title = "View Contact";
  const apiUrl = `http://localhost:4000/api/v1/contact`;

  const { data, loading, error, refetch } = useFetchData(apiUrl); // Use the custom hook

  const contacts = data.contact;

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

  const handleDelete = async (contactId) => {
    try {
      const deleteUrl = apiUrl + `/${contactId}`;
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
          <h2 className="text-xl p-2 font-bold text-center sm:text-left">View Contact Enquiries</h2>
          <Paper sx={{ marginTop: "20px" }}>
            {loading && (
              <div className="flex justify-center">
                <CircularProgress  size="large" color="secondary"/> {/* Show loading state */}
              </div>
            )}
            {error && <p>{error}</p>} {/* Show error message */}
            {contacts && (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>S No.</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Budget</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {contacts
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((contact, i) => (
                          <TableRow key={contact._id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>{contact.name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.phone}</TableCell>
                            <TableCell>{contact.budget}</TableCell>
                            <TableCell>{contact.message}</TableCell>
                            <TableCell>
                              {new Date(contact.createdAt).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <Button
                                onClick={() => handleDelete(contact._id)}
                                endIcon={<DeleteIcon />}
                                variant="contained"
                                size="small"
                                color="error"
                                style={{ textTransform: "none" }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={contacts.length} // Total number of contacts
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
