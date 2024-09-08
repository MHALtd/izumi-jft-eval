import React from "react";
import Navbar from "../components/Navbar.jsx";
import GoiTest from "../components/GoiTest";
import "../index.css";
import "../App.css";

const Goi = () => {
  return (
    <>
      <Navbar />
      <GoiTest />
      <hr />
      <div className="bg-tartiary flex items-center justify-center fixed inset-x-0 bottom-0">
        <p className="text-primary">@MHALtd, 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Goi;
