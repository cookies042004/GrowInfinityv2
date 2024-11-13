import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";

import "./Home.css";
import { PropertyCard } from "../../components/PropertyCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import { Choose } from "../../components/Choose";
import { Testimonials } from "../../components/Testimonials";

import { Typewriter } from "react-simple-typewriter";

import PureCounter from "@srexi/purecounterjs";
import { Link, useNavigate } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Icon1 from "../../assets/img/Icon.png";
import Icon2 from "../../assets/img/Icon (1).png";
import Icon3 from "../../assets/img/Icon (2).png";
import gallery2 from "../../assets/img/gallery2.png";
import gallery1 from "../../assets/img/gallery1.png";
import gallery3 from "../../assets/img/gallery3.png";
import home from "../../assets/img/home.png";
import house from "../../assets/img/house.png";
import EastIcon from "@mui/icons-material/East";
import { Card } from "../../components/Card";
import { NewsCard } from "../../components/NewsCard";

import { Button } from "@mui/material";
import { Marquee } from "../../components/Marquee";
import { LatestNews } from "../../components/LatestNews";
import { Calculator } from "../../components/Calculator";
import CalculateIcon from "@mui/icons-material/Calculate";
import { SearchBar } from "../../components/SearchBar";

export const Home = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  const [calculator, setCalculator] = useState(false);

  const apiUrl = `${process.env.BASE_URL}/api/v1/property`;
  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const properties = data.properties;

  return (
    <Layout>
      {/* Hero  */}
      <div className="homeBanner relative h-screen flex flex-col items-center lg:items-start justify-center lg:ps-24 overflow-hidden">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-medium lg:mt-24">
            Find your next{" "}
            <Typewriter
              words={["best cozy place", "dream home", "office"]}
              loop={0}
              cursor
            />
          </h1>
        </div>
        <div className="my-10">
          <p className="font-dmsans text-center font-normal text-lg lg:text-lg lg:text-left px-5 lg:px-0">
            Find the best places around you at the cheapest and affordable
            prices.
          </p>
        </div>

        <SearchBar />

        <div
          className={`absolute right-0 top-[24%] rounded-lg transition-transform duration-500 ease-in-out ${
            calculator ? "translate-x-[0]" : "translate-x-[94%]"
          }`}
        >
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              setCalculator(!calculator);
            }}
          >
            <div className="bg-white rounded-s-lg">
              <p
                className="font-medium uppercase py-4 px-2"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Calculate EMI
              </p>
              <CalculateIcon sx={{ fontSize: "50px", color: "#03002e" }} />
            </div>
            <Calculator />
          </div>
        </div>
      </div>

      {/* Featured Projects  */}
      <div className="bg-white">
        <h1 className="text-center text-black lg:text-4xl text-3xl font-bold py-8 lg:font-medium">
          Featured Projects
        </h1>
        {/* <div className="flex justify-around mx-5 my-4 overflow-hidden">
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
        </div> */}

        <Card />

        <div className="flex justify-center my-3">
          <Link to={"/property/featured-projects"}>
            <button
              className="bg-[#03002E] text-white rounded-3xl font-dmsans px-10 py-1  text-sm lg:text-lg transition-colors duration-300 font-medium"
              style={{ boxShadow: "0px 9.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Luxury Project */}
      <div className="bg-white">
        <h1 className="text-center text-black lg:text-4xl text-3xl font-bold py-8 lg:font-medium">
          Our Luxury Projects
        </h1>
        {/* <div className="flex justify-around mx-5 my-4 overflow-hidden">
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
        </div> */}
        <Card />
        <div className="flex justify-center my-3">
          <Link to={"/property/featured-projects"}>
            <button
              className="bg-[#03002E] text-white rounded-3xl font-dmsans px-10 py-1  text-sm lg:text-lg  transition-colors duration-300 font-medium"
              style={{ boxShadow: "0px 9.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* More than 10 years of experience  */}
      <div className="bg-[#03002e] text-white my-10 experience">
        <div className="max-w-[1280px] mx-auto py-10">
          <h1 className="text-2xl text-center lg:text-4xl font-poppins font-bold py-4">
            More than 10 Years of Experience
          </h1>
          <p className="text-lg py-5 text-center lg:text-lg font-poppins font-medium lg:me-10 me-0 px-3 lg:px-0">
            Over the years, Grow infinity has built a reputation for providing a
            seamless experience to customers to secure their dream homes.
          </p>
          <div className="flex flex-wrap justify-center lg:grid sm:grid-cols-12">
            <div className="col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <ApartmentIcon
                  sx={{
                    fontSize: 100,
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                    [(theme) => theme.breakpoints.down("sm")]: {
                      fontSize: 50, // Smaller font size for screens below 600px (small screens)
                    },
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="5000"
                      data-purecounter-duration="3"
                    >
                      5000
                    </span>
                  </p>
                  <p className="font-poppins font-medium text:sm lg:text-lg">
                    Units Sold
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3  rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <EmojiEmotionsIcon
                  sx={{
                    fontSize: 100,
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                    [(theme) => theme.breakpoints.down("sm")]: {
                      fontSize: 50, // Smaller font size for screens below 600px (small screens)
                    },
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="2000"
                      data-purecounter-duration="3"
                    >
                      2000
                    </span>
                  </p>
                  <p className="font-poppins font-medium text:sm lg:text-lg">
                    Happy Users
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <AspectRatioIcon
                  sx={{
                    fontSize: 100,
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                    [(theme) => theme.breakpoints.down("sm")]: {
                      fontSize: 50, // Smaller font size for screens below 600px (small screens)
                    },
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
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
                  <p className="font-poppins font-medium text:sm lg:text-lg">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3 rounded-[17.07px] m-8 hover:text-white transition-all ease-in-out experience-card">
              <div className="flex flex-col items-center justify-center">
                <AccessibilityNewIcon
                  sx={{
                    fontSize: 100,
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    transition: "color 0.3s ease-in-out",
                    [(theme) => theme.breakpoints.down("sm")]: {
                      fontSize: 50, // Smaller font size for screens below 600px (small screens)
                    },
                  }}
                  className="experience-icon"
                />
                <div className="flex flex-col gap-1 my-4">
                  <p className="font-poppins font-semibold text-xl lg:text-2xl text-center">
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="30"
                      data-purecounter-duration="3"
                    >
                      30
                    </span>
                  </p>
                  <p className="font-poppins font-medium text:sm lg:text-lg">
                    Employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Properties  */}
      <div className="bg-white">
        <h1 className="text-center text-black  text-3xl lg:text-4xl font-bold py-3 lg:font-medium">
          Top Properties
        </h1>
        {/* <div className="flex justify-around mx-5 my-4 overflow-hidden">
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
        </div> */}
        <Card />
        <div className="flex justify-center my-3">
          <Link to={"/property/top-properties"}>
            <button
              className="bg-[#03002E] hover:bg-white hover:text-[#03002E] border-2 border-[#03002E] text-white rounded-3xl font-dmsans px-10 py-1 text-sm lg:text-lg transition-colors duration-300 font-medium"
              style={{ boxShadow: "0px 9.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] my-10">
        <div className="grid sm:grid-cols-12">
          <div className="hidden lg:flex col-span-12 lg:col-span-7 justify-center">
            <div className="grid sm:grid-cols-12">
              <div className="col-span-12">
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-9 m-5">
                    <img
                      src={gallery2}
                      alt=""
                      className="rounded-lg h-[260px] w-[100%] "
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="grid sm:grid-cols-12">
                  <div className="col-span-5 mx-5">
                    <img
                      src={gallery3}
                      alt=""
                      className="rounded-lg h-[280px] w-full"
                    />
                  </div>
                  <div className="col-span-6">
                    <img
                      src={gallery1}
                      alt=""
                      className="rounded-lg h-[450px] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:ps-14">
            <h1 className="text-[#1A1A1A] font-roboto  text-2xl lg:text-4xl font-medium text-center lg:text-start">
              How It works? <br />
              Find a perfect home
            </h1>
            <p className="font-roboto text-lg text-[#1A1A1A] px-5 mt-5">
              Pellentesque egestas elementum egestas faucibus sem. Velit nunc
              egestas ut morbi. Leo diam diam.
            </p>
            <ul className="my-10 flex flex-col gap-10 lg:mx-0 mx-5">
              <li>
                <div className="flex gap-5">
                  <div className="relative">
                    <img src={Icon1} alt="" className="w-[35px] h-[35px]" />
                    <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] bottom-[38px]"></div>
                  </div>
                  <div className="flex-col">
                    <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
                      Find Real Estate
                    </h1>
                    <p className="mt-2 text-sm lg:text-lg">
                      Sumo petentium ut per, at his wisim utinam <br />{" "}
                      adipiscing. Est ei graeco
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5">
                  <div className="relative">
                    <img src={Icon2} alt="" className="w-[35px] h-[35px]" />
                    <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] bottom-[38px]"></div>
                  </div>
                  <div className="flex-col">
                    <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
                      Meet Realtor
                    </h1>
                    <p className="mt-2 text-sm lg:text-lg">
                      Sumo petentium ut per, at his wisim utinam <br />{" "}
                      adipiscing. Est ei graeco
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-5">
                  <div className="relative">
                    <img src={Icon3} alt="" className="w-[35px] h-[35px]" />
                    <div className="bg-[#e7c873b8] absolute h-[30px] w-[30px] rounded-[50%] left-[-8px] bottom-[38px]"></div>
                  </div>
                  <div className="flex-col">
                    <h1 className="text-lg lg:text-xl font-roboto font-medium text-[#1A1A1A]">
                      Take the keys
                    </h1>
                    <p className="mt-2 text-sm lg:text-lg">
                      Sumo petentium ut per, at his wisim utinam <br />{" "}
                      adipiscing. Est ei graeco
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Testimonials />
      <Choose />

      <LatestNews />

      <div className="max-w-[1280px] mx-auto my-10">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 lg:col-span-6 m-5">
            <div className="bg-[#F9F9F9] font-roboto p-8 lg:p-14 rounded-lg">
              <div className="grid sm:grid-cols-12">
                <div className="col-span-12 lg:col-span-9">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-medium text-lg lg:text-2xl">
                      Looking for the new home?
                    </h4>
                    <p className="text-sm lg:text-lg font-normal lg:pe-20 text-justify">
                      10 new offers every day. 350 offers on site, trusted by a
                      community of thousands of users.
                    </p>
                    <button className="bg-[#1F4B43] rounded-lg text-white lg:w-[150px] text-sm lg:text-lg py-1 lg:py-3 flex items-center justify-center gap-2 mt-8">
                      Get Started
                      <EastIcon size="small" />
                    </button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end">
                  <img src={home} alt="" className="w-[130px] h-[130px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 m-5">
            <div className="bg-[#FFF8F6] font-roboto p-8 lg:p-14 rounded-lg">
              <div className="grid sm:grid-cols-12">
                <div className="col-span-12 lg:col-span-9">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-medium text-lg lg:text-2xl">
                      Want to sell your home?
                    </h4>
                    <p className="text-sm lg:text-lg font-normal lg:pe-20 text-justify">
                      10 new offers every day. 350 offers on site, trusted by a
                      community of thousands of users.
                    </p>
                    <button className="bg-[#1F4B43] rounded-lg text-white lg:w-[150px] text-sm lg:text-lg py-1 lg:py-3 flex items-center justify-center gap-2 mt-8">
                      Get Started
                      <EastIcon size="small" />
                    </button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3 hidden lg:flex items-end">
                  <img src={house} alt="" className="w-[130px] h-[130px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </Layout>
  );
};
