import React, { useContext, useState } from 'react'
import HeaderCreate from '../../components/HeaderCreate';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Create from '../../components/Create';
import { AppContext } from '../../Context';

const CreateDipartment = () => {
    const navigate = useNavigate();
    const [departmentName, setDepartmentName] = useState('');
    const { departments,setDepartments} = useContext(AppContext);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add the new department to the list
      setDepartments([...departments, departmentName]);
      // Reset the form input
      setDepartmentName('');
    };
  return (
    <div className='h-full'>
    <HeaderCreate 
        title='Create a New Department'
        // BTNtitle='Add Employee'
        // onBtnClick={() => navigate("/CreateEmployee")}
        className='border-b pb-5'
    />
    <div className='relative h-full '>

    <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center w-1/2 h-full'>
      <div>
        {/* <label></label> */}
        <Input
          type="text"
          placeholder='Department Name'
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          className="border-b h-full"
        />
      </div>
      <div className='flex justify-center'>
            <button type='submit' className='mt-10'>
              <Create BTNtitle='Add Department' CreateNew_ClassName="text-6xl" />
            </button>
          </div>
    </form>
    <div className='pb-10 border rounded-xl border-green-700 p-5 absolute right-0 top-10 bottom-10  '  >

    <h2 className='text-4xl'>List of Departments</h2>
    <ul className='overflow-auto h-full'>
      {departments.map((department, index) => (
        <li className='text-green-800 border-b p-6 text-xl' key={index}>{department}</li>
      ))}
    </ul>
</div>

</div>
  </div>
  )
}

export default CreateDipartment