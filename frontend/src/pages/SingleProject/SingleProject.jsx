import React from "react";
import { Layout } from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { PropertyCard } from "../../components/PropertyCard";

export const SingleProject = () => {
  const { id } = useParams();
  const apiUrl = `/api/v1/property`;
  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const properties = data.properties;
  return (
    <Layout>
      <div className="projectbanner flex items-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px] capitalize">
              {id.replace("-", " ")}
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-12 my-14">
        {properties &&
          properties
            .filter(
              (property) =>
                property.category.name ==
                `${id
                  .replace("-", " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}`
            )
            .map((property) => {
              return (
                <div className="col-span-4 flex justify-center">
                  <PropertyCard
                    key={property._id}
                    id={property._id}
                    name={property.name}
                    address={property.address}
                    image={property.propertyImages[0]}
                  />
                </div>
              );
            })}
      </div>
    </Layout>
  );
};
