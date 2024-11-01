import React from "react";
import { Layout } from "../../components/Layout";
import "./News.css";

import { NewsCard } from "../../components/NewsCard";
import { useFetchData } from "../../hooks/useFetchData";
import { Link } from "react-router-dom";

export const News = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/news`;

  const { data, loading, error, refetch } = useFetchData(apiUrl);

  const news =
    data && data.news
      ? data.news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      : [];

  return (
    <Layout>
      {/* News Hero  */}
      <div className="newsbanner flex items-center lg:ps-24">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 text-center lg:col-span-6 lg:text-left">
            <h1 className="font-dmsans font-medium text-white text-5xl lg:text-[86.76px]">
              News
            </h1>
            <p className="font-dmsans font-normal text-white text-xl py-4  lg:text-[22.39px] px-5 lg:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>

      {/* Latest News  */}
      <div className="my-5">
        <h1 className="font-dmsans text-4xl font-bold lg:font-medium lg:text-[59.08px] text-center py-8">
          Latest News
        </h1>

        <div className="grid sm:grid-cols-12 my-5 mx-5 lg:mx-10">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {news?.map((item) => {
            return (
              <div key={item._id} className="col-span-12 md:col-span-6 lg:col-span-4">
                <a href={item.url} target="_blank">
                  <NewsCard item={item} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
