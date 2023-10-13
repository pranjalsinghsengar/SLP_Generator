import React from "react";
import Create from "../components/Create";
import { useNavigate } from "react-router-dom";

const Payrolls = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Payrolls</div>
      <Create onCreate={() => navigate("/CreatePayrolls")} />
    </>
  );
};

export default Payrolls;
