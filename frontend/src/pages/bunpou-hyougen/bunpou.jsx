import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "/src/components/Navbar.jsx";
import BunpouTest from "./BunpouTest";
import "/src/index.css";
import "/src/App.css";

ReactDOM.createRoot(document.getElementById("bunpou")).render(
  <>
    <Navbar />
    <BunpouTest />
    <hr />
    <div className="bg-tartiary flex items-center justify-center fixed inset-x-0 bottom-0">
      <p className="text-primary">@Izumi Indonesia 2024. All rights reserved.</p>
    </div>
  </>
);
