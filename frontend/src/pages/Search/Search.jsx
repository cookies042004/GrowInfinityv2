import React from "react";
import { Layout } from "../../components/Layout";
import "./Search.css";
import { PropertyCard } from "../../components/PropertyCard";

export const Search = () => {
  return (
    <Layout>
      {/* Search Hero  */}
      <div className="searchbanner flex items-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px]">
              Search Properties
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>

      <div className="flex my-8 justify-center">
        <h3 className="text-3xl">Search results for <span className="font-bold">'Abcd'</span> </h3>
      </div>

      <div className="flex justify-around">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="flex justify-around">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="flex justify-around">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </Layout>
  );
};
