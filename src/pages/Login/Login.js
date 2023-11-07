import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();

  return (
    <div className='md:flex p-10 h-screen items-center'>
      <div className='w-full h-full'>
        {" "}
        <img
          src='/vitric-logo.png'
          alt='sdfdf'
          className='min-w-1/6 max-w-xs max-h-full'
        />
        <div></div>
      </div>
      <div className='md:w-1/3 h-auto flex justify-center md:mr-28 pt-32 bg-green-700 py-32 rounded-full '>
        <div className='flex flex-col gap-4 md:w-1/3  h-auto justify-between items-center'>
          <h1 className='text-white text-4xl font-bold'>Sign In</h1>
          <div className='h-auto'>
            <Input
              placeholder='Email'
              className='border-b'
              style={{ fontSize: 20 }}
            />
            <Input
              placeholder='Password'
              className='border-b'
              style={{ fontSize: 20 }}
            />
            <div className='flex justify-end'>
              <h1 className='text-white'>Forgot Password ?</h1>
            </div>
            <div className='flex justify-center mt-10'>
              <button
                className='text-green-700 font-bold bg-white px-7 py-3 rounded-xl'
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </div>
            <p className='text-center text-white font-semibold mt-5 mb-5'>or</p>
            <div className='flex justify-center'>
              <div
                className=' bg-white rounded-md p-2 cursor-pointer flex items-center gap-2'
                // onClick={googleLogin}
              >
                <img className='w-7 h-7' src='/Google.png' alt='' />
                Sign In with google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const Input = styled.input`
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 10px;
  margin: 10px 0;
  outline: none;
  background: transparent;
  color: white;
`;
