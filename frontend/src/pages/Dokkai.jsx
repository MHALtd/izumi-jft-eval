import React from "react";
import Navbar from "../components/Navbar.jsx";
import DokkaiTest from "../components/DokkaiTest";
import "../index.css";
import "../App.css";

const Dokkai = () => {
  return (
    <>
      <Navbar />
      <DokkaiTest />
      <hr />
      <div className="bg-tartiary flex items-center justify-center fixed inset-x-0 bottom-0">
        <p className="text-primary">@MHALtd, 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Dokkai;
