import React from "react";
import styled from "styled-components";

const DashCardContainer = styled.div``;

const TextFont = styled.p`
  font-size: 3rem;
`;
const GreenTextContainer = styled(TextFont)`
  color: green;
`;
const RedTextContainer = styled(TextFont)`
  color: red;
`;

const DashCard = ({
  title,
  TotalCount,
  GreenText,
  RedText,
  OpenList,
  CreateNew,
}) => {
  return (
    <DashCardContainer className='flex flex-col gap-3 p-5 shadow-lg shadow-slate-400  rounded-xl'>
      <h1 className='uppercase font-semibold text-2xl  '>{title}</h1>
      <div className='flex flex-col gap-2 justify-between h-full'>
        <p className='pl-3 text-sm capitalize text-gray-400'>
          Total No of {title} : {title === "Employees" && TotalCount}
        </p>
        {/* ================================================================================================== */}

        <div className='w-60 flex justify-center items-center'>
          {/* ========EMPLOYEE============EMPLOYEE===============EMPLOYEE==========EMPLOYEE================================EMPLOYEE===================== */}
          {title === "Employees" && (
            <div className='px-4 w-11/12 border rounded-xl flex justify-between items-center'>
              <div className='flex flex-col items-center'>
                <p className='text-gray-400 text-sm'>Active</p>
                <GreenTextContainer>{GreenText}</GreenTextContainer>
              </div>
              <div className='border h-10'></div>
              <div className='flex flex-col items-center'>
                <p className='text-gray-400 text-sm'>Non Active</p>
                <RedTextContainer>{RedText}</RedTextContainer>
              </div>
            </div>
          )}
          {/* ========PAYROLLS============PAYROLLS===============PAYROLLS==========PAYROLLS================================PAYROLLS===================== */}
          {title === "Payrolls" && (
            <div className='flex text-4xl gap-3'>
              <RedTextContainer>{RedText}</RedTextContainer> /
              <GreenTextContainer>{GreenText}</GreenTextContainer>
            </div>
          )}
          {/* ========POSITIONS============POSITIONS===============POSITIONS==========POSITIONS================================POSITIONS===================== */}
          {title === "Positions" && (
            <div className='flex text-4xl gap-3'>
              <GreenTextContainer>{GreenText}</GreenTextContainer>
            </div>
          )}
          {/* ========DEPARTMENT============DEPARTMENT===============DEPARTMENT==========DEPARTMENT================================DEPARTMENT===================== */}
          {title === "Department" && (
            <div className='flex text-4xl gap-3'>
              <GreenTextContainer>{GreenText}</GreenTextContainer>
            </div>
          )}


        </div>

        {/* ===================================================================================================== */}
        {/* buttons */}
        <div className='flex justify-between'>
          <div
            className='px-14 py-3 rounded-lg bg-green-800 text-white cursor-pointer'
            onClick={OpenList}
          >
            Open List{" "}
          </div>
          <div
            className='flex px-4 items-center text-3xl rounded-lg bg-green-800 text-white cursor-pointer'
            onClick={CreateNew}
          >
            +
          </div>
        </div>
      </div>
    </DashCardContainer>
  );
};

export default DashCard;
