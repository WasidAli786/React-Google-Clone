import React from "react";
import { Spin } from "antd";

const Loading = () => {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center">
        <Spin size="large" />
      </div>
    </>
  );
};

export default Loading;
