import React, { lazy, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchRequest } from "../../Redux/SearchSlice";
import Context from "../Hooks/ContextHook";
import { useDebounce } from "use-debounce";

const Navbar = lazy(() => import("../Navbar/Navbar"));
const AllSearch = lazy(() => import("./AllSearch"));
const ImagesSearch = lazy(() => import("./ImagesSearch"));
const VideosSearch = lazy(() => import("./VideosSearch"));

const SearchMain = () => {
  const context = useContext(Context);
  const [navSearchValue, setNavSearchValue] = useState();
  const [debounceValue] = useDebounce(navSearchValue, 500);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("query");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchData, searchLoading } = useSelector((state) => state.search);

  const handleNavSearchChange = (e) => {
    setNavSearchValue(e.target.value);
  };

  const isTab =
    context.tabState === 1
      ? "search"
      : context.tabState === 2
      ? "image"
      : context.tabState === 3 && "videos";

  useEffect(() => {
    navigate(`/search?query=${debounceValue || search}`);
  }, [debounceValue]);

  useEffect(() => {
    dispatch(searchRequest({ search, isTab }));
  }, [dispatch, search, context.tabState]);

  const renderComponents = () => {
    switch (context.tabState) {
      case 1:
        return (
          <AllSearch searchData={searchData} searchLoading={searchLoading} />
        );
      case 2:
        return (
          <ImagesSearch searchData={searchData} searchLoading={searchLoading} />
        );
      case 3:
        return (
          <VideosSearch searchData={searchData} searchLoading={searchLoading} />
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Navbar handleNavSearchChange={handleNavSearchChange} />
      <div className="px-6 md:pl-56 pt-4 pb-10">{renderComponents()}</div>
    </>
  );
};

export default SearchMain;
