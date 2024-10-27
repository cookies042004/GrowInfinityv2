import React from 'react'
import propertycard from "../assets/img/propertycard.png";
import arrowRight from "../assets/img/arrow-right.png"

import "./PropertyCard.css";

export const PropertyCard = () => {
  return (
    <div className='property-card font-poppins text-[#03002E] p-5 w-[350px] my-5'>
        <img src={propertycard} alt="" height={300} width={300} className='rounded-[50%]' />
        <h1 className='text-xl font-semibold mt-5'>KLJ Tower North</h1>
        <p className='font-normal '>KLJ Tower North B-5, 2nd Floor, Netaji Subhash Place...</p>
        <p className='font-semibold text-[#161A23]'>3 BHK</p>
        <p className='font-semibold'>From INR 17 Lakh</p>
        <div className='flex gap-8 py-6'>
            <button className='text-white bg-[#03002E] rounded-[16.7px] px-7 py-1'>Details</button>
            <button className='text-white bg-[#03002E] rounded-[16.7px] px-7 py-1 flex justify-between gap-4 items-center'>
                Enquiry
                <span>
                    <img src={arrowRight} alt="" />
                </span>
            </button>
        </div>
    </div>
  )
}
