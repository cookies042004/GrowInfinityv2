import React from "react";
import arrowRight from "../assets/img/arrow-right.png";

import "./PropertyCard.css";
import { Link } from "react-router-dom";

export const PropertyCard = ({ id, name, address, image }) => {
  return (
    <div className="property-card font-poppins text-[#03002E] p-5 w-[350px] my-5">
      <div className="flex justify-center">
        <img
          src={`http://localhost:4000/${image}`}
          alt=""
          className="rounded-[50%] object-center"
          style={{height: '300px'}}
        />
      </div>
      <h1 className="text-xl font-semibold mt-5">{name}</h1>
      <p className="font-normal ">{address}</p>
      <p className="font-semibold text-[#161A23]">3 BHK</p>
      <p className="font-semibold">From INR 17 Lakh</p>
      <div className="flex gap-8 py-6">
        <div className="bg-[#03002E] rounded-[16.7px] px-7 py-1">
          <Link to={`/project/${id}`}>
            <button className="text-white">Details</button>
          </Link>
        </div>
        <button className="text-white bg-[#03002E] rounded-[16.7px] px-7 py-1 flex justify-between gap-4 items-center">
          Enquiry
          <span>
            <img src={arrowRight} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};
 