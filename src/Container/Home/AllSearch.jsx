import React from "react";
import MainLoading from "../../Components/Loading/MainLoading";

const AllSearch = ({ searchData, searchLoading }) => {
  return (
    <>
      {searchLoading ? (
        <MainLoading />
      ) : searchData?.results?.length ? (
        searchData?.results?.map((items, key) => (
          <div className="space-y-1 mt-4 break-words" key={key}>
            <a href={items?.link} target="_blank" className="text-gray-400">
              {items?.link}
              <h1 className="text-primary hover:underline hover:cursor-pointer text-base md:text-xl font-medium">
                {items?.title}
              </h1>
            </a>
          </div>
        ))
      ) : (
        <h1>Not Data</h1>
      )}
    </>
  );
};

export default AllSearch;
