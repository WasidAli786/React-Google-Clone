import React, { useState } from "react";
import Context from "./ContextHook";

const ContextState = (props) => {
  const [tabState, setTabState] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <Context.Provider
        value={{ tabState, setTabState, darkTheme, setDarkTheme }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};

export default ContextState;
