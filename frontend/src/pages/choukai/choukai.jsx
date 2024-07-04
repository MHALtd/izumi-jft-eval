import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "/src/components/Navbar.jsx";
import ChoukaiTest from "./ChoukaiTest";
import "/src/index.css";
import "/src/App.css";

ReactDOM.createRoot(document.getElementById("choukai")).render(
  <>
    <Navbar />
    <ChoukaiTest />
    <hr />
    <div className="bg-tartiary flex items-center justify-center fixed inset-x-0 bottom-0">
      <p className="text-primary">@Izumi Indonesia 2024. All rights reserved.</p>
    </div>
  </>
);
