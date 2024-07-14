import React from "react";
import Container from "../layouts/container";
import aboutcompan from "../../assets/aboutcompan.png";

const Aboutcompany = () => {
  return (
    <>
      <div className="bg-[#F0F0F0] w-[1920px] h-[633px]">
        <div className="max-w-container mx-auto">
          <div className="flex text-center">
            <div className="bg-[#F40404] w-[413px] mt-[136px] mb-[136px] ml-[390px]">
              <h1 className="w-[262px] text-white text-center mt-[100px] mb-[99px] h-[162px] mr-[77px]">
                Learn more <br /> about ourcompany
              </h1>
            </div>
            <div>
              <img
                src={aboutcompan}
                alt=""
                className="mt-[136px] mb-[136px] mr-[391px] w-[726px] h-[361px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutcompany;
