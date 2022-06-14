import React, { useState } from "react";
import { Tabs } from "antd";
import AllSearch from "./AllSearch";
import AllImages from "./AllImages";
import AllVideos from "./AllVideos";

const { TabPane } = Tabs;

const Navbar = ({ setDarkTheme, darkTheme }) => {
  const [inputValue, setInputValue] = useState("google");
  const [tabValues, setTabValues] = useState("search");

  const handleTabChange = (values) => {
    setTabValues(values);
  };

  return (
    <>
      <div className="pt-8 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img src="/images/google.png" className="h-6 md:h-10" alt="" />
            <span className="relative flex items-center">
              <input
                type="text"
                placeholder="Search something..."
                className="md:w-[500px] rounded-full border h-12 px-9 outline-none shadow-sm hover:shadow-lg"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <i className="uil uil-search absolute left-4"></i>
            </span>
          </div>
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="text-xl bg-white rounded-full border px-2 py-1 hover:shadow-lg"
          >
            {darkTheme ? "Light 💡" : "Dark 🌙"}
          </button>
        </div>
        <div className="md:ml-40 mt-4">
          <Tabs defaultActiveKey="search" onChange={handleTabChange}>
            <TabPane
              tab={<span className="dark:text-gray-200 font-medium">All</span>}
              key="search"
            >
              <AllSearch inputValue={inputValue} tabValues={tabValues} />
            </TabPane>
            <TabPane
              tab={
                <span className="dark:text-gray-200 font-medium">Images</span>
              }
              key="image"
            >
              <AllImages />
            </TabPane>
            <TabPane
              tab={
                <span className="dark:text-gray-200 font-medium">Videos</span>
              }
              key="videos"
            >
              <AllVideos />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Navbar;
