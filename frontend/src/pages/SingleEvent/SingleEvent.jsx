import React from "react";
import "./SingleEvent.css";
import { Layout } from "../../components/Layout";
import { NavigationBar } from "../../components/NavigationBar";
import trip1 from "../../assets/img/trip1.jpg";

export const SingleEvent = () => {
  return (
    <Layout>
      <div className="sinlgleeventbanner flex justify-center items-center">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center mt-20">
            <h1 className="font-dmsans font-medium text-white text-5xl capitalize">
              Events
            </h1>
          </div>
        </div>
      </div>

      <NavigationBar />

      <div className="my-10">
        <h1 className="font-roboto text-4xl font-bold lg:font-medium text-center py-8">
          Events
        </h1>
        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto gap-8 mt-8">
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
          <div className="col-span-4">
            <img
              src={trip1}
              alt=""
              className="h-[300px] object-fill rounded-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
