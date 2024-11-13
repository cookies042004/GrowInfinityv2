import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { Layout } from "../../components/Layout";

import contactImg from "../../assets/img/aboutImg2.png";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Button } from "@mui/material";

export const Contact = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/contact`;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // dynamically update the state
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Post formData to the backend API
      const response = await axios.post(apiUrl, formData);

      // Optionally, clear the form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });

      if (response.data.success) {
        toast(response.data.success.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Layout>
        {/* Contact Hero  */}
        <div className="contactbanner flex items-center justify-center">
          <div className="grid sm:grid-cols-12">
            <div className="col-span-12 text-center lg:mt-20 flex justify-center items-center">
              <h1 className="font-dmsans  text-3xl lg:text-4xl font-medium text-white">
                Contact Us
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-gray-200">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid sm:grid-cols-12 py-10">
              <div className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-5 px-3 lg:px-4 py-4 lg:py-6 rounded-[24px] shadow-lg">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <div className="flex items-center justify-center p-5 bg-[#5046e5] rounded-[50%] h-[70px] w-[70px]">
                    <EmailIcon sx={{ fontSize: "40px", color: "white" }} />
                  </div>

                  <p className="font-dmsans font-semibold text-lg">
                    Chat to us
                  </p>

                  <p className="font-roboto text-lg text-[#5046e5]">
                    Our friendly team is here to help.
                  </p>
                  <p className="font-roboto text-md text-center">
                    growinfinityrealtor1@gmail.com, info@growinfinityrealtors.in
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-5 px-3 lg:px-4 py-4 lg:py-6 rounded-[24px] shadow-lg">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <div className="flex items-center justify-center p-5 bg-[#5046e5] rounded-[50%] h-[70px] w-[70px]">
                    <LocationOnIcon sx={{ fontSize: "40px", color: "white" }} />
                  </div>

                  <p className="font-dmsans font-semibold text-lg">Office</p>
                  <p className="font-roboto text-lg text-[#5046e5]">
                    Come say hello at our office HQ.
                  </p>
                  <p className="font-roboto text-md text-center">
                    Plot No. BL-34, II Floor, Near Fitness Gym, Sector-116,
                    Noida, Uttar Pradesh-201305
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 flex justify-center bg-white m-5 px-3 lg:px-4 py-4 lg:py-6 rounded-[24px] shadow-lg">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <div className="flex items-center justify-center p-5 bg-[#5046e5] rounded-[50%] h-[70px] w-[70px]">
                    <LocalPhoneIcon sx={{ fontSize: "40px", color: "white" }} />
                  </div>

                  <p className="font-dmsans font-semibold text-lg">Phone</p>

                  <p className="font-roboto text-lg text-[#5046e5]">
                    Mon-Sun from 8am to 6pm
                  </p>
                  <p className="font-roboto text-md">+91-9990052554</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-12 my-10">
            <div className="col-span-12 lg:col-span-6 p-3 m-5">
              <h1 className="text-3xl lg:text-4xl font-medium font-roboto text-center">
                Let's Get In Touch
              </h1>
              <p className="text-center text-lg font-roboto py-3">
                Or just reach manually to{" "}
                <span className="text-[#918bed]">
                  info@growinfinityrealtors.in
                </span>
              </p>

              <form className="mt-5">
                <div className="grid sm:grid-cols-12 font-roboto gap-5">
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="ps-2">
                        Full Name
                      </label>
                      <div className="flex items-center border rounded-[24px] ">
                        <PersonOutlineOutlinedIcon
                          sx={{ marginLeft: "15px" }}
                        />
                        <input
                          type="text"
                          placeholder="Enter your full name..."
                          className="p-3 outline-none w-[90%]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="ps-2">
                        Email Address
                      </label>
                      <div className="flex items-center border rounded-[24px] ">
                        <MailOutlinedIcon sx={{ marginLeft: "15px" }} />
                        <input
                          type="text"
                          placeholder="Enter your email address..."
                          className="p-3 outline-none w-[90%]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="ps-2">
                        Phone Number
                      </label>
                      <div className="flex items-center border rounded-[24px] ">
                        <LocalPhoneOutlinedIcon sx={{ marginLeft: "15px" }} />
                        <input
                          type="text"
                          placeholder="Enter your phone number..."
                          className="p-3 outline-none w-[90%]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="ps-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Enter your message here..."
                        className="p-3 outline-none  border rounded-[24px]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-span-12 flex justify-center">
                    <Button
                      endIcon={<EastOutlinedIcon />}
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: "24px",
                        textTransform: "none",
                        backgroundColor: "#5046e5",
                      }}
                    >
                      Submit Form
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-center justify-center p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.248411720519!2d77.3950231!3d28.5678978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f7b6f8aa4bbbca1%3A0xcd4a6a4f021202d4!2sGrow%20Infinity%20Realtors!5e0!3m2!1sen!2sin!4v1730825249194!5m2!1sen!2sin"
                height="500"
                style={{ border: "0", width: "100%" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
