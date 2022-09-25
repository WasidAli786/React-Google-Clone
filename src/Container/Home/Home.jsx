import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseInput from "../../Components/TextFields/BaseInput";

const Home = () => {
  const navigate = useNavigate();

  const [mainSearchValue, setMainSearchValue] = useState();

  const handleMainSearchChange = (e) => {
    setMainSearchValue(e.target.value);
  };
  const handleMainSearch = (e) => {
    e.preventDefault();
    mainSearchValue && navigate(`/search?query=${mainSearchValue}`);
    // navigate({ pathname: "/search", search: `?query=${mainSearchValue}` });
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-10">
        <div className="w-[700px] flex flex-col items-center space-y-8 mb-20">
          <img src="/images/GoogleBanner.png" className="w-2/5 h-auto" alt="" />
          <form onSubmit={handleMainSearch} className="w-full">
            <BaseInput name="search" onChange={handleMainSearchChange} />
          </form>
        </div>
        {/* <button className="bg-white rounded-full py-2 px-3 space-x-4 fixed bottom-4 right-4 shadow-sm hover:shadow-md capitalize">
          <i className="uil uil-edit-alt text-lg"></i> customize theme
        </button> */}
      </div>
    </>
  );
};

export default Home;
