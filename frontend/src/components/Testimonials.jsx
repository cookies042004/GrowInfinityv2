import React from "react";
import Testimonial1 from "../assets/img/testimonial1.jpeg";
import Testimonial2 from "../assets/img/testimonial2.jpeg";
import StarIcon from "@mui/icons-material/Star";
import quote from "../assets/img/SVG.png"
export const Testimonials = () => {
  return (
    <>
      {/* Testimonial  */}
      <div className="bg-[#FFF8F6] mt-8 py-8 px-16">
        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto">
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div className="m-5 lg:px-10 py-16 font-roboto lg:pe-32 flex flex-col items-center ">
              <h1 className="text-4xl text-[#1A1A1A] my-4 font-medium">
                What our customers are saying us?
              </h1>
              <p className="text-[#1A1A1A] text-lg text-justify my-5 lg:pe-20">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose injected humour and the like.
              </p>
              <div className="flex justify-center gap-10">
                <div className="flex-col mt-10">
                  <h3 className="font-medium text-[#1A1A1A] text-2xl">10m+</h3>
                  <p>Happy People</p>
                </div>
                <div className="flex-col mt-10">
                  <h3 className="font-medium text-[#1A1A1A] text-2xl">4.88</h3>
                  <p>Overall rating</p>
                  <div className="flex mt-3">
                    <StarIcon sx={{ color: "#e7c874" }} size="small" />
                    <StarIcon sx={{ color: "#e7c874" }} size="small" />
                    <StarIcon sx={{ color: "#e7c874" }} size="small" />
                    <StarIcon sx={{ color: "#e7c874" }} size="small" />
                    <StarIcon sx={{ color: "#e7c874" }} size="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div className="m-5 lg:px-10 py-16 font-roboto lg:ps-26">
              <div className="flex-col items-center gap-4">
                <div className="flex items-center gap-5">
                  <img
                    src={Testimonial1}
                    alt=""
                    className="w-[90px] rounded-[50%] h-[90px] object-cover object-top"
                  />
                  <div className="flex-col justify-center gap-5">
                    <h5 className="font-medium text-[#1A1A1A] text-lg">
                      Cameron Williamson
                    </h5>
                    <p>Designer</p>
                  </div>
                  <div className="ms-32">
                    <img src={quote} alt="" />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="leading-10 text-lg text-justify font-roboto font-medium text-[#1A1A1A]">
                    Searches for multiplexes, property comparisons, and the loan
                    estimator. Works great. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dores.
                  </p>
                </div>
                <div className="flex gap-5 mt-8">
                  <button className="border border-black px-7 py-2 rounded-[40px]">{"<"}</button>
                  <button className="border border-black px-7 py-2 rounded-[40px]">{'>'} </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
