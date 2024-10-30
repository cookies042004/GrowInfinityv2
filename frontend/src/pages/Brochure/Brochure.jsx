import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { Layout } from "../../components/Layout";
import gallery1 from "../../assets/img/gallery1.png";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

import "./Brochure.css";

export const Brochure = () => {
  const apiUrl = "http://localhost:4000/api/v1/brochures/";

  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const brochures = data.brochure;

  return (
    <Layout>
      {/* Hero  */}
      <div className="brochurebanner h-screen flex flex-col items-start justify-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px]">
              Brochure
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-dmsans text-4xl font-bold lg:my-3 py-8 lg:font-medium lg:text-[59.08px] text-center">
          Brochures
        </h1>

        <div className="grid sm:grid-cols-12 mx-3 lg:mx-8">
          {brochures &&
            brochures.map((brochure) => {
              console.log(brochure.pdf);
              return (
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="brochure-card border rounded-lg m-3 lg:m-5 hover:shadow-2xl">
                    <div className="p-3">
                      <img
                        src={`http://localhost:4000/${brochure.image}`}
                        alt={brochure.name}
                        className="h-[350px] w-full rounded-lg"
                      />
                    </div>
                    <h1 className="text-center text-3xl font-semibold">
                      {brochure.name}
                    </h1>
                    <div className="location flex gap-2 justify-center items-center">
                      <RoomOutlinedIcon />
                      <p className="py-3 text-lg text-center">
                        {brochure.location}
                      </p>
                    </div>
                    <div className="p-3">
                      <a href={`http://localhost:4000/${brochure.pdf}`} download target='_blank'>
                        <button
                          className="w-full p-3 border bg-[#03002e] text-white rounded-lg text-xl hover:bg-white hover:text-[#03002e] hover:border border-[#03002e]"
                          style={{
                            boxShadow: "0px 3.34px 3.34px 0px #00000040",
                          }}
                        >
                          Download Brochure
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="brochure-card border rounded-lg m-3 lg:m-5 hover:shadow-2xl">
              <div className="p-3">
                <img
                  src={gallery1}
                  alt=""
                  className="h-[350px] w-full rounded-lg"
                />
              </div>
              <h1 className="text-center text-3xl font-semibold">
                Ace Starlit
              </h1>
              <div className="location flex gap-2 justify-center items-center">
                <RoomOutlinedIcon />
                <p className="py-3 text-lg text-center">Noida Extension</p>
              </div>
              <div className="p-3">
                <button
                  className="w-full p-3 border bg-[#03002e] text-white rounded-lg text-xl hover:bg-white hover:text-[#03002e] hover:border border-[#03002e]"
                  style={{ boxShadow: "0px 3.34px 3.34px 0px #00000040" }}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="brochure-card border rounded-lg m-3 lg:m-5 hover:shadow-2xl">
              <div className="p-3">
                <img
                  src={gallery1}
                  alt=""
                  className="h-[350px] w-full rounded-lg"
                />
              </div>
              <h1 className="text-center text-3xl font-semibold">
                Ace Starlit
              </h1>
              <div className="location flex gap-2 justify-center items-center">
                <RoomOutlinedIcon />
                <p className="py-3 text-lg text-center">Noida Extension</p>
              </div>
              <div className="p-3">
                <button
                  className="w-full p-3 border bg-[#03002e] text-white rounded-lg text-xl hover:bg-white hover:text-[#03002e] hover:border border-[#03002e]"
                  style={{ boxShadow: "0px 3.34px 3.34px 0px #00000040" }}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="brochure-card border rounded-lg m-3 lg:m-5 hover:shadow-2xl">
              <div className="p-3">
                <img
                  src={gallery1}
                  alt=""
                  className="h-[350px] w-full rounded-lg"
                />
              </div>
              <h1 className="text-center text-3xl font-semibold">
                Ace Starlit
              </h1>
              <div className="location flex gap-2 justify-center items-center">
                <RoomOutlinedIcon />
                <p className="py-3 text-lg text-center">Noida Extension</p>
              </div>
              <div className="p-3">
                <button
                  className="w-full p-3 border bg-[#03002e] text-white rounded-lg text-xl hover:bg-white hover:text-[#03002e] hover:border border-[#03002e]"
                  style={{ boxShadow: "0px 3.34px 3.34px 0px #00000040" }}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="brochure-card border rounded-lg m-3 lg:m-5 hover:shadow-2xl">
              <div className="p-3">
                <img
                  src={gallery1}
                  alt=""
                  className="h-[350px] w-full rounded-lg"
                />
              </div>
              <h1 className="text-center text-3xl font-semibold">
                Ace Starlit
              </h1>
              <div className="location flex gap-2 justify-center items-center">
                <RoomOutlinedIcon />
                <p className="py-3 text-lg text-center">Noida Extension</p>
              </div>
              <div className="p-3">
                <button
                  className="w-full p-3 border bg-[#03002e] text-white rounded-lg text-xl hover:bg-white hover:text-[#03002e] hover:border border-[#03002e]"
                  style={{ boxShadow: "0px 3.34px 3.34px 0px #00000040" }}
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
