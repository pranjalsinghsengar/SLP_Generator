import React, { useContext, useState } from "react";
import Create from "../../components/Create";
import Input from "../../components/Input";
import HeaderCreate from "../../components/HeaderCreate";
import { AppContext } from "../../Context";
import { useNavigate } from "react-router-dom";

const CreatePositions = () => {
  const navigate = useNavigate();
  const [positionName, setpositionName] = useState("");
  const { Positions, setPositions } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPositions([...Positions, positionName]);
    setpositionName("");
  };
  return (
    <div className=''>
      <HeaderCreate
        title='Create a New Department'
        BTNtitle='Add Employee'
        onBtnClick={() => navigate("/CreateEmployee")}
        className='border-b pb-5'
      />
      <div className='relative h-fit'>
        <form
          onSubmit={handleSubmit}
          className=' flex flex-col justify-center items-center w-1/2 h-96'
        >
          <div>
            <Input
              type='text'
              placeholder='Position Name'
              value={positionName}
              onChange={(e) => setpositionName(e.target.value)}
              className='border-b h-full'
            />
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='mt-10'>
              <Create BTNtitle='Add Position' />
            </button>
          </div>
        </form>
        <div className='pb-10 border rounded-xl max-h-96 overflow-hidden  border-green-700 p-5 absolute right-0 top-10  '>
          <h2 className='text-4xl'>List of Positions</h2>
          <ul className='h-96 overflow-y-auto'>
            {Positions.map((Position, index) => (
              <li className='text-green-800 border-b p-6 text-xl' key={index}>
                {Position}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreatePositions;
