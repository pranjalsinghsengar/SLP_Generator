import React from "react";

const Create = ({ onCreate }) => {
  return (
    <div>
      <div
        onClick={onCreate}
        className='bg-green-700 rounded-md px-5 py-2 text-white cursor-pointer'
      >
        Create
      </div>
    </div>
  );
};

export default Create;
