import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import Loading from "./Loading";

const AllVideos = () => {
  const { allSearchData, allSearchLoading } = useSelector(
    (state) => state.reducer
  );

  return (
    <>
      {allSearchLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {allSearchData &&
              allSearchData.results?.map((items, key) => (
                <div className="shadow-xl dark:bg-white" key={key}>
                  <ReactPlayer
                    url={items?.additional_links[0].href}
                    controls
                    height={200}
                    width="100%"
                  />
                  <p className="break-words text-black capitalize p-2 hover:underline cursor-pointer">
                    {items && items.title}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllVideos;
