import React from "react";
import VerifyTick from "../assets/img/tick.png";
import PiggyBank from "../assets/img/piggybank.png";
import Wrench from "../assets/img/Wrench.png";

export const Choose = () => {
  return (
    <>
      {/* Why choose us?  */}
      <div className="my-10">
        <h1 className="text-4xl font-bold lg:text-6xl pt-10 font-dmsans lg:font-medium text-black text-center">
          Why Choose us?
        </h1>

        <div className="grid sm:grid-cols-12 my-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
              <div className="flex items-center justify-around">
                <h3 className="font-bold font-poppins text-2xl lg:text-3xl">
                  Trusted By Thousands
                </h3>
                <img src={VerifyTick} alt="" />
              </div>

              <p className="text-xl leading-9 text-justify">
                With a proven track record of excellence, our real estate
                services have earned the trust of thousands of satisfied
                clients, as we are dedicated to providing solutions to your unique needs.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
              <div className="flex items-center justify-around">
                <h3 className="font-bold font-poppins text-2xl lg:text-3xl">
                  Financing Made Easy
                </h3>
                <img src={PiggyBank} alt="" />
              </div>

              <p className="text-xl leading-9 text-justify">
                Our simplified financing solution make securing your dream home
                a breeze. Say goodbye to complexity and hello to easy,
                hassale-free financing options.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-[#F2F2F2] border border-[#03002E] rounded-[15.82px] p-5 m-5">
              <div className="flex items-center justify-around">
                <h3 className="font-bold font-poppins text-2xl lg:text-3xl ">
                  Support 24/7
                </h3>
                <img src={Wrench} alt="" />
              </div>
              <p className="text-xl leading-9 text-justify">
                Our dedicated team is here for you 24/7, ensuring you have
                support you need, whether you have questions about propertied,
                transactions, or market trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
