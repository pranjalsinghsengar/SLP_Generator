import React from "react";
import Create from "./Create";

const HeaderCreate = ({ title, BTNtitle, onBtnClick, className }) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <p className='text-3xl'>{title}</p>
      {BTNtitle && <Create BTNtitle={BTNtitle} onBtnClick={onBtnClick} />}
    </div>
  );
};

export default HeaderCreate;
