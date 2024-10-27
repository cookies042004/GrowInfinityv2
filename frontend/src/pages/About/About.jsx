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
import directorImg2 from "../../assets/img/director2.webp";

export const About = () => {
  return (
    <Layout>
      {/* About Hero  */}
      <div className="aboutbanner flex items-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px]">
              About Us
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
      {/* welcome to grow infinity  */}
      <div className="grid sm:grid-cols-12 my-8 mx-10">
        <div className="col-span-12 lg:col-span-6">
          <h1 className="font-poppins text-3xl text-center lg:text-left lg:text-[40px] text-[#03002E] font-bold lg:mt-16">
            WELCOME TO GROW INFINITY REALTOR
          </h1>
          <p className="font-dmsans font-normal text-xl  lg:text-[22.39px] leading-10 my-8 lg:pe-10 text-justify">
            Grow infinity is an accomplished real estate agent firm. Drawing
            from their years of experience they brings a strategic yet personal
            approach to the home buying, selling, and renting process. Over the
            years, Grow infinity has built a reputation for providing a seamless
            experience to customers to secure their dream homes.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center lg:p-10">
          <div className="bg-[#03002E] rounded-[13px] h-[480px] w-full lg:w-[575px] relative">
            <div className="lg:absolute top-16 -left-20">
              <img
                src={aboutImg}
                alt="about-welcome-image"
                className="h-[480px] w-full lg:w-[575px] rounded-[13px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* What we do?  */}
      <div className="rounded-[14px] bg-[#03002E] text-white mx-8  mt-20 mb-10 p-10">
        <h2 className="font-inter font-bold text-center text-3xl lg:text-left lg:text-[36px]">
          What we do?
        </h2>
        <p className="font-inter font-normal text-xl lg:text-[22px] leading-8 my-3 text-justify">
          At Grow Infinity Realtors, we pride ourselves on our commitment to
          delivering personalized solutions that cater to your unique needs and
          preferences. Our extensive network and market knowledge enable us to
          offer a diverse range of properties, from luxurious estates to cozy
          family homes and prime commercial spaces.
        </p>
      </div>
      {/* Mission  */}
      <div className="rounded-[14px] bg-[#03002E] text-white mx-8  mt-10 mb-10 p-10">
        <div className="grid sm:grid-cols-12 flex-col-reverse">
          <div className="col-span-12 lg:col-span-6 ">
            <h2 className="font-inter font-bold text-center text-3xl lg:text-left lg:text-[36px]">
              MISSION
            </h2>
            <p className="font-inter font-normal text-xl lg:text-[22px] leading-9 my-3 text-justify">
              Our mission is to create seamless and rewarding experiences for
              all our clients, ensuring that each transaction is smooth,
              transparent, and successful. Trust, integrity, and professionalism
              form the core values of our company, and we strive to exceed
              expectations, building long-lasting relationships with our
              clients.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:flex justify-center">
            <img
              src={aboutImg2}
              alt=""
              className="h-[400px] w-full lg:w-[503px] border-4 border-white rounded-[28px]"
            />
          </div>
        </div>
      </div>
      {/* Youtube Video  */}
      <div className="flex justify-center mx-8 my-5 rounded-[24px]">
        <iframe
          width="1470"
          src="https://www.youtube.com/embed/zghQRqvsizw?si=XwiD01kUR0Ouxt6E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-[24px] h-[400px] lg:h-[700px]"
        ></iframe>
      </div>

      <Choose />

      {/* Meet our directors  */}
      <div>
        <h1 className="text-center text-[#03002e] text-4xl font-bold lg:text-6xl lg:font-semibold pb-10">
          Meet our team
        </h1>

        <div className="grid sm:grid-cols-12 mx-16">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-3 p-5 rounded-lg border">
            <div className="director-card">
              <div>
                <img
                  src={directorImg}
                  alt=""
                  className="rounded-lg h-[400px] w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-3xl py-3 font-semibold">
                  Mr. Xyz
                </h3>
                <h5 className="text-center text-xl pb-3 text-gray-500">
                  Founder & Managing director
                </h5>
                <p className="text-justify text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus magnam molestias facere aut doloremque amet
                  consequatur adipisci dolorem, quasi praesentium eaque quidem
                  sit cupiditate, architecto corrupti ut debitis nemo magni?
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-3 p-5 rounded-lg border">
            <div className="director-card">
              <div>
                <img
                  src={directorImg2}
                  alt=""
                  className="rounded-lg h-[400px] w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-3xl py-3 font-semibold">
                  Mr. Xyz
                </h3>
                <h5 className="text-center text-xl pb-3 text-gray-500">
                  Founder & Managing director
                </h5>
                <p className="text-justify text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus magnam molestias facere aut doloremque amet
                  consequatur adipisci dolorem, quasi praesentium eaque quidem
                  sit cupiditate, architecto corrupti ut debitis nemo magni?
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 m-3 p-5 rounded-lg border">
            <div className="director-card">
              <div>
                <img
                  src={directorImg2}
                  alt=""
                  className="rounded-lg h-[400px] w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-3xl py-3 font-semibold">
                  Mr. Xyz
                </h3>
                <h5 className="text-center text-xl pb-3 text-gray-500">
                  Founder & Managing director
                </h5>
                <p className="text-justify text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus magnam molestias facere aut doloremque amet
                  consequatur adipisci dolorem, quasi praesentium eaque quidem
                  sit cupiditate, architecto corrupti ut debitis nemo magni?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Gallery  */}
      <div>
        <h1 className="font-dmsans font-mediumt text-[59.08px] text-center">
          Gallery
        </h1>

        <div className="grid sm:grid-cols-12 m-5">
          <div className="col-span-8">
            <div className="grid sm:grid-cols-12">
              <div className="col-span-6 m-5">
                <img
                  src={aboutImg}
                  alt=""
                  className="h-[229px] w-full object-cover rounded-[23px] border-4 border-[#03002E]"
                />
              </div>
              <div className="col-span-6 m-5">
                <img
                  src={gallery3}
                  alt=""
                  className="h-[229px] w-full object-cover rounded-[23px] border-4 border-[#03002E]"
                />
              </div>
              <div className="col-span-12 m-5">
                <img
                  src={gallery2}
                  alt=""
                  className="h-[229px] w-full object-cover rounded-[23px] border-4 border-[#03002E]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="m-5">
              <img
                src={gallery1}
                alt=""
                className="h-[497px] w-full  rounded-[23px] border-4 border-[#03002E]"
              />
            </div>
          </div>
          <div className="col-span-12">
            <img
              src={aboutImg2}
              alt=""
              className="h-[229px] w-full object-cover  rounded-[23px] border-4 border-[#03002E]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
