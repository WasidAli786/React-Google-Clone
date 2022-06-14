import React, { useState } from "react";
import Footer from "./Container/Footer";
import Navbar from "./Container/Navbar";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
