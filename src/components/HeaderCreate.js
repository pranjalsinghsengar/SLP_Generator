import React from "react";
import Create from "./Create";

const HeaderCreate = ({
  title,
  BTNtitle,
  onBtnClick,
  className,
  BTNtitle2,
  onBtnClick2,
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <p className='text-3xl'>{title}</p>
      <div className="flex gap-4">
        {BTNtitle && <Create BTNtitle={BTNtitle} onBtnClick={onBtnClick} />}
        {BTNtitle2 && <Create BTNtitle={BTNtitle2} onBtnClick={onBtnClick2} />}
      </div>
    </div>
  );
};

export default HeaderCreate;
