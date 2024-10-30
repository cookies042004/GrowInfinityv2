import React from "react";
import { Layout } from "../../components/Layout";

import "./Projects.css";
import { PropertyCard } from "../../components/PropertyCard";
import { useFetchData } from "../../hooks/useFetchData";
import { Link } from "react-router-dom";

export const Projects = () => {
  const apiUrl = "http://localhost:4000/api/v1/property";
  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const properties = data.properties;

  return (
    <Layout>
      {/* Project Hero  */}
      <div className="projectbanner flex items-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px]">
              Projects
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects  */}
      <div className="bg-white">
        <h1 className="text-center text-black text-6xl py-8 font-medium">
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
                console.log(property.propertyImages[0]);
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
              className=" bg-[#03002E] text-white rounded-3xl font-normal font-dmsans px-20 py-2 text-lg lg:text-2xl"
              style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Luxury Project */}
      <div className="bg-white">
        <h1 className="text-center text-black text-6xl py-8 font-medium">
          Our Luxury Projects
        </h1>
        <div className="flex justify-around mx-5 my-4  overflow-hidden">
          {properties &&
            properties
              .filter((property) => property.category.name == "Luxury Project")
              .slice(0, 3)
              .map((property) => {
                console.log(property.propertyImages[0]);
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
              className=" bg-[#03002E] text-white rounded-3xl font-normal font-dmsans px-20 py-2 text-lg lg:text-2xl"
              style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
            >
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Top Properties  */}
      <div className="bg-white">
        <h1 className="text-center text-black text-6xl py-8 font-medium">
          Top Properties
        </h1>
        <div className="flex justify-around mx-5 my-4  overflow-hidden">
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
