import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { ErrorAlert } from "../../components/alert/Alert";
import { LOGIN_URL } from "../../constants/Constants";
import axios from "axios";

// import
export default function LoginPage() {
  let [passWordType, setPasswordType] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");

  const [inputs, setInputs] = useState({
    email_or_phone: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    console.log("====================================");
    console.log("inpts", inputs);
    console.log("====================================");

    if (inputs.email_or_phone !== "" && inputs.password !== "") {
      try {
        const result = await axios.post(LOGIN_URL, inputs);

        if (result.status.toString().startsWith("2")) {
          let data = result.data;

          auth.setToken(data);

          if (data.plan == null || data.plan == "") {
            navigate("/pricing", { replace: true });
          } else navigate("/dashboard", { replace: true });
        }
      } catch (err) {
        setErrorMessage(err.response.data.error);
      }
    } else {
      setErrorMessage("Please fill the below details");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordtype = () => {
    setPasswordType(!passWordType);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-cover bg-center bg-no-repeat text-white bg-black gradient-bg">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 max-sm:mt-14">
        <div className="text-2xl sm:text-4xl md:text-5xl">
          Get started <br /> with{" "}
          <span className="text-green-500 font-bold text-alphaGreen">
            Alpha Robotics LLP
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0">
        <div className=" p-8 md:p-10 rounded-3xl shadow-lg border w-[30rem]">
          <h1 className="text-2xl md:text-3xl  font-semibold text-center text-alphaWhite">
            Welcome Back <span className="wave-emoji">👋</span>
          </h1>
          <p className="text-alphaWhite mb-8  text-center">
            Login your account to get started..!
          </p>

          <div className="space-y-4 ">
            {errorMessage ? <ErrorAlert message={errorMessage} /> : null}
            <div>
              <label
                className="block  mb-3 font-md text-left text-alphaWhite"
                htmlFor="email_or_phone"
              >
                Email or phone*
              </label>
              <input
                type="text"
                name="email_or_phone"
                onChange={handleInput}
                className="w-full px-4 py-3 rounded-3xl border bg-transparent outline-none "
                placeholder="hariuxi.dsgn@gmail.com"
              />
            </div>
            <div>
              <label
                className="block  mb-2 font-md text-left text-alphaWhite"
                htmlFor="password"
              >
                Password*
              </label>
              <div className="relative">
                <input
                  name="password"
                  onChange={handleInput}
                  type={passWordType ? "password" : "text"}
                  className="w-full px-4 py-3 rounded-3xl border bg-transparent  outline-none "
                  placeholder="********"
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                  onClick={togglePasswordtype}
                >
                  👁️
                </span>
              </div>
            </div>
            <button
              onClick={handleSubmitEvent}
              className="w-full bg-alphaGreen text-alphaWhite border-alphaGreen  py-2 rounded-3xl transition font-bold"
            >
              Log in
            </button>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-400">Don’t have an account? </span>
            <Link to="/signup" className="text-green-500 hover:underline">
              Sign Up
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 space-x-4 ">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
      <img
        src="/logo.png"
        className="absolute top-5 sm:top-10 left-5 sm:left-10 w-14 sm:w-20"
      ></img>
      <div className="absolute flex justify-between bottom-10 left-10 w-[50rem]">
        <div>© 2024 alpha All Rights Reserved.</div>
        <div className="flex gap-4 text-black">
          <div className="bg-white rounded-full p-2">
            <FaInstagram />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaXTwitter />
          </div>
          <div className="bg-white rounded-full p-2">
            <FiFacebook />
          </div>
          <div className="bg-white rounded-full p-2">
            <TbBrandThreads />
          </div>
        </div>
      </div>
    </div>
  );
}
