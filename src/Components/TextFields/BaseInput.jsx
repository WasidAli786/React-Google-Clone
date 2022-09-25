import React from "react";

const BaseInput = ({ name, onChange }) => {
  return (
    <>
      <div className="flex items-center relative w-full">
        <i className="uil uil-search absolute ml-4 text-xl"></i>
        <input
          type="text"
          name={name || "name"}
          placeholder="Search..."
          onChange={onChange}
          className="w-full h-[50px] px-11 rounded-full shadow-md focus:outline-none focus:shadow-lg hover:shadow-lg"
        />
        <i className="uil uil-microphone absolute right-4 text-xl"></i>
      </div>
    </>
  );
};

export default BaseInput;
