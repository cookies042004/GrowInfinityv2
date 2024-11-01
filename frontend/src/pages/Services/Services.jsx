import React from "react";
import { Layout } from "../../components/Layout";

import "./Services.css";

import BusinessIcon from "@mui/icons-material/Business";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HomeIcon from "@mui/icons-material/Home";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PiggyBank from "../../assets/img/piggybank.png";
import { PropertyCard } from "../../components/PropertyCard";
import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

export const Services = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/property`;
  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const properties = data.properties;

  return (
    <Layout>
      {/* Service Hero  */}
      <div className="servicebanner flex items-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px]">
              Services
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>

      {/* Our Services  */}
      <div className="my-5">
        <h1 className="font-dmsans py-8 text-4xl font-bold lg:font-medium lg:text-[59.08px] text-center">
          Our Services
        </h1>

        <div className="grid  sm:grid-cols-12 my-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
            <div className="flex items-center justify-around">
              <h3 className="font-bold font-poppins text-3xl">Residential</h3>
              <BusinessIcon sx={{ fontSize: "60px", color: "#03002E" }} />
            </div>

            <p className="text-xl leading-9">
              These Services Focus On Buying And Selling Homes, Condos,
              Apartments, And Other Residential Properties. They Cater To
              Individuals And Families Looking For A Place To Live.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
            <div className="flex items-center justify-around">
              <h3 className="font-bold font-poppins text-3xl">Commercial</h3>
              <Inventory2Icon sx={{ fontSize: "60px", color: "#03002E" }} />
            </div>
            <p className="text-xl leading-9">
              Commercial Real Estate Services Deal With Buying And Selling
              Commercial Properties Like Office Buildings, Retail Spaces,
              Industrial Warehouses, And Land For Development.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
            <div className="flex items-center justify-around">
              <h3 className="font-bold font-poppins text-3xl">Home Rental</h3>
              <HomeIcon sx={{ fontSize: "60px", color: "#03002E" }} />
            </div>
            <p className="text-xl leading-9">
              Home Rental Services Streamline The Rental Process, Ensuring A
              Convenient And Secure Experience For Both Property Owners And
              Renters.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
            <div className="flex items-center justify-around">
              <h3 className="font-bold font-poppins text-3xl">Home Loan</h3>
              <HomeWorkIcon sx={{ fontSize: "60px", color: "#03002E" }} />
            </div>

            <p className="text-xl leading-9">
              We Offer A Comprehensive Suite Of Loan Services To Make Your Home
              Buying Journey Seamless. In Addition To Helping You Find The
              Perfect Property, We Provide Expert Home Loan Services.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
            <div className="flex items-center justify-around">
              <h3 className="font-bold font-poppins text-3xl">Investment</h3>
              <img src={PiggyBank} alt="" />
            </div>

            <p className="text-xl leading-9">
              Investment-Focused Services Assist Clients In Buying And Selling
              Properties For Investment Purposes, Such As Rental Properties,
              Vacation Rentals, And Fix-And-Flip Opportunities.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
            <div className="flex items-center justify-around">
              <h3 className="font-bold font-poppins text-3xl">Consultation</h3>
              <HeadsetMicIcon sx={{ fontSize: "60px", color: "#03002E" }} />
            </div>
            <p className="text-xl leading-9">
              These Services Offer Expert Advice To Buyers And Sellers, Helping
              Them Make Informed Decisions, Understand Market Trends, And
              Strategize For Successful Transactions.
            </p>
          </div>
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
              className=" bg-[#03002E] text-white rounded-3xl font-normal font-dmsans px-20 py-2 text-lg lg:text-2xl"
              style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
