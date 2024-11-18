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
          <div className="col-span-12 text-center mt-10 lg:mt-20">
            <h1 className="font-dmsans font-medium text-white text-3xl lg:text-4xl capitalize">
              Events
            </h1>
          </div>
        </div>
      </div>

      <NavigationBar />

      <div className="my-10">
        <h1 className="font-roboto text-3xl lg:text-4xl font-bold lg:font-medium text-center py-3 lg:py-8">
          Events
        </h1>
        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto mt-3 lg:mt-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>
                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>
                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>
                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>

                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>

                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>

                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>

                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>

                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-5">
            <div className="card">
              <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <p className="copy-1 text-lg">Posted On: 10/12/2024</p>

                <Link to="/event/abc">
                  <button className="btn">View Trips</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
