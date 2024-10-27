import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AdminLayout } from "../../components/AdminLayout";

export const AddNews = () => {
  document.title = "Add News";

  const [formData, setFormData] = useState({
    url: "",
    title: "",
    description: "",
    selectedFile: null,
  });

  const apiUrl = `http://localhost:4000/api/v1/news`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Add this to check if the file is correctly selected
    setFormData({
      ...formData,
      selectedFile: file, // Ensure the file is properly set
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("url", formData.url);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("image", formData.selectedFile);

    try {
      const response = await axios.post(apiUrl, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response); // Add this to check the response from the server

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Failed to add news");
      }

      setFormData({
        url: "",
        title: "",
        description: "",
        selectedFile: null,
      });
    } catch (error) {
      console.error(error); // Log the error
      toast.error("An error occurred while adding the news");
    }
  };

  return (
    <>
      <ToastContainer />
      <AdminLayout />


      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="container mx-auto">
            <h2 className="text-xl font-bold p-2 text-center sm:text-left">Add News</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap my-5">
                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <TextField
                    id="outlined-basic"
                    label="Enter News Title*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="title"
                    value={formData.title}
                    fullWidth
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <TextField
                    id="outlined-basic"
                    label="Enter News URL*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="url"
                    value={formData.url}
                    fullWidth
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full p-2">
                  <TextField
                    id="outlined-textarea"
                    label="Enter News Description*"
                    color="secondary"
                    size="small"
                    multiline
                    name="description"
                    fullWidth
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                {/* File input for image upload */}
                <div className="w-full p-2">
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Upload News Image*
                    </Typography>
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="upload-button-file"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="upload-button-file">
                      <Button
                        variant="outlined"
                        color="primary"
                        component="span"
                        size="small"
                        style={{ textTransform: "none" }}
                      >
                        Choose File
                      </Button>
                    </label>
                    {formData.selectedFile && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {formData.selectedFile.name}
                      </Typography>
                    )}
                  </Box>
                </div>
              </div>
              <div className="p-2">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AddCircleIcon />}
                  type="submit"
                  size="small"
                  style={{ textTransform: "none" }}
                >
                  Add News
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
