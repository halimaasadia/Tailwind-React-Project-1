import React from "react";
import blog1 from "../../assets/blog1.png";

const Blog = () => {
  return (
    <div className="bg-[#F0F0F0] pt-[110px] pb-[162px]">
        
      <div className="max-w-container mx-auto">
        <div className="flex justify-between">
          <div>
            <img src={blog1} alt="" />
          </div>
          <div className="relative">
            <img src={blog1} alt={blog1} />
            <div className="absolute top-0 left-0 bg-demo h-full w-full">
            <p className="mt-[75px] w-[249px] h-[180px] ml-[45px] mr-[45px] mb-[52px] font-bold font-pops text-white">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
            <a href="Read more" className="text-xs font-semi bold text-white font-popins pt-[10px] pb-[10px] pr-[22px] pl-[22px] ml-[45px] mr-[171px] mb-[55px]"></a>

            </div>
        
          </div>
          

          <div>
         
            <img src={blog1} alt="" />
          </div>
        </div>


        <div>
          <h3 className="text-[#000] text-right text-base font-bold">
            MORE FROM THE BLLOG
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blog;
