import React from "react";
import ReactPlayer from "react-player";
import MainLoading from "../../Components/Loading/MainLoading";

const VideosSearch = ({ searchData, searchLoading }) => {
  return (
    <>
      {searchLoading ? (
        <MainLoading />
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {searchData?.results?.length ? (
            searchData?.results?.map((items, key) => (
              <div
                className="shadow-md hover:shadow-lg bg-white dark:bg-gray-800"
                key={key}
              >
                <ReactPlayer
                  url={items?.link}
                  controls
                  height={200}
                  width="100%"
                />
                <p className="break-words capitalize p-2 dark:text-gray-400 hover:underline">
                  {items?.title}
                </p>
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

export default VideosSearch;
