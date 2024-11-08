import React, { useState } from "react";
import propertycard from "../assets/img/propertycard.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DoneIcon from "@mui/icons-material/Done";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

export const Card = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // setFormData({ name: '', mobile: '', message: '', property: id }); // Reset form
    // setError('');
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#f3f3fe",
    borderRadius: "40px",
    boxShadow: 24,
    py: 2,
    px: 1,
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="grid sm:grid-cols-12">
        <div className="col-span-3 m-3">
          <div className="border relative p-2 rounded-lg hover:shadow-2xl bg-white">
            <div className="flex justify-center">
              <img
                src={propertycard}
                alt=""
                className="h-[200px] w-[100%] rounded-lg"
              />
            </div>
            <div className="mt-3 font-roboto text-sm flex justify-between">
              <p>
                Skyper Pool Apartment <br />{" "}
                <span className="text-gray-700 text-sm">By Max Estates</span>
              </p>
              <p className="font-semibold text-[#EB664E] text-xl">₹2.8Cr*</p>
            </div>
            <div className="flex items-center mt-3">
              <LocationOnIcon sx={{ color: "darkblue" }} />
              <p className="text-sm">1020 Bloomingdale Ave</p>
            </div>
            <div className="flex gap-3 justify-between mt-5 font-roboto">
              <div className="flex gap-1 items-center">
                <HomeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">4BHK</p>
              </div>
              <div className="flex gap-1 items-center">
                <SquareFootIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">1800 sq.ft</p>
              </div>
              <div className="flex gap-1 items-center">
                <CurrencyRupeeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">10.6k / sq.ft.</p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <div className="flex-1">
                <Link to="/project/abc">
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#03002e",
                      color: "#fff",
                      textTransform: "none",
                    }}
                  >
                    View Details
                  </Button>
                </Link>
              </div>
              <div className='flex-1'>
                <Button
                  onClick={handleOpen}
                  fullWidth
                  variant="contained"
                  color="success"
                  startIcon={<CallIcon />}
                  sx={{ color: "#fff", textTransform: "none" }}
                >
                  Enquiry
                </Button>
              </div>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  borderRadius: "40px",
                }}
              >
                <Box sx={style}>
                  <h1 className="font-roboto text-center text-4xl py-2">
                    Contact Us
                  </h1>
                  <p className="font-roboto text-center text-lg">
                    We will get back to you asap!
                  </p>
                  {/* {error && <Typography color="error">{error}</Typography>} */}
                  <form className="mx-8 mt-6">
                    <div className="grid sm:grid-cols-12 gap-3">
                      <div className="col-span-6">
                        <div className="flex border rounded-lg items-center bg-white">
                          <div className="flex justify-center ps-3">
                            <PersonIcon size="large" sx={{ color: "gray" }} />
                          </div>
                          <input
                            type="text"
                            className="outline-none p-3 rounded-lg w-full"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="flex border rounded-lg items-center bg-white">
                          <input
                            type="text"
                            className="outline-none p-3 rounded-lg w-full"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-span-12">
                        <div className="flex border rounded-lg items-center bg-white">
                          <div className="flex justify-center ps-3">
                            <MarkunreadIcon sx={{ color: "gray" }} />
                          </div>

                          <input
                            type="text"
                            className="outline-none p-3 rounded-lg w-full"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-span-12">
                        <div className="flex border rounded-lg items-center bg-white">
                          <div className="flex justify-center ps-3">
                            <LocalPhoneIcon sx={{ color: "gray" }} />
                          </div>
                          <input
                            type="text"
                            className="outline-none p-3 rounded-lg w-full"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <FormLabel
                          size="small"
                          id="demo-row-radio-buttons-group-label"
                          sx={{ fontWeight: "bold" }}
                        >
                          Your reason to buy is?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          size="small"
                        >
                          <FormControlLabel
                            size="small"
                            value="investment"
                            control={<Radio size="small" />}
                            label="Investment"
                          />
                          <FormControlLabel
                            value="business"
                            size="small"
                            control={<Radio size="small" />}
                            label="Business use"
                          />
                        </RadioGroup>
                      </div>
                      <div className="col-span-6">
                        <FormLabel
                          id="demo-row-radio-buttons-group-label"
                          sx={{ fontWeight: "bold" }}
                        >
                          Are you a property dealer?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          size="small"
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio size="small" />}
                            label="Yes"
                            size="small"
                          />
                          <FormControlLabel
                            size="small"
                            value="no"
                            control={<Radio size="small" />}
                            label="No"
                          />
                        </RadioGroup>
                      </div>
                      <div className="col-span-12">
                        <FormControlLabel
                          control={<Checkbox size="small" defaultChecked />}
                          label={
                            <Typography
                              variant="body2"
                              sx={{ fontSize: "0.78rem" }}
                            >
                              I agree to be contacted by Grow infinity agents
                              via whatsapp, SMS, Call, Email etc.
                            </Typography>
                          }
                        />
                      </div>
                      <input
                        type="hidden"
                        name="propertyName"
                        // value={formData.propertyName}
                      />
                      <div className="col-span-12">
                        <Button
                          variant="contained"
                          sx={{
                            background: "#03002E",
                            textTransform: "none",
                            padding: "10px",
                            marginTop: "5px",
                            marginBottom: "15px",
                          }}
                          size="large"
                          fullWidth
                          type="submit"
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </form>
                </Box>
              </Modal>
            </div>

            <div className="absolute top-[20px]">
              <Button
                endIcon={<DoneIcon />}
                size="small"
                variant="contained"
                color="success"
                sx={{ borderRadius: "0px", height: "25px" }}
              >
                RERA
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-3 m-3">
          <div className="border relative p-2 rounded-lg hover:shadow-2xl bg-white">
            <div className="flex justify-center">
              <img
                src={propertycard}
                alt=""
                className="h-[200px] w-[100%] rounded-lg"
              />
            </div>
            <div className="mt-3 font-roboto text-sm flex justify-between">
              <p>
                Skyper Pool Apartment <br />{" "}
                <span className="text-gray-700 text-sm">By Max Estates</span>
              </p>
              <p className="font-semibold text-[#EB664E] text-xl">₹2.8Cr*</p>
            </div>
            <div className="flex items-center mt-3">
              <LocationOnIcon sx={{ color: "darkblue" }} />
              <p className="text-sm">1020 Bloomingdale Ave</p>
            </div>
            <div className="flex gap-3 justify-between mt-5 font-roboto">
              <div className="flex gap-1 items-center">
                <HomeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">4BHK</p>
              </div>
              <div className="flex gap-1 items-center">
                <SquareFootIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">1800 sq.ft</p>
              </div>
              <div className="flex gap-1 items-center">
                <CurrencyRupeeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">10.6k / sq.ft.</p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#03002e",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                View Details
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="success"
                startIcon={<CallIcon />}
                sx={{ color: "#fff", textTransform: "none" }}
              >
                Enquiry
              </Button>
            </div>

            <div className="absolute top-[20px]">
              <Button
                endIcon={<DoneIcon />}
                size="small"
                variant="contained"
                color="success"
                sx={{ borderRadius: "0px", height: "25px" }}
              >
                RERA
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-3 m-3">
          <div className="border relative p-2 rounded-lg hover:shadow-2xl bg-white">
            <div className="flex justify-center">
              <img
                src={propertycard}
                alt=""
                className="h-[200px] w-[100%] rounded-lg"
              />
            </div>
            <div className="mt-3 font-roboto text-sm flex justify-between">
              <p>
                Skyper Pool Apartment <br />{" "}
                <span className="text-gray-700 text-sm">By Max Estates</span>
              </p>
              <p className="font-semibold text-[#EB664E] text-xl">₹2.8Cr*</p>
            </div>
            <div className="flex items-center mt-3">
              <LocationOnIcon sx={{ color: "darkblue" }} />
              <p className="text-sm">1020 Bloomingdale Ave</p>
            </div>
            <div className="flex gap-3 justify-between mt-5 font-roboto">
              <div className="flex gap-1 items-center">
                <HomeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">4BHK</p>
              </div>
              <div className="flex gap-1 items-center">
                <SquareFootIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">1800 sq.ft</p>
              </div>
              <div className="flex gap-1 items-center">
                <CurrencyRupeeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">10.6k / sq.ft.</p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#03002e",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                View Details
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="success"
                startIcon={<CallIcon />}
                sx={{ color: "#fff", textTransform: "none" }}
              >
                Enquiry
              </Button>
            </div>

            <div className="absolute top-[20px]">
              <Button
                endIcon={<DoneIcon />}
                size="small"
                variant="contained"
                color="success"
                sx={{ borderRadius: "0px", height: "25px" }}
              >
                RERA
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-3 m-3">
          <div className="border relative p-2 rounded-lg hover:shadow-2xl bg-white">
            <div className="flex justify-center">
              <img
                src={propertycard}
                alt=""
                className="h-[200px] w-[100%] rounded-lg"
              />
            </div>
            <div className="mt-3 font-roboto text-sm flex justify-between">
              <p>
                Skyper Pool Apartment <br />{" "}
                <span className="text-gray-700 text-sm">By Max Estates</span>
              </p>
              <p className="font-semibold text-[#EB664E] text-xl">₹2.8Cr*</p>
            </div>
            <div className="flex items-center mt-3">
              <LocationOnIcon sx={{ color: "darkblue" }} />
              <p className="text-sm">1020 Bloomingdale Ave</p>
            </div>
            <div className="flex gap-3 justify-between mt-5 font-roboto">
              <div className="flex gap-1 items-center">
                <HomeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">4BHK</p>
              </div>
              <div className="flex gap-1 items-center">
                <SquareFootIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">1800 sq.ft</p>
              </div>
              <div className="flex gap-1 items-center">
                <CurrencyRupeeIcon sx={{ color: "darkblue" }} />
                <p className="text-[12px]">10.6k / sq.ft.</p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#03002e",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                View Details
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="success"
                startIcon={<CallIcon />}
                sx={{ color: "#fff", textTransform: "none" }}
              >
                Enquiry
              </Button>
            </div>

            <div className="absolute top-[20px]">
              <Button
                endIcon={<DoneIcon />}
                size="small"
                variant="contained"
                color="success"
                sx={{ borderRadius: "0px", height: "25px" }}
              >
                RERA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
