import React, { useEffect } from "react";
import { getAllSearchDataRequest } from "../Redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { useDebounce } from "use-debounce";

const AllSearch = ({ inputValue, tabValues }) => {
  const dispatch = useDispatch();
  const [debounceValue] = useDebounce(inputValue, 300);

  const { allSearchData, allSearchLoading } = useSelector(
    (state) => state.reducer
  );

  useEffect(() => {
    dispatch(getAllSearchDataRequest(debounceValue, tabValues));
  }, [debounceValue, tabValues]);
  return (
    <>
      {allSearchLoading ? (
        <Loading />
      ) : (
        <div className="container space-y-4">
          {allSearchData &&
            allSearchData.results?.map((items, key) => (
              <div key={key}>
                <a href={items?.link} target="_blank">
                  <p className="text-gray-400 w-fit">
                    {items?.link.length > 30
                      ? items?.link.substring(0, 30)
                      : items?.link}
                  </p>
                  <p className="text-lg hover:underline w-fit text-blue-700 dark:text-blue-300">
                    {items?.title}
                  </p>
                </a>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default AllSearch;
