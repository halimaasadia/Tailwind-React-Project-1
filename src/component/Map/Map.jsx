import React from "react";
import map from "../../assets/Map.png";

const Map = () => {

  return (
    <>
      <div className="max-w-container mx-auto">
        <div>
          <img src={map} alt="" />
        </div>
        <div>
          <div className="bg-primary pt-[46px] pb-[45px]">
            <div className="flex">
              <h3 className="font-popins text-white text-4xl font-bold mr-[70px] ml-[80px] w-[959px] h-[54px]">
                Want to join as member branch in your area?
              </h3>
              <a
                        href=""
                        className="font-popins font-semibold text-base text-white border-2 py-3.5 px-8 mr-[150px]"
                      >
                        CONTACT
                      </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
