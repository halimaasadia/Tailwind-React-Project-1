import React, { Children } from "react";

const container = ({ className, children }) => {
  return (
    <div className={`max-w-container mx-auto px-[10px] ${className}`}>
      {children}
    </div>
  );
};

export default container;
