"use client";
import React, { useState } from "react";
import { setLogin } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AuthType } from "../types/authTypes";
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(setLogin(loginForm));
    return console.log(loginForm, "loginForm data");
  }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center flex-col e-card w-full md:w-[50%] h-[80%]">
        <div className="py-3">
          <h1>Login</h1>
        </div>
        <form className="max-w-sm mx-auto" onSubmit={submitHandler}>
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className=" border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium  dark:text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className=" border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
