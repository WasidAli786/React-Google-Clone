import React, { lazy } from "react";
import { Link } from "react-router-dom";
import BaseInput from "../../Components/TextFields/BaseInput";

const SearchTabs = lazy(() => import("../Home/SearchTabs"));

const Navbar = ({ handleNavSearchChange }) => {
  return (
    <>
      <nav className="px-6 md:px-10 pt-8 border-b dark:border-gray-400">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/">
              <img
                src="/images/Logo.png"
                className="w-20 md:w-[150px]"
                alt=""
              />
            </Link>
            <div className="md:w-[600px]">
              <BaseInput onChange={handleNavSearchChange} />
            </div>
          </div>
        </div>
        <SearchTabs />
      </nav>
    </>
  );
};

export default Navbar;
