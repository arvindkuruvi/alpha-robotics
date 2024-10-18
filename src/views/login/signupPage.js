import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ErrorAlert, SuccessAlert } from "../../components/alert/Alert";
import { LOGIN_URL, SIGN_UP_URL } from "../../constants/Constants";
import axios from "axios";

export default function SignupPage() {
  let [passWordType, setPasswordType] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");
  let [successMessage, setSuccessMessage] = useState("");

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      inputs.username !== "" &&
      inputs.password !== "" &&
      inputs.phone_number !== "" &&
      inputs.email !== ""
    ) {
      console.log("inpts", inputs);

      try {
        const result = await axios.post(SIGN_UP_URL, inputs);
        if (result.status.toString().startsWith("2")) {
          setInputs({
            username: "",
            email: "",
            phone_number: "",
            password: "",
          });

          let data = result.data;
          setSuccessMessage(data.message);
        }
      } catch (err) {
        let errors = [];

        let errorData = err.response.data;

        if (errorData.username) {
          console.debug("adding username errors");
          errors.push(...errorData.username);
        }

        if (errorData.email) {
          console.debug("adding email errors");
          errors.push(...errorData.email);
        }

        if (errorData.phone_number) {
          console.debug("adding phone_number errors");
          errors.push(...errorData.phone_number);
        }

        const joinedString = errors.join(" \n");

        setErrorMessage(joinedString);
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
    <div className="flex flex-col md:flex-row h-screen bg-cover bg-center bg-no-repeat text-white gradient-bg">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 max-sm:mt-14">
        <div className="text-2xl sm:text-4xl md:text-5xl">
          Get started <br /> with{" "}
          <span className="text-green-500 font-bold">Alpha Robotics LLP</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0">
        <div className=" p-8 md:p-10 rounded-3xl shadow-lg border w-[30rem]">
          <h1 className="text-2xl md:text-3xl  font-semibold text-center">
            Hey! Welcome <span className="wave-emoji">👋</span>
          </h1>
          <p className="text-gray-400 mb-8  text-center">
            Register your account to get started today..!
          </p>

          <div className="space-y-4">
            {errorMessage ? <ErrorAlert message={errorMessage} /> : null}
            {successMessage ? <SuccessAlert message={successMessage} /> : null}
            <div>
              <label
                className="block  mb-1 font-md text-left"
                htmlFor="username"
              >
                Username*
              </label>
              <input
                name="username"
                type="text"
                value={inputs.username}
                onChange={handleInput}
                className="w-full px-4 p-3 rounded-3xl border bg-transparent  outline-none "
                placeholder="Hariharan .S"
              />
            </div>
            <div>
              <label className="block  mb-1 font-md text-left" htmlFor="email">
                Email*
              </label>
              <input
                name="email"
                type="text"
                value={inputs.email}
                onChange={handleInput}
                className="w-full px-4 py-3 rounded-3xl border bg-transparent outline-none "
                placeholder="hariuxi.dsgn@gmail.com"
              />
            </div>
            <div>
              <label
                className="block  mb-1 font-md text-left"
                htmlFor="phone_number"
              >
                Phone Number*
              </label>
              <div className="flex rounded-3xl">
                <div className="flex items-center bg-gray-700 px-3 rounded-l-3xl">
                  <span className="">🇮🇳</span>
                </div>
                <input
                  name="phone_number"
                  type="text"
                  value={inputs.phone_number}
                  onChange={handleInput}
                  className="w-full px-4 py-3 rounded-r-3xl border bg-transparent outline-none  "
                  placeholder="97913 36435"
                />
              </div>
            </div>
            <div>
              <label
                className="block  mb-1 font-md text-left"
                htmlFor="password"
              >
                Password*
              </label>
              <div className="relative">
                <input
                  name="password"
                  value={inputs.password}
                  type={passWordType ? "password" : "text"}
                  onChange={handleInput}
                  className="w-full px-4 py-3 rounded-3xl border bg-transparent  outline-none "
                  placeholder="********"
                />
                <span
                  onClick={togglePasswordtype}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                >
                  👁️
                </span>
              </div>
            </div>
            <button
              onClick={handleSubmitEvent}
              className="w-full bg-green-500  py-2 rounded-3xl hover:bg-green-600 transition font-bold"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-400">Already have an account? </span>
            <Link to="/login" className="text-green-500 hover:underline">
              Log In
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
