import React from "react";
import { Layout } from "../../components/Layout";

import "./Projects.css";
import { PropertyCard } from "../../components/PropertyCard";

export const Projects = () => {
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
        <h1 className="text-center text-black text-6xl py-3 font-medium">
          Featured Projects
        </h1>
        <div className="flex justify-between mx-5 my-4 overflow-hidden">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>

        <div className="my-4 mx-3">
          <button
            className="w-[100%] bg-[#03002E] text-white rounded-[36.06px] font-normal font-dmsans py-1 text-[27.29px]"
            style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
          >
            View All
          </button>
        </div>
      </div>

      {/* Luxury Project */}
      <div className="bg-white">
        <h1 className="text-center text-black text-6xl py-3 font-medium">
          Our Luxury Projects
        </h1>
        <div className="flex justify-between mx-5 my-4  overflow-hidden">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
        <div className="my-4 mx-3">
          <button
            className="w-[100%] bg-[#03002E] text-white rounded-[36.06px] font-normal font-dmsans py-1 text-[27.29px]"
            style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
          >
            View All
          </button>
        </div>
      </div>

      {/* Top Properties  */}
      <div className="bg-white">
        <h1 className="text-center text-black text-6xl py-3 font-medium">
          Top Properties
        </h1>
        <div className="flex justify-between mx-5 my-4  overflow-hidden">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
        <div className="my-4 mx-3">
          <button
            className="w-[100%] bg-[#03002E] text-white rounded-[36.06px] font-normal font-dmsans py-1 text-[27.29px]"
            style={{ boxShadow: "0px 11.93px 29px 0px rgba(0, 0, 0, 0.5)" }}
          >
            View All
          </button>
        </div>
      </div>

    </Layout>
  );
};
