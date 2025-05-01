"use client";
import React, { useState } from "react";
import { setUser } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AuthType } from "../types/authTypes";
const Signup = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }));
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(setUser(signUpForm));
  }
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="flex items-center flex-col e-card w-full md:w-[80%] h-auto">
        <div className="py-3">
          <h1>Sign-Up</h1>
        </div>
        <form
          className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full p-5"
          onSubmit={submitHandler}
          id="formId"
        >
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className=" border border-gray-300  text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="please enter your name"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className=" border border-gray-300   text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="please enter your email-id"
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
              className=" border border-gray-300   text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="please enter your password"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium  dark:text-white">
              City
            </label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              className=" border border-gray-300  text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="please enter your city"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-xl font-medium  dark:text-white">
              You Are
            </label>
            <select
              name="category"
              onChange={handleChange}
              className=" border bg-gray-900 border-gray-300   text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="player"> Player </option>
              <option value="owner"> Academy Owner </option>
            </select>
          </div>
        </form>
        <div className="flex justify-center w-full px-4 my-4">
          <button type="submit" className="btn" form="formId">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
