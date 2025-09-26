import React from "react";

const Loading = () => {
  return (
    <div className="ssc ssc-card md:max-w-[70rem] m-auto">
      <div className="ssc-wrapper">
        <div className="flex align-start">
          <div className="mr w-20 h-[30rem]">
            <div className="ssc-square mb w-[12.5rem]"></div>
          </div>
          <div className="w-30">
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
