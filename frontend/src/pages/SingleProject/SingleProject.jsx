import React from "react";
import { Layout } from "../../components/Layout";
import "./SingleProject.css"
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { PropertyCard } from "../../components/PropertyCard";
import { Card } from "../../components/Card";

export const SingleProject = () => {
  const { id } = useParams();
  // const apiUrl = `/api/v1/property`;
  // const { data, loading, error, refetch } = useFetchData(apiUrl);
  // const properties = data.properties;
  return (
    <Layout>
      <div className="projectbanner flex justify-center items-center">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:mt-20">
            <h1 className="font-dmsans font-medium text-white text-3xl lg:text-4xl capitalize">
              {id.replace("-", " ")}
            </h1>
          </div>
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
    </Layout>
  );
};
