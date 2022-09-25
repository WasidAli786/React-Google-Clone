import React, { lazy, Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import MainLoading from "./Components/Loading/MainLoading";
import Context from "./Container/Hooks/ContextHook";

const Home = lazy(() => import("./Container/Home/Home"));
const SearchMain = lazy(() => import("./Container/Home/SearchMain"));

const App = () => {
  const context = useContext(Context);
  return (
    <>
      <Suspense fallback={<MainLoading />}>
        <div className={context.darkTheme ? "dark" : ""}>
          <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchMain />} />
            </Routes>
            <button
              className="bg-white rounded-full py-2 px-3 space-x-4 fixed bottom-4 right-4 shadow-md hover:shadow-lg capitalize"
              onClick={() => context.setDarkTheme(!context.darkTheme)}
            >
              {context.darkTheme ? (
                <i className="uil uil-moon text-2xl"></i>
              ) : (
                <i className="uil uil-brightness-low text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default App;
