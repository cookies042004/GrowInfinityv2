import React from "react";
import "./Event.css";
import { Layout } from "../../components/Layout";
import { NavigationBar } from "../../components/NavigationBar";
import { Link } from "react-router-dom";

export const Event = () => {
  return (
    <Layout>
      <div className="eventbanner flex justify-center items-center">
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
        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto gap-10 mt-8">
          <div className="col-span-4">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <Link to="/event/abc">
                  <button className="btn mt-20">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <Link to="/event/abc">
                  <button className="btn mt-20">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <Link to="/event/abc">
                  <button className="btn mt-20">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <Link to="/event/abc">
                  <button className="btn mt-20">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <Link to="/event/abc">
                  <button className="btn mt-20">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <Link to="/event/abc">
                  <button className="btn mt-20">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
