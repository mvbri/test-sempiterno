import React from "react";

const Loading = () => {
  return (
    <div className="ssc ssc-card md:max-w-[70rem] m-auto mt-8 p-3 md:p-4">
      <div className="ssc-line mb w-20"></div>
      <div className="ssc-wrapper">
        <div className="flex flex-col md:flex-row align-start">
          <div className="lg:mr w-20 h-[30rem] m-auto">
            <div className="ssc-square mb w-[12.5rem] m-auto"></div>
          </div>
          <div className="w-30 md:ml-8 m-auto">
            <div className="ssc-line mb w-60"></div>
            <div className="ssc-head-line mb"></div>
            <div className="ssc-line mb w-80"></div>
            <div className="ssc-line mb w-40"></div>
            <div className="ssc-line mb w-30"></div>
            <div className="ssc-line mb w-60"></div>
            <div className="ssc-line mb"></div>
            <div className="ssc-line mb w-70"></div>
            <div className="ssc-line mb w-40"></div>
            <div className="ssc-line mb w-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
