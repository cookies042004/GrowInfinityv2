import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerLogo from "../assets/img/Grow Infinity Logo White.png";
export const Footer = () => {
  return (
    <footer className="bg-[#03002e] text-white">
      <div className="grid sm:grid-cols-12 gap-4 px-8 mt-10 mx-auto">
        <div className="col-span-12 md:col-span-12 lg:col-span-3">
          <div className="flex">
            <img
              src={footerLogo}
              alt=""
              className="h-[80px] w-[250px] object-contain"
            />
          </div>
          <p className="font-normal text-lg py-3 text-justify leading-8">
            Grow infinity realtors is an accomplished real estate agent firm.
            Drawing from their years of experience they brings a strategic yet
            personal approach to the home buying, selling, and renting process.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex flex-col lg:items-end">
            <h2 className="font-poppins font-semibold text-xl uppercase">
              Areas of Operations
            </h2>
            <ul className="font-normal text-[16px] py-3 text-justify list-disc ms-10">
              <li className="my-2">Sector-150</li>
              <li className="my-2">Ghaziabad</li>
              <li className="my-2">Noida Expressway</li>
              <li className="my-2">Yamuna Expressway</li>
              <li className="my-2">Siddharth Vihar</li>
              <li className="my-2">Noida Extension</li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex flex-col lg:items-center">
            <h2 className="font-poppins font-semibold text-xl uppercase">
              Social Accounts
            </h2>
            <ul className="font-normal text-[16px] py-3 text-justify">
              <li className="my-2">
                <a
                  href="https://www.facebook.com/p/Grow-Infinity-Realtors-100092248133482/?_rdr"
                  target="_blank"
                >
                  <div className="flex gap-3">
                    <FacebookIcon />
                    Facebook
                  </div>
                </a>
              </li>
              <li className="my-2">
                <a href="#" target="_blank">
                  <div className="flex gap-3">
                    <XIcon />
                    Twitter
                  </div>
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.instagram.com/growinfinityrealtors_official/"
                  target="_blank"
                >
                  <div className="flex gap-3">
                    <InstagramIcon />
                    Instagram
                  </div>
                </a>
              </li>
              <li className="my-2">
                <a href="#">
                  <div className="flex gap-3">
                    <YouTubeIcon />
                    Youtube
                  </div>
                </a>
              </li>
              <li className="my-2">
                <a href="#">
                  <div className="flex gap-3">
                    <WhatsAppIcon />
                    Whatsapp
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-3">
          <h2 className="font-poppins font-semibold text-xl uppercase">
            Contact Us
          </h2>
          <ul className="font-normal text-[16px] py-3 text-justify">
            <li className="my-2">
              Plot No. BL-34, II Floor, Near Fitness Gym, Sector-116, Noida,
              Uttar Pradesh-201305
            </li>
            <li className="my-2">growinfinityrealtor1@gmail.com</li>
            <li className="my-2">+91-9990052554</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-9">
        <hr className="text-white opacity-100 w-[80%]" />
      </div>

      <div className="grid sm:grid-cols-12 py-4 text-center">
        <div className="sm:col-span-6 col-span-12 flex justify-center sm:mb-0 mb-3">
          <p>
            © {new Date().getFullYear()} Grow Infinity Realtors. All Rights
            Reserved.
          </p>
        </div>
        <div className="sm:col-span-3 col-span-6 flex justify-center">
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
        <div className="sm:col-span-3 col-span-6 flex justify-center">
          <p>Terms & conditions</p>
        </div>
      </div>
    </footer>
  );
};
