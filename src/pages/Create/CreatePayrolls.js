import React from "react";
import Input from "../../components/Input";

const CreatePayrolls = () => {
    const handleInputChange = () => {
        
    }
  return (
    <div>
      <Input
        type='text'
        name='gender'
        placeholder='Gender'
        value={{}}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CreatePayrolls;
