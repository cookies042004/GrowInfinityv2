import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import { NewsCard } from "./NewsCard";

export const LatestNews = () => {
  const apiUrl = `${process.env.BASE_URL}/api/v1/news`;
  const { data, loading, error, refetch } = useFetchData(apiUrl);
  const news =
    data && data.news
      ? data.news
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4)
      : [];

  return (
    <div className="my-5">
      <h1 className="font-roboto text-4xl font-bold lg:font-medium text-center py-8">
        Latest News
      </h1>

      <div className="grid sm:grid-cols-12 my-5 max-w-[1280px] mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {news?.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <a href={item.url} target="_blank">
                <NewsCard item={item} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
