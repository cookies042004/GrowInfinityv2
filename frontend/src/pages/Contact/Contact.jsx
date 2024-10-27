import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import { Layout } from "../../components/Layout";

import contactImg from "../../assets/img/aboutImg2.png";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export const Contact = () => {
  const apiUrl = "http://localhost:4000/api/v1/contact";
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
        <div className="contactbanner flex items-center lg:ps-24">
          <div className="grid sm:grid-cols-12">
            <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
              <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px]">
                Contact Us
              </h1>
              <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form  */}
        <h1 className="font-inter text-center text-2xl font-bold lg:font-medium lg:text-[45px] py-10">
          LET’S ANSWER YOUR QUERIES
        </h1>
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 lg:col-span-6 mx-8 lg:mx-16">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 lg:gap-5 my-5">
                <label
                  htmlFor="name"
                  className="text-[#03002E] font-medium text-lg lg:text-[20px] "
                >
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-[#03002E] outline-none p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 my-5">
                <label
                  htmlFor="emaail"
                  className="text-[#03002E] font-medium text-lg lg:text-[20px] "
                >
                  E-MAIL
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#03002E] outline-none p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 my-5">
                <label
                  htmlFor="mobile"
                  className="text-[#03002E] font-medium text-lg lg:text-[20px]"
                  required
                >
                  PHONE NUMBER
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  minLength={10}
                  className="border border-[#03002E] outline-none p-2"
                />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 my-5">
                <label
                  htmlFor="budget"
                  className="text-[#03002E] font-medium text-lg lg:text-[20px]"
                  required
                >
                  BUDGET
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="border border-[#03002E] outline-none p-2"
                />
              </div>

              <div className="flex flex-col gap-3 lg:gap-5 my-5">
                <label
                  htmlFor="mobile"
                  className="text-[#03002E] font-medium text-lg lg:text-[20px]"
                  required
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border border-[#03002E] outline-none p-2"
                ></textarea>
              </div>

              <div className="flex flex-col gap-5 my-5">
                <button
                  type="submit"
                  className="bg-[#03002E] text-white p-3 rounded-[16.72px]"
                  style={{ boxShadow: "0px 3.34px 3.34px 0px #00000040" }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-12 lg:col-span-6 mx-8 lg:mx-16 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14016.248411720519!2d77.3950231!3d28.5678978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f7b6f8aa4bbbca1%3A0xcd4a6a4f021202d4!2sGrow%20Infinity%20Realtors!5e0!3m2!1sen!2sin!4v1728113311126!5m2!1sen!2sin"
              height="600"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* Contact Image  */}
        <div className="grid grid-cols-1 my-5 mx-6 lg:mx-10">
          <div>
            <img
              src={contactImg}
              alt=""
              className="w-full border-4 border-[#03002E] rounded-[26px] h-[454px] object-cover"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};
