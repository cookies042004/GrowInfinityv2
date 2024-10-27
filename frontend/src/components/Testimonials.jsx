import React from "react";
import Testimonial1 from "../assets/img/testimonial1.jpeg";
import Testimonial2 from "../assets/img/testimonial2.jpeg";

export const Testimonials = () => {
  return (
    <>
      {/* Testimonial  */}
      <div>
        <h1 className="text-4xl font-bold lg:text-6xl text-center lg:font-medium py-8">
          Our Testimonial
        </h1>

        <div className="flex justify-center my-10 overflow-hidden">
          <div className="border-[#03002E] border-4 border-dashed	w-[550px] h-[550px] rounded-[50%] flex items-center justify-center relative my-10">
            <div className="border-[#03002E] border-4 border-dashed	w-[400px] h-[400px] rounded-[50%] flex items-center justify-center">
              <img
                src={Testimonial1}
                alt=""
                className="h-[360px] w-[360px] rounded-[50%] object-cover"
              />
            </div>

            <div className="absolute right-[-45px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
            <div className="absolute left-[-45px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
            <div className="absolute top-[-45px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
            <div className="absolute bottom-[-45px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
            <div className="absolute right-[22px] top-[10px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
            <div className="absolute left-[22px] top-[10px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
            <div className="absolute left-[22px] bottom-[10px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
            <div className="absolute right-[22px] bottom-[10px]">
              <img
                src={Testimonial2}
                alt=""
                className="w-[100px] h-[100px] object-cover object-top rounded-[50%] border-4 border-[#03002E]"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto py-10 font-poppins">
          <h1 className="text-3xl lg:text-[54.95px] font-bold	text-[#03002E] text-center md:font-semibold ">Vipin</h1>
          <p className="text-justify font-normal leading-9 text-lg lg:text-[20.61px] mt-8 px-5 lg:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};
