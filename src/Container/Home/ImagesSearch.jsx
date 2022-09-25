import React from "react";
import LazyLoad from "react-lazyload";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import ImageSpinner from "../../Components/Loading/ImageSpinner";
import MainLoading from "../../Components/Loading/MainLoading";

const ImagesSearch = ({ searchData, searchLoading }) => {
  return (
    <>
      {searchLoading ? (
        <MainLoading />
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {searchData?.image_results?.length ? (
            searchData?.image_results?.map((items, key) => (
              <div
                className="shadow-md hover:shadow-lg bg-white dark:bg-gray-800"
                key={key}
              >
                <LazyLoad height={208} placeholder={<ImageSpinner />}>
                  <img
                    src={items?.image?.src}
                    alt={items?.link?.title}
                    className="h-52 w-full object-cover"
                  />
                </LazyLoad>
                <a href={items?.link?.href} target="_blank">
                  <p className="break-words capitalize p-2 dark:text-gray-400 hover:underline">
                    {items?.link?.title}
                  </p>
                </a>
              </div>
            ))
          ) : (
            <h1>Not Data</h1>
          )}
        </div>
      )}
    </>
  );
};

export default ImagesSearch;
