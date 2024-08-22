import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Bunpou from "./pages/Bunpou";
import Choukai from "./pages/Choukai";
import Dokkai from "./pages/Dokkai";
import Goi from "./pages/Goi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/bunpou-hyougen" element={<Bunpou />}></Route>
        <Route path="/choukai" element={<Choukai />}></Route>
        <Route path="/dokkai" element={<Dokkai />}></Route>
        <Route path="/goi-kotoba" element={<Goi />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
