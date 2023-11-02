import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=''>
        <input placeholder='email' />
        <input placeholder='pass' />
        <button onClick={() => navigate("/main ")}>mkmo</button>
      </div>
    </div>
  );
};

export default Login;
