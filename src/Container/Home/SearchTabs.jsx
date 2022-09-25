import React, { useContext } from "react";
import Context from "../Hooks/ContextHook";

const SearchTabs = () => {
  const context = useContext(Context);

  const handleTabsChange = (id) => {
    context.setTabState(id);
  };

  return (
    <>
      <ul className="search__tabs">
        <li
          className={context.tabState === 1 ? "active__tabs" : ""}
          onClick={() => handleTabsChange(1)}
        >
          <i className="uil uil-search"></i> all
        </li>
        <li
          className={context.tabState === 2 ? "active__tabs" : ""}
          onClick={() => handleTabsChange(2)}
        >
          <i className="uil uil-image"></i> images
        </li>
        <li
          className={context.tabState === 3 ? "active__tabs" : ""}
          onClick={() => handleTabsChange(3)}
        >
          <i className="uil uil-video"></i> videos
        </li>
      </ul>
    </>
  );
};

export default SearchTabs;
