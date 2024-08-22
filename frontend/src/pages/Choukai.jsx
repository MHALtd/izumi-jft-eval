import React from "react";
import Navbar from "../components/Navbar.jsx";
import ChoukaiTest from "../components/ChoukaiTest";
import "../index.css";
import "../App.css";

const Choukai = () => {
  return (
    <>
      <Navbar />
      <ChoukaiTest />
      <hr />
      <div className="bg-tartiary flex items-center justify-center fixed inset-x-0 bottom-0">
        <p className="text-primary">@Izumi Indonesia 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Choukai;
