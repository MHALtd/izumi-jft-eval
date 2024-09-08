import React from "react";
import Navbar from "../components/Navbar.jsx";
import BunpouTest from "../components/BunpouTest";
import "../index.css";
import "../App.css";

const Bunpou = () => {
  return (
    <>
      <Navbar />
      <BunpouTest />
      <hr />
      <div className="bg-tartiary flex items-center justify-center fixed inset-x-0 bottom-0">
        <p className="text-primary">@MHALtd, 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Bunpou;
