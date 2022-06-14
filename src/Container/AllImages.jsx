import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const AllImages = () => {
  const { allSearchData, allSearchLoading } = useSelector(
    (state) => state.reducer
  );

  return (
    <>
      {allSearchLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4">
            {allSearchData &&
              allSearchData.image_results?.map((items, key) => (
                <div className="shadow-xl md:bg-white" key={key}>
                  <a
                    href={items && items.link && items.link.href}
                    target="_blank"
                  >
                    <img
                      src={items && items.image && items.image.src}
                      className="w-full h-52"
                      loading="lazy"
                      alt=""
                    />
                    <p className="break-words text-black capitalize p-2 hover:underline">
                      {items && items.link && items.link.title}
                    </p>
                  </a>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllImages;
