import React, { useState } from "react";
import Testimonial1 from "../assets/img/testimonial1.jpeg";
import Testimonial2 from "../assets/img/testimonial2.jpeg";
import StarIcon from "@mui/icons-material/Star";
import quote from "../assets/img/SVG.png";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Designer",
    image: Testimonial1,
    text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    name: "Sarah Lee",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1645800803579-9cdc733f3bfc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Another testimonial image
    text: "Amazing platform to compare properties. It really helped me make the right decisions for my projects! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    name: "John Doe",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1617724748068-691efeeaf542?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Another testimonial image
    text: "The loan estimator tool saved me so much time. Excellent features and user-friendly interface.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // Determines animation direction

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {/* Testimonial  */}
      <div className="bg-[#FFF8F6] mt-8 lg:py-8 lg:px-16">
        <div className="grid sm:grid-cols-12 max-w-[1280px] mx-auto">
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div className="m-5 lg:px-10 lg:py-16 font-roboto lg:pe-32 flex flex-col items-center ">
              <h1 className="text-xl lg:text-4xl text-[#1A1A1A] my-4 font-medium">
                What our customers are saying us?
              </h1>
              <p className="text-[#1A1A1A] text-lg text-justify my-5 lg:pe-20">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose injected humour and the like.
              </p>
              <div className="flex justify-center lg:justify-start gap-10">
                <div className="flex-col mt-10">
                  <h3 className="font-medium text-[#1A1A1A] text-xl lg:text-2xl">10m+</h3>
                  <p>Happy People</p>
                </div>
                <div className="flex-col mt-10">
                  <h3 className="font-medium text-[#1A1A1A] text-xl lg:text-2xl">4.88</h3>
                  <p className="text-lg">Overall rating</p>
                  <div className="hidden lg:flex mt-3">
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
          <div className="col-span-12 lg:col-span-6 flex justify-center testimonial-container">
            <div className="m-5 lg:px-10 py-16 font-roboto lg:ps-26">
              <div
                className={`flex-col items-center gap-4 testimonial-item 
          ${
            direction === "next"
              ? "slide-in"
              : direction === "prev"
              ? "slide-out-prev"
              : ""
          }`}
              >
                <div className="flex items-center gap-5">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-[50px] lg:w-[90px] rounded-[50%] h-[50px] lg:h-[90px] object-cover object-top"
                  />
                  <div className="flex-col justify-center gap-5">
                    <h5 className="font-medium text-[#1A1A1A] text-sm lg:text-lg">
                      {currentTestimonial.name}
                    </h5>
                    <p className="text-sm lg:text-lg">{currentTestimonial.role}</p>
                  </div>
                  <div className="ms-32">
                    <img src={quote} alt="quote" />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="leading-10 text-md lg:text-lg text-justify font-roboto font-medium text-[#1A1A1A]">
                    {currentTestimonial.text}
                  </p>
                </div>
                <div className="flex gap-5 mt-8">
                  <button
                    onClick={handlePrev}
                    className="border border-black px-5 py-1 lg:px-7 lg:py-2 rounded-[40px]"
                  >
                    {"<"}
                  </button>
                  <button
                    onClick={handleNext}
                    className="border border-black px-5 py-1 lg:px-7 lg:py-2 rounded-[40px]"
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
