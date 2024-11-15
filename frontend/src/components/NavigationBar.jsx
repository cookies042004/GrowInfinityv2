import React from "react";
import { useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const location = useLocation();
  const path = location.pathname; // Get the full path (e.g., '/about')

  return (
    <div className="max-w-[1280px] mx-5 lg:mx-auto my-10">
      <div className="bg-gray-100 p-3 lg:p-4 shadow-lg capitalize rounded-lg text-xs lg:text-sm">
        Home{' '}
        {path.split("/").filter(Boolean).map((item, index) => (
          <span key={index} className="font-medium  text-xs lg:text-sm capitalize">
            {`/ ${item} `}
          </span>
        ))}
      </div>
    </div>
  );
};
