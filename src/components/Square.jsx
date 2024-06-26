import React from "react";

const Square = ({onClick, value}) => {
  return (
    <div className="h-[80px] w-[80px] flex justify-center items-center text-[30px] cursor-pointer border-2 border-[#484848]" onClick={onClick}>
      <h5 className={value == "X" ? "text-[#0000FF]" : "text-[#FF0000]"}>{value}</h5>
    </div>
  );
};

export default Square;
