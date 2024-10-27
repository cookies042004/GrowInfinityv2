import React from "react";

export const NewsCard = ({ item }) => {
  return (
    <div className="bg-[#F1F1F1] rounded-[19.4px] font-poppins m-4 ">
      <div className="p-3">
        <img
          src={`http://localhost:4000/${item.image}`}
          alt=""
          className="h-[280px] w-full rounded-[19.4px]"
        />
      </div>
      <div className="p-3">
        <p className="py-2 px-3">{item.createdAt.split("T")[0]}</p>
        <h3 className=" font-semibold text-[19.4px] p-3">
          {item.title.slice(0, 75) + ".."}
        </h3>

        <p className="text-[16px] p-3 text-justify">
          {item.description.slice(0, 210) + "....."}
        </p>

        <p className="text-[16px] p-3 text-[#1b1364] hover:font-semibold">Read more</p>
      </div>
    </div>
  );
};
