import React from "react";

const Create = ({ onBtnClick, BTNtitle, className,style }) => {
  return (
    <div className="flex">
      <div
        onClick={onBtnClick}
        style={style}
        className={`bg-green-700 rounded-md px-5 py-2 text-white cursor-pointer ${className}`}
      >
        {BTNtitle}
      </div>
    </div>
  );
};

export default Create;
