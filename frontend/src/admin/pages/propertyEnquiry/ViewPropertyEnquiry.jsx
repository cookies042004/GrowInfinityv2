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
import { ToastContainer, toast } from "react-toastify";
import { useFetchData } from "../../../hooks/useFetchData";
import CircularProgress from "@mui/material/CircularProgress";
import { AdminLayout } from "../../components/AdminLayout";

export const ViewPropertyEnquiry = () => {
    document.title = "View Property Enquiry";
    const apiUrl = `${process.env.BASE_URL}/api/v1/property-enquiry`;
    const { data, loading, error, refetch } = useFetchData(apiUrl);
    const propertyEnquiries = data.propertyEnquiries;

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

    return (
        <>
            <AdminLayout />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <h2 className="text-xl p-2 font-bold text-center sm:text-left">View Property Enquiries</h2>
                    <Paper sx={{ marginTop: "20px" }}>
                        {loading && (
                            <div className="flex justify-center">
                                <CircularProgress size="large" color="secondary" /> {/* Show loading state */}
                            </div>
                        )}
                        {error && <p>{error}</p>} {/* Show error message */}
                        {propertyEnquiries && (
                            <>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>S No.</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Mobile</TableCell>
                                                <TableCell>Property</TableCell>
                                                <TableCell>Message</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {propertyEnquiries
                                                .slice(
                                                    page * rowsPerPage,
                                                    page * rowsPerPage + rowsPerPage
                                                )
                                                .map((propertyEnquiry, i) => (
                                                    <TableRow key={propertyEnquiry._id}>
                                                        <TableCell>{i + 1}</TableCell>
                                                        <TableCell>{propertyEnquiry.name}</TableCell>
                                                        <TableCell>{propertyEnquiry.mobile}</TableCell>
                                                        <TableCell>{propertyEnquiry.property.name}</TableCell>
                                                        <TableCell>{propertyEnquiry.message}</TableCell>
                                                    </TableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={propertyEnquiries.length} // Total number of contacts
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
    )
}
