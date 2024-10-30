import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

import "./Home.css";
import { PropertyCard } from "../../components/PropertyCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ArrowCircleUp from "../../assets/img/arrowcircleup.png";

import { Choose } from "../../components/Choose";
import { Testimonials } from "../../components/Testimonials";

import { Typewriter } from "react-simple-typewriter";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";

import PureCounter from "@srexi/purecounterjs";
import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

export const Home = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  const [property, setProperty] = useState(false);
  const [bhk, setBhk] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Sale");
  const [bhkValue, setBhkValue] = useState("4 BHK");

  const options = ["Sale", "Purchase"];
  const bhkOptions = ["2 BHK", "3 BHK", "4 BHK"]; // Add BHK options here

  const handleBhkClick = (value) => {
    setBhkValue(value);
    setBhk(false);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setProperty(false);
  };

  const apiUrl = "http://localhost:4000/api/v1/property";
  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const properties = data.properties;
  return (
    <Layout>
      {/* Hero  */}
      <div className="homeBanner h-screen flex flex-col items-center lg:items-start justify-center lg:ps-24">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl  font-medium mt-10 lg:mt-24">
            Find your next{" "}
            <Typewriter
              words={["best cozy place", "dream home", "office"]}
              loop={0}
              cursor
            />
          </h1>
        </div>
        <div className="my-10">
          <p className="font-dmsans text-center font-normal text-lg lg:text-xl lg:text-left">
            Find the best places around you at the cheepest and affordable
            prices.
          </p>
        </div>

        <div className="grid sm:grid-cols-12 ">
          <div
            className="col-span-12 lg:col-span-10 bg-white h-[300] w-[100%] rounded-[13.27px]"
            style={{ boxShadow: "0px 16.39px 33.56px 0px #0000001A" }}
          >
            <div className="grid sm:grid-cols-12 p-5 items-center gap-5">
              <div className="col-span-12 lg:col-span-2 md:col-span-3">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-black bg-[#F4F4F4] font-medium text-sm px-5 w-full py-2.5 text-center justify-between lg:justify-start inline-flex items-center rounded-[17.56px]"
                  type="button"
                  onClick={() => setProperty(!property)}
                >
                  <HomeOutlinedIcon
                    sx={{ color: "#03002E", marginRight: "8px" }}
                  />{" "}
                  {selectedValue}{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3 flex-end"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdown"
                  className={
                    property
                      ? "absolute mt-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      : "hidden"
                  }
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {options.map((option) => (
                      <li key={option}>
                        <a
                          onClick={() => handleOptionClick(option)}
                          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                            selectedValue === option
                              ? "bg-gray-200 dark:bg-gray-500"
                              : ""
                          }`}
                        >
                          {option}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 md:col-span-6">
                <div className="lg:mx-4 mx-0">
                  <input
                    type="text"
                    placeholder="Your desired location goes here"
                    className="bg-[#F4F4F4] rounded-[17.56px] p-3 w-full outline-none"
                  />
                </div>
              </div>
              {/* BHK Dropdown */}
              <div className="col-span-12 lg:col-span-2 md:col-span-3">
                <button
                  id="dropdownBhkButton"
                  data-dropdown-toggle="dropdownBhk"
                  className="text-black w-full bg-[#F4F4F4] font-medium text-sm px-5 py-2.5 text-center inline-flex justify-between lg:justify-start items-center rounded-[17.56px]"
                  type="button"
                  onClick={() => setBhk(!bhk)}
                >
                  <HomeIcon sx={{ color: "#03002E", paddingRight: "5px" }} />{" "}
                  {bhkValue}{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* BHK Dropdown Menu */}
                <div
                  id="dropdownBhk"
                  className={
                    bhk
                      ? "absolute mt-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      : "hidden"
                  }
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownBhkButton"
                  >
                    {bhkOptions.map((option) => (
                      <li key={option}>
                        <a
                          onClick={() => handleBhkClick(option)}
                          className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                            bhkValue === option
                              ? "bg-gray-200 dark:bg-gray-500"
                              : ""
                          }`}
                        >
                          {option}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-2 md:col-span-12">
                <div>
                  <button
                    className="text-white bg-[#03002E]  w-full rounded-[8.59px] py-2 px-10"
                    style={{ boxShadow: "0px 5.46px 13.27px 0px #03002E80" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects  */}
      <div className="bg-white">
        <h1 className="text-center text-black lg:text-6xl text-3xl font-bold py-8 lg:font-medium">
          Featured Projects
        </h1>
        <div className="flex justify-around mx-5 my-4 overflow-hidden">
          {properties &&
            properties
              .filter(
                (property) => property.category.name == "Featured Projects"
              )
              .slice(0, 3)
              .map((property) => {
                return (
                  <PropertyCard
                    key={property._id}
                    id={property._id}
                    name={property.name}
                    address={property.address}
                    image={property.propertyImages[0]}
                  />
                );
              })}
        </div>

        <div className="flex justify-center my-3">
          <Link to={"/property/featured-projects"}>
            <button
              className=" bg-[#03002E] text-white rounded-3xl font-normal font-dmsans px-20 py-2 text-lg lg:text-xl"
              style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Luxury Project */}
      <div className="bg-white">
        <h1 className="text-center text-black lg:text-6xl text-3xl font-bold py-8 lg:font-medium">
          Our Luxury Projects
        </h1>
        <div className="flex justify-around mx-5 my-4 overflow-hidden">
          {properties &&
            properties
              .filter((property) => property.category.name == "Luxury Project")
              .slice(0, 3)
              .map((property) => {
                return (
                  <PropertyCard
                    key={property._id}
                    id={property._id}
                    name={property.name}
                    address={property.address}
                    image={property.propertyImages[0]}
                  />
                );
              })}
        </div>
        <div className="flex justify-center my-3">
          <Link to={"/property/luxury-project"}>
            <button
              className=" bg-[#03002E] text-white rounded-3xl font-normal font-dmsans px-20 py-2 text-lg lg:text-xl"
              style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* More than 10 years of experience  */}
      <div className="grid sm:grid-cols-12 my-10">
        <div className="grid sm:grid-cols-12 col-span-12 lg:col-span-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-6 border border-[#03002E] rounded-[17.07px] m-5 hover:bg-[#03002E] hover:text-white transition-all ease-in-out experience-card">
            <div className="flex flex-col items-center justify-center">
              <ApartmentIcon
                sx={{
                  fontSize: 100,
                  color: "#03002e",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  transition: "color 0.3s ease-in-out",
                }}
                className="experience-icon"
              />
              <div className="flex flex-col gap-1 my-4">
                <p className="font-poppins text-3xl font-bold text-[40px] text-center">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="500"
                    data-purecounter-duration="3"
                  >
                    500
                  </span>
                </p>
                <p className="font-poppins font-medium text-[20.48px]">
                  Units Sold
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 border border-[#03002E] rounded-[17.07px] m-5 hover:bg-[#03002E] hover:text-white transition-all ease-in-out experience-card">
            <div className="flex flex-col items-center justify-center">
              <EmojiEmotionsIcon
                sx={{
                  fontSize: 100,
                  color: "#03002e",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  transition: "color 0.3s ease-in-out",
                }}
                className="experience-icon"
              />
              <div className="flex flex-col gap-1 my-4">
                <p className="font-poppins text-3xl font-bold text-[40px] text-center">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="2000"
                    data-purecounter-duration="3"
                  >
                    2000
                  </span>
                </p>
                <p className="font-poppins font-medium text-[20.48px]">
                  Happy Users
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 border border-[#03002E] rounded-[17.07px] m-5 hover:bg-[#03002E] hover:text-white transition-all ease-in-out experience-card">
            <div className="flex flex-col items-center justify-center">
              <AspectRatioIcon
                sx={{
                  fontSize: 100,
                  color: "#03002e",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  transition: "color 0.3s ease-in-out",
                }}
                className="experience-icon"
              />
              <div className="flex flex-col gap-1 my-4">
                <p className="font-poppins text-3xl font-bold text-[40px] text-center">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="10"
                    data-purecounter-duration="3"
                    data-purecounter-suffix="+"
                  >
                    10+
                  </span>
                </p>
                <p className="font-poppins font-medium text-[20.48px]">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 border border-[#03002E] rounded-[17.07px] m-5 hover:bg-[#03002E] hover:text-white transition-all ease-in-out experience-card">
            <div className="flex flex-col items-center justify-center">
              <AccessibilityNewIcon
                sx={{
                  fontSize: 100,
                  color: "#03002e",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  transition: "color 0.3s ease-in-out",
                }}
                className="experience-icon"
              />
              <div className="flex flex-col gap-1 my-4">
                <p className="font-poppins text-3xl font-bold text-[40px] text-center">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="30"
                    data-purecounter-duration="3"
                  >
                    30
                  </span>
                </p>
                <p className="font-poppins font-medium text-[20.48px]">
                  Employees
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col m-8 lg:gap-16 gap-9">
          <h1 className="text-3xl lg:text-6xl font-poppins font-bold">
            More than{" "}
            <span className="text-[#03002e]">10 Years of Experience</span>
          </h1>
          <p className="text-lg lg:text-3xl text-justify font-poppins font-medium text-[#161A23] lg:me-10 me-0 px-3 lg:px-0">
            Over the years, Grow infinity has built a reputation for providing a
            seamless experience to customers to secure their dream homes.
          </p>
        </div>
      </div>

      {/* Top Properties  */}
      <div className="bg-white">
        <h1 className="text-center text-black  text-3xl md:text-4xl font-bold lg:text-6xl  py-3 lg:font-medium">
          Top Properties
        </h1>
        <div className="flex justify-around mx-5 my-4 overflow-hidden">
          {properties &&
            properties
              .filter((property) => property.category.name == "Top Properties")
              .slice(0, 3)
              .map((property) => {
                return (
                  <PropertyCard
                    key={property._id}
                    id={property._id}
                    name={property.name}
                    address={property.address}
                    image={property.propertyImages[0]}
                  />
                );
              })}
        </div>
        <div className="flex justify-center my-3">
          <Link to={"/property/top-properties"}>
            <button
              className=" bg-[#03002E] text-white rounded-3xl font-normal font-dmsans px-20 py-2 text-lg lg:text-xl"
              style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      <Testimonials />
      <Choose />

      <div className="hidden lg:block bg-[#03002e] rounded-[14px] m-5 p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-white p-8 text-2xl font-inter font-bold text-[36px]">
            Looking To Buy Or Sell Your Property?
          </h2>
          <div>
            <Link
              to="/contact"
              className="flex items-center gap-4 bg-white p-3 m-5 rounded-[32px] text-[#03002E] text-lg"
            >
              Get in touch{" "}
              <span>
                <img src={ArrowCircleUp} alt="" width={40} />
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
