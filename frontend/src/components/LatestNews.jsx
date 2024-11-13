import React from "react";
import { useFetchData } from "../hooks/useFetchData";
import { NewsCard } from "./NewsCard";
import "./LatestNews.css";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

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
    <div className="bg-latest">
      <div className="my-5 py-10">
        <h1 className="font-roboto text-3xl lg:text-4xl font-bold lg:font-medium text-white text-center py-8">
          Latest News
        </h1>

        <div className="grid sm:grid-cols-12 my-5 max-w-[1280px] mx-auto gap-5">
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

          <div className="col-span-12">
            <div className="flex justify-center mt-10">
              <Link to="/news">
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<EastIcon />}
                  sx={{
                    backgroundColor: "white",
                    color: "#03002e",
                    textTransform: "none",
                  }}
                >
                  View all
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
