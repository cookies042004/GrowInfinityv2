import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useParams } from "react-router-dom";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import { useFetchData } from "../../../hooks/useFetchData";
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  import { ToastContainer, toast } from "react-toastify";

export const UpdateProperty = () => {
  document.title = "Update Property";

  const { id } = useParams();

  const apiUrl = `${process.env.BASE_URL}/api/v1/property/${id}`;
  return (
    <>
      <ToastContainer />
      <AdminLayout />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20">
          <div className="container mx-auto">
            <h2 className="text-xl font-bold p-2 text-center sm:text-left">
              Update Property
            </h2>
            <form>
              <div className="flex flex-wrap my-5">
                {/* Property Category */}
                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <FormControl color="secondary" size="small" fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Property Category*
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="category"
                    //   value={formData.category}
                    //   onChange={handleSelectChange}
                      label="Enter Amenity Type*"
                    >
                      {categories.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                {/* Property Name */}
                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <TextField
                    label="Enter Property Name*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="name"
                    // value={formData.name}
                    // onChange={handleChange}
                    fullWidth
                  />
                </div>

                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <TextField
                    label="Enter Builder Name*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="builder"
                    value={formData.builder}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <TextField
                    label="Enter Unit (in BHK)*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <TextField
                    label="Enter Size (in sq.ft)*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
                <div className="w-full sm:w-1/2 mb-4 p-2">
                  <TextField
                    label="Enter Price(In digits)*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="price"
                    // value={formData.price}
                    // onChange={handleChange}
                    fullWidth
                  />
                </div>

                {/* Property Location */}
                <div className="w-full mb-4 p-2">
                  <TextField
                    label="Enter Property Location*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>

                {/* Property Address */}
                <div className="w-full mb-4 p-2">
                  <TextField
                    label="Enter Property Address*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="address"
                    // value={formData.address}
                    // onChange={handleChange}
                    fullWidth
                  />
                </div>

                {/* Property Description */}
                <div className="w-full mb-4 p-2">
                  <TextField
                    label="Enter Property Description*"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    name="description"
                    // value={formData.description}
                    // onChange={handleChange}
                    multiline
                    fullWidth
                  />
                </div>

                {/* Furnish Type */}
                <div className="w-full mb-4 p-2">
                  <FormControl>
                    <FormLabel color="secondary">Furnish Type</FormLabel>
                    <RadioGroup
                      row
                      name="furnishType"
                    //   value={formData.furnishType}
                    //   onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Fully Furnished"
                        control={<Radio color="secondary" />}
                        label="Fully Furnished"
                      />
                      <FormControlLabel
                        value="Semi Furnished"
                        control={<Radio color="secondary" />}
                        label="Semi Furnished"
                      />
                      <FormControlLabel
                        value="Unfurnished"
                        control={<Radio color="secondary" />}
                        label="Unfurnished"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                {/* Society Amenities */}
                <div className="w-full mb-4 p-2">
                  <FormControl component="fieldset">
                    <FormLabel color="secondary">Society Amenities</FormLabel>
                    <div className="flex flex-wrap">
                      {amenities
                        .filter((amenity) => amenity.type === "society_amenity")
                        .map((amenity) => (
                          <FormControlLabel
                            key={amenity._id}
                            control={
                              <Checkbox
                                color="secondary"
                                name={amenity._id}
                                checked={formData.societyAmenities.includes(
                                  amenity._id
                                )}
                                onChange={(e) =>
                                  handleCheckboxChange(e, "societyAmenities")
                                }
                              />
                            }
                            label={amenity.name}
                          />
                        ))}
                    </div>
                  </FormControl>
                </div>

                {/* Flat Amenities */}
                <div className="w-full mb-4 p-2">
                  <FormControl component="fieldset">
                    <FormLabel color="secondary">Flat Amenities</FormLabel>
                    <div className="flex flex-wrap">
                      {amenities
                        .filter((amenity) => amenity.type === "flat_amenity")
                        .map((amenity) => (
                          <FormControlLabel
                            key={amenity._id}
                            control={
                              <Checkbox
                                color="secondary"
                                name={amenity._id}
                                checked={formData.flatAmenities.includes(
                                  amenity._id
                                )}
                                onChange={(e) =>
                                  handleCheckboxChange(e, "flatAmenities")
                                }
                              />
                            }
                            label={amenity.name}
                          />
                        ))}
                    </div>
                  </FormControl>
                </div>

                {/* Location Advantages */}
                <div className="w-full mb-4 p-2">
                  <FormControl component="fieldset">
                    <FormLabel color="secondary">Location Advantages</FormLabel>
                    <div className="flex flex-wrap">
                      {amenities
                        .filter(
                          (amenity) => amenity.type === "location_advantages"
                        )
                        .map((amenity) => (
                          <FormControlLabel
                            key={amenity._id}
                            control={
                              <Checkbox
                                color="secondary"
                                name={amenity._id}
                                checked={formData.locationAdvantages.includes(
                                  amenity._id
                                )}
                                onChange={(e) =>
                                  handleCheckboxChange(e, "locationAdvantages")
                                }
                              />
                            }
                            label={amenity.name}
                          />
                        ))}
                    </div>
                  </FormControl>
                </div>

                {/* Image Upload */}
                <div className="w-full mb-4 p-2">
                  <FormControl component="fieldset">
                    <FormLabel id="image-upload">
                      Upload Property Images
                    </FormLabel>
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="image-upload-input"
                      type="file"
                      multiple
                      onChange={handleImageUpload}
                    />
                    <label htmlFor="image-upload-input">
                      <Button
                        variant="outlined"
                        component="span"
                        size="small"
                        style={{ textTransform: "none" }}
                      >
                        Choose Images
                      </Button>
                    </label>

                    <Typography variant="body2">
                      {uploadedImages.length} images selected
                    </Typography>

                    <div className="flex flex-wrap mt-2">
                      {renderImagePreviews()}
                    </div>
                  </FormControl>
                </div>

                {/* Submit Button */}
                <div className="p-2">
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddCircleIcon />}
                    type="submit"
                    size="small"
                    style={{ textTransform: "none" }}
                  >
                    Add Property
                  </Button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};
