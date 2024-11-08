import React from "react";
import { Layout } from "../../components/Layout";

import "./About.css";

import aboutImg from "../../assets/img/aboutImg.png";
import aboutImg2 from "../../assets/img/aboutImg2.png";
import gallery1 from "../../assets/img/gallery1.png";
import gallery2 from "../../assets/img/gallery2.png";
import gallery3 from "../../assets/img/gallery3.png";
import { Choose } from "../../components/Choose";
import { Testimonials } from "../../components/Testimonials";

import directorImg from "../../assets/img/director1.webp";
import whatwedo from "../../assets/img/17.png";
import { NavigationBar } from "../../components/NavigationBar";

export const About = () => {
  return (
    <Layout>
      {/* About Hero  */}
      <div className="aboutbanner flex items-center justify-center">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center mt-20">
            <h1 className="font-dmsans text-center font-medium text-white text-5xl">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <NavigationBar />

      {/* welcome to grow infinity  */}
      <div className="my-8 mx-auto max-w-[1280px]">
        <h1 className="font-roboto text-4xl text-center font-medium lg:mt-16">
          <span className="text-gray-500">Welcome To </span>
          Grow Infinity Realtors
        </h1>

        <div className="grid sm:grid-cols-12 my-8">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-start">
            <p className="font-poppins text-2xl leading-9 text-justify text-gray-700">
              Grow infinity is an accomplished real estate agent firm. Drawing
              from their years of experience they brings a strategic yet
              personal approach to the home buying, selling, and renting
              process. Over the years, Grow infinity has built a reputation for
              providing a seamless experience to customers to secure their dream
              homes.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 flex justify-end ">
            <img
              src={aboutImg}
              alt="about-welcome-image"
              className="h-[300px] w-[480px] rounded-[13px]"
            />
          </div>
        </div>
      </div>

      <div className="my-5 max-w-[1280px] mx-auto">
        <h1 className="text-center text-4xl font-roboto font-medium py-8">
          <span className="text-gray-500">Stress-Free</span> Step to Your Dream
          Home
        </h1>
        <div className="grid sm:grid-cols-12 mt-10 gap-28">
          {[
            {
              number: "01",
              title: "Dream & Discover",
              description:
                "Envision your perfect home with our guidance and expertise",
            },
            {
              number: "02",
              title: "Pre-Approval",
              description:
                "Obtain financial pre-approval to streamline your buying process",
            },
            {
              number: "03",
              title: "Schedule Viewing",
              description: "Book visits to explore your top property choices",
            },
            {
              number: "04",
              title: "Offer & Negotiation",
              description:
                "Strategically craft your offer and skillfully negotiate terms",
            },
            {
              number: "05",
              title: "Secure Your Dream",
              description: "Carefully review contracts and secure financing",
            },
            {
              number: "06",
              title: "Welcome Home",
              description:
                "Celebrate your new beginning and settle in comfortably",
            },
          ].map((item, index) => (
            <div className="col-span-4" key={item.number}>
              <div
                className={`bg-gray-600 text-white rounded-[64px] p-8 font-roboto h-[200px] text-center relative`}
              >
                <div className="absolute bg-green-400 text-white flex justify-center items-center rounded-[50%] h-[60px] w-[60px] right-[-12px] top-[-20px] circle">
                  <h5 className="text-2xl font-medium">{item.number}</h5>
                </div>
                <h3 className="text-2xl py-5">{item.title}</h3>
                <p className="text-lg text-center text-gray-300 ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* What we do?  */}
      <div className="my-10 max-w-[1280px] mx-auto">
        <h2 className="font-roboto font-medium text-center text-4xl pt-8">
          What we do?
        </h2>
        <div className="grid sm:grid-cols-12">
          <div className="col-span-6 flex justify-center">
            <img src={whatwedo} alt="" className="w-[500px]" />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <p className="font-poppins text-2xl leading-9 text-justify text-gray-700">
              At Grow Infinity Realtors, we pride ourselves on our commitment to
              delivering personalized solutions that cater to your unique needs
              and preferences. Our extensive network and market knowledge enable
              us to offer a diverse range of properties, from luxurious estates
              to cozy family homes and prime commercial spaces.
            </p>
          </div>
        </div>
      </div>
      {/* Mission  */}
      <div className="bg-gradient-to-r from-[#03002E] to-[#0a0a60] text-white  mt-10 mb-10 p-10">
        <div className="grid sm:grid-cols-12 flex-col-reverse max-w-[1280px] mx-auto">
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-inter font-bold text-center text-3xl lg:text-left lg:text-[36px] mb-4 flex items-center justify-center lg:justify-start">
              OUR MISSION
            </h2>
            <p className="font-inter font-normal text-xl lg:text-[22px] leading-9 my-3 text-justify px-2">
              Our mission is to create seamless and rewarding experiences for
              all our clients, ensuring that each transaction is smooth,
              transparent, and successful. Trust, integrity, and professionalism
              form the core values of our company, and we strive to exceed
              expectations, building long-lasting relationships with our
              clients.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:flex justify-end">
            <img
              src={aboutImg2}
              alt="About us"
              className="h-[400px] w-full lg:w-[503px] border-4 border-white rounded-[28px] shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      <Choose />

      {/* Meet our directors  */}
      <div className="my-5 mx-auto max-w-[1280px]">
        <h1 className="text-center text-[#03002e] text-4xl font-medium pb-10">
          Get to Know Our Team
        </h1>

        <div className="grid sm:grid-cols-12 max-w-[1100px] mx-auto gap-10">
          <div className="col-span-4 m-5">
            <div className="director-card">
              <div>
                <img
                  src={directorImg}
                  alt=""
                  className="rounded-3xl h-[300px] w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-2xl py-3 font-medium font-roboto">
                  Alex Tucker
                </h3>
                <h5 className="text-center text-md pb-3 text-gray-500 font-roboto">
                  Chief Architect
                </h5>
              </div>
            </div>
          </div>
          <div className="col-span-4 m-5">
            <div className="director-card">
              <div>
                <img
                  src={directorImg}
                  alt=""
                  className="rounded-3xl h-[300px] w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-2xl py-3 font-medium font-roboto">
                  Alex Tucker
                </h3>
                <h5 className="text-center text-md pb-3 text-gray-500 font-roboto">
                  Chief Architect
                </h5>
              </div>
            </div>
          </div>
          <div className="col-span-4 m-5">
            <div className="director-card">
              <div>
                <img
                  src={directorImg}
                  alt=""
                  className="rounded-3xl h-[300px] w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-2xl py-3 font-medium font-roboto">
                  Alex Tucker
                </h3>
                <h5 className="text-center text-md pb-3 text-gray-500 font-roboto">
                  Chief Architect
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Gallery  */}
      <div className="my-10 mx-auto max-w-[1280px]">
        <h1 className="font-roboto font-medium text-4xl pb-8 text-center">
          Gallery
        </h1>

        <div className="grid sm:grid-cols-12">
          <div className="col-span-3">
            <img
              src={aboutImg}
              alt=""
              className="h-[229px] w-full object-cover"
            />
          </div>
          <div className="col-span-3">
            <img
              src={gallery3}
              alt=""
              className="h-[229px] w-full object-cover"
            />
          </div>
          <div className="col-span-3">
            {" "}
            <img
              src={gallery2}
              alt=""
              className="h-[229px] w-full object-cover"
            />
          </div>
          <div className="col-span-3">
            <img src={gallery1} alt="" className="h-[229px] w-full " />
          </div>
          <div className="col-span-3">
            <img
              src={aboutImg2}
              alt=""
              className="h-[229px] w-full object-cover "
            />
          </div>
          <div className="col-span-3">
            {" "}
            <img
              src={gallery2}
              alt=""
              className="h-[229px] w-full object-cover"
            />
          </div>
          <div className="col-span-3">
            <img src={gallery1} alt="" className="h-[229px] w-full " />
          </div>
          <div className="col-span-3">
            <img
              src={aboutImg2}
              alt=""
              className="h-[229px] w-full object-cover "
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
