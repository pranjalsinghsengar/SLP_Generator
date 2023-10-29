import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";

const Header = () => {
  const { setGoDashboard, GoDashboard } = useContext(AppContext);

  return (
    <div className='w-full h-16 flex justify-center items-center'>
      <div className='w-11/12 flex justify-between'>
        <img src='' alt='sdfdf' />
        <div className='flex gap-8'>
          <p
            className='cursor-pointer text-green-800 font-bold'
            onClick={() => setGoDashboard(true)}
          >
            Dashboard
          </p>
          <Link
            to='/Employee'
            onClick={() => setGoDashboard(false)}
          >
            Employees
          </Link>
          <Link
            to='/Payrolls'
            onClick={() => setGoDashboard(false)}
          >
            Payrolls
          </Link>
          <Link
            to='/CreatePositions'
            onClick={() => setGoDashboard(false)}
          >
              Positions
          </Link>
          <Link
            to='/CreateDepartment'
            onClick={() => setGoDashboard(false)}
          >
            Department
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
