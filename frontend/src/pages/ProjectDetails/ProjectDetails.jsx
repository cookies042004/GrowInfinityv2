import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import gallery1 from "../../assets/img/gallery1.png";
import gallery2 from "../../assets/img/gallery2.png";
import gallery3 from "../../assets/img/gallery3.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ProjectDetails.css";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Marquee } from "../../components/Marquee";
import ReactPlayer from "react-player";
import Battery5BarIcon from "@mui/icons-material/Battery5Bar";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PoolIcon from "@mui/icons-material/Pool";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import { Calculator } from "../../components/Calculator";
import comingsoon from "../../assets/img/comingsoon.jpg";
export const ProjectDetails = () => {
  const images = [gallery1, gallery2, gallery3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 500); // Fade duration in ms
  };

  const handlePrevious = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 500);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const fullDescription = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Facilis velit voluptatem rerum molestiae. Debitis ab, aliquid quasi fugit animi repellendus deleniti maiores ullam accusamus
    hic, exercitationem veniam soluta possimus sit minima excepturi maxime laboriosam sequi facilis? Maiores, obcaecati
    perspiciatis. Quidem explicabo, molestias corrupti hic ex similique sequi illo cupiditate voluptatem officiis non
    temporibus laborum iure deserunt nisi officia? Provident, excepturi corrupti doloremque nobis, perspiciatis quaerat
    aliquid porro quidem aperiam minus dolorem ipsum eum. Eum, necessitatibus! Ducimus mollitia sed perspiciatis incidunt
    sequi odio, repudiandae assumenda. Dolores ipsum magni aut iusto tempore aliquid laborum ut excepturi, labore perferendis
    rem. Ea expedita architecto nisi quae dolorum possimus laboriosam autem. Optio possimus eos molestias impedit
    aspernatur nesciunt earum, odio inventore sapiente praesentium quidem illo libero dolore perspiciatis quae ullam eum
    doloremque sit id recusandae, non ipsum itaque excepturi eaque.`;

  const truncatedDescription = fullDescription.slice(0, 200) + "...";

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Project Details Hero */}
      <div className="detailsbanner flex items-center justify-center">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:mt-20">
            <h1 className="ffont-dmsans font-medium text-white text-3xl lg:text-4xl">
              Property Details
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 lg:p-3" style={{ scrollBehavior: "smooth" }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:grid sm:grid-cols-12 gap-10 max-w-[1280px] mt-3 lg:mt-8 mx-auto">
            <div className="col-span-12 lg:col-span-9 bg-white px-5 lg:px-12 py-4 lg:py-8 w-auto">
              <div className="grid sm:grid-cols-12 gap-3">
                <div className="col-span-12 lg:col-span-8">
                  <div
                    id="controls-carousel"
                    className="relative w-[100%] h-[280px] md:h-[300px] lg:h-[400px]"
                  >
                    {/* Carousel Wrapper */}
                    <div className="relative h-full overflow-hidden">
                      {/* Dynamic Carousel Item with swipe effect */}
                      <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                          transform: `translateX(-${currentIndex * 100}%)`, // Move the images horizontally
                        }}
                      >
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="w-[100%] lg:w-full lg:h-full flex-shrink-0"
                          >
                            <img
                              src={image}
                              className="block w-[100%] h-[280px] lg:h-[400px] object-fill object-center"
                              alt={`Carousel slide ${index}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Slider Controls */}
                    <button
                      type="button"
                      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      onClick={handlePrevious}
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                        <span className="sr-only">Previous</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      onClick={handleNext}
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <span className="sr-only">Next</span>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="hidden lg:block col-span-12 lg:col-span-4">
                  <div className="flex flex-col gap-3">
                    <img
                      src={gallery2}
                      className="w-full h-[195px]"
                      alt="Carousel slide"
                    />
                    <img
                      src={gallery3}
                      className="w-full h-[195px]"
                      alt="Carousel slide"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 justify-between lg:items-center m-3">
                <div className="font-roboto mt-6 flex justify-between">
                  <div>
                    <h1 className="font-medium text-2xl lg:text-4xl">
                      CanterBury Lane
                    </h1>
                    <p className="text-md mt-3">Noida, UP-201301</p>
                  </div>
                  <div className="block lg:hidden">
                    <h5 className="font-roboto font-semibold text-[#EB664E] text-2xl lg:text-4xl">
                      ₹2.8Cr*
                    </h5>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Button
                    startIcon={<DownloadIcon />}
                    variant="outlined"
                    size="small"
                    color="error"
                    sx={{ textTransform: "none" }}
                  >
                    Download PDF
                  </Button>
                  <a
                    href={`https://wa.me/+918750238581?text=Hi I am interested in Max Estate 128, Please share the details.`}
                    target="_blank"
                  >
                    <Button
                      startIcon={<WhatsAppIcon />}
                      variant="outlined"
                      size="small"
                      color="success"
                      sx={{ textTransform: "none" }}
                    >
                      WhatsApp Message
                    </Button>
                  </a>
                </div>
                <div className="hidden justify-end  lg:flex">
                  <h5 className="font-roboto font-semibold text-[#EB664E] text-2xl lg:text-4xl">
                    ₹2.8Cr*
                  </h5>
                </div>
              </div>

              <div className="hidden gap-10 lg:grid sm:grid-cols-12 justify-center lg:justify-start py-5 ps-2">
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <HomeOutlinedIcon sx={{ color: "#5BC0EB" }} />
                    <p className="font-roboto text-sm lg:text-lg">3 BHK</p>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <ChairOutlinedIcon sx={{ color: "#5BC0EB" }} />
                    <p className="font-roboto text-sm lg:text-lg">
                      Semi-furnsihed
                    </p>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <SpaceDashboardOutlinedIcon sx={{ color: "#5BC0EB" }} />
                    <p className="font-roboto text-sm lg:text-lg">1850 sqft</p>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <CurrencyRupeeOutlinedIcon sx={{ color: "#5BC0EB" }} />
                    <p className="font-roboto text-sm lg:text-lg">
                      10.6K per sqft
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex items-center  justify-between lg:grid sm:grid-cols-12 mx-3 mt-8"
                style={{ borderBottom: "3px solid lightgray" }}
              >
                <div className="col-span-3">
                  <h3 className="py-2">
                    <a href="#description" onClick={handleAnchorClick}>
                      <p className="text-xs lg:text-lg font-semibold">
                        Description
                      </p>
                    </a>
                  </h3>
                </div>
                <div className="col-span-3">
                  <h3 className="py-2">
                    <a href="#amenities" onClick={handleAnchorClick}>
                      <p className="text-xs lg:text-lg font-semibold">
                        Amenities
                      </p>
                    </a>
                  </h3>
                </div>
                <div className="col-span-3">
                  <h3 className="py-2">
                    <a href="#location" onClick={handleAnchorClick}>
                      <p className="text-xs lg:text-lg font-semibold">
                        Location
                      </p>
                    </a>
                  </h3>
                </div>
                <div className="col-span-3">
                  <h3 className="py-2">
                    <a href="#youtube" onClick={handleAnchorClick}>
                      <p className="text-xs lg:text-lg font-semibold">
                        Virtual Tour
                      </p>
                    </a>
                  </h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-12 lg:mx-3 mt-8 gap-8">
                <div className="col-span-12" id="description">
                  <h3 className="text-xl font-poppins font-semibold">
                    Description
                  </h3>
                  <div className="mt-4 text-md lg:leading-9">
                    {/* Container for description text with transition */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out`}
                      style={{
                        maxHeight: isExpanded ? "9999px" : "200px", // Use a large value for expanded state
                      }}
                    >
                      <p>
                        {isExpanded ? fullDescription : truncatedDescription}
                      </p>
                    </div>

                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      sx={{
                        borderRadius: "24px",
                        textTransform: "none",
                        display: "inline-block",
                        marginTop: "10px",
                        backgroundColor: "#5BC0EB",
                      }}
                      onClick={toggleDescription}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </Button>
                  </div>
                </div>

                <div className="col-span-12" id="amenities">
                  <h3 className="text-xl font-poppins font-semibold pb-5">
                    Amenities
                  </h3>

                  <div className="border-2 border-gray p-3 rounded-lg">
                    <h3 className="text-lg lg:text-xl text-center font-roboto font-medium ">
                      Society Amenities
                    </h3>
                    <div className="flex flex-wrap lg:grid sm:grid-cols-12 mt-5 lg:gap-5">
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <PoolIcon size="large" sx={{ color: "#5BC0EB" }} />
                          <p>Swimming pool</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="border-2 border-gray p-3 rounded-lg">
                    <h3 className="text-lg  lg:text-xl text-center font-roboto font-medium ">
                      Flat Amenities
                    </h3>
                    <div className="flex flex-wrap lg:grid sm:grid-cols-12 mt-5 lg:gap-5">
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3  p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12" id="location">
                  <h3 className="text-xl font-poppins font-semibold pb-5">
                    Location
                  </h3>

                  <div className="border-2 border-gray p-3 rounded-lg">
                    <h3 className="text-lg lg:text-xl text-center font-roboto font-medium">
                      Location Advantages
                    </h3>
                    <div className="flex flex-wrap lg:grid sm:grid-cols-12 mt-5 lg:gap-5">
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-6 lg:col-span-3">
                        <div className="flex items-center gap-3 p-3 lg:p-5">
                          <Battery5BarIcon
                            size="large"
                            sx={{ color: "#5BC0EB" }}
                          />
                          <p>Power Backup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12" id="youtube">
                  <h3 className="text-xl font-poppins font-semibold ">
                    Virtual Tour
                  </h3>
                  <div className="flex items-center justify-center my-3">
                    <img
                      src={comingsoon}
                      alt=""
                      className="h-[200px] lg:h-[450px] w-[100%]"
                    />
                  </div>
                </div>

                <div className="col-span-12">
                  <h3 className="text-xl font-poppins font-semibold">
                    Address
                  </h3>
                  <p className="py-3 text-md">
                    Tata Eureka Park, Sector-150, Noida, Uttar Pradesh - 201310
                  </p>
                </div>

                <div className="col-span-12">
                  <Calculator />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 bg-gray-100 w-auto px-5">
              <div className="flex flex-col gap-5 sticky top-0">
                <div className="bg-white px-5 py-8">
                  <form>
                    <h1 className="text-center text-lg font-medium font-roboto">
                      Get Price on Request*
                    </h1>
                    <div className="grid sm:col-span-12 mt-4 gap-4">
                      <div className="col-span-12">
                        <label htmlFor="name" className="text-sm">
                          Name
                        </label>
                        <input
                          type="text"
                          className="border w-full py-1 px-2 rounded-lg outline-none"
                        />
                      </div>
                      <div className="col-span-12">
                        <label htmlFor="" className="text-sm">
                          Email
                        </label>
                        <input
                          type="text"
                          className="border w-full py-1 px-2 rounded-lg outline-none"
                        />
                      </div>
                      <div className="col-span-12">
                        <label htmlFor="" className="text-sm">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="border w-full py-1 px-2 rounded-lg outline-none"
                        />
                      </div>
                      <div className="col-span-12">
                        <Button
                          fullWidth
                          sx={{
                            textTransform: "none",
                            backgroundColor: "#03002e",
                            marginTop: "10px",
                          }}
                          variant="contained"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Recent Property */}
                <div className="bg-white p-5">
                  <h1 className="text-xl text-center font-medium">
                    Recent Property
                  </h1>
                  <div className="grid sm:grid-cols-12 gap-6 mt-5">
                    <div className="col-span-12">
                      <div className="flex gap-3">
                        <img
                          src={gallery1}
                          alt=""
                          className="h-[40px] w-[40px] rounded"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-sm font-medium">
                            CanterBury Lane
                          </h1>
                          <p className="text-xs">Posted on: 05/11/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="flex gap-3">
                        <img
                          src={gallery1}
                          alt=""
                          className="h-[40px] w-[40px] rounded"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-sm font-medium">
                            CanterBury Lane
                          </h1>
                          <p className="text-xs">Posted on: 05/11/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="flex gap-3">
                        <img
                          src={gallery1}
                          alt=""
                          className="h-[40px] w-[40px] rounded"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-sm font-medium">
                            CanterBury Lane
                          </h1>
                          <p className="text-xs">Posted on: 05/11/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="flex gap-3">
                        <img
                          src={gallery1}
                          alt=""
                          className="h-[40px] w-[40px] rounded"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-sm font-medium">
                            CanterBury Lane
                          </h1>
                          <p className="text-xs">Posted on: 05/11/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="flex gap-3">
                        <img
                          src={gallery1}
                          alt=""
                          className="h-[40px] w-[40px] rounded"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-sm font-medium">
                            CanterBury Lane
                          </h1>
                          <p className="text-xs">Posted on: 05/11/2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="flex gap-3">
                        <img
                          src={gallery1}
                          alt=""
                          className="h-[40px] w-[40px] rounded"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <h1 className="text-sm font-medium">
                            CanterBury Lane
                          </h1>
                          <p className="text-xs">Posted on: 05/11/2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects  */}
      <div className="bg-gray-100 p-3">
        <h1 className="text-center text-black lg:text-4xl text-3xl font-bold py-8 lg:font-medium">
          Featured Projects
        </h1>
        <Card />

        <div className="flex justify-center my-3">
          <Link to={"/property/featured-projects"}>
            <button
              className="bg-[#03002E] text-white rounded-3xl font-dmsans px-10 py-1 text-lg transition-colors duration-300 font-medium"
              style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      <Marquee />
    </Layout>
  );
};
