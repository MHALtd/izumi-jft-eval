import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else if (result.data === "Password incorrect") {
          alert("Password Salah");
        } else {
          alert("Akun tidak ditemukan");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-tartiary hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="src/assets/banner.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="bg-primary w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100 text-pale">
          <div className="grid justify-center items-center">
            <img src="src/assets/logo.png" className="w-40" />
          </div>

          <h1 className="text-xl d:text-2xl font-bold leading-tight mt-12">Masuk dengan akun Anda</h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan Email"
                autoComplete="off"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan Password"
                name="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              Masuk
            </button>
          </form>
          <p className="mt-8">
            Belum punya akun?
            <span>
              <Link to="/register" className="text-tartiary hover:text-blue-700 font-semibold">
                Buat Akun
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
