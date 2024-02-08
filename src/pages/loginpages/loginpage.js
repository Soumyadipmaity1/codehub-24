
import logo from "./companylogo.svg";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../services/operations/authAPI"

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Form submitted');
    console.log(data);
    const email=data.email;
    const password=data.password;
    console.log(email)
    console.log(password)

      dispatch(login(email, password, navigate))
  };
  

  const passwordRequirements = {
    required: true,
    minLength: 4,
  };

  const password = watch("password");

  return (
    <div className="flex h-screen">
      <div className="flex items-center w-2/3 bg-cover background">
        <div className="p-20">
          <img className="w-[470px] my-8 ml-[73px]" src={logo} alt="Company Logo" />
          <div className="text-white">
            <h2 className="font-semibold text-2xl text-center">
              A pioneering tech company driven by innovation, excellence, and a passion for creating
              cutting-edge solutions
            </h2>
          </div>
        </div>
      </div>
      <div className="w-5/12 bg-black px-16 py-12">
        <div className="pb-5 px-10 pt-16">
          <h4 className="text-2xl text-gray-300 font-semibold">Login</h4>
        </div>
        <div className="w-24 ml-10 h-2 border-b-4 mb-10 border-purple-400"></div>

        <form
          className="flex flex-col w-full px-10"
          onSubmit={handleSubmit(onSubmit)}
          
        >
          <div className="mb-4 bg-white rounded-lg flex items-center">
            <i className="bx bx-user text-2xl py-2 px-2 text-gray-800"></i>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="email"
              className={`appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email && "border-red-500"
              }`}
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-xs italic mb-4">
              email is required
            </p>
          )}

          <div className="mb-2 bg-white flex rounded-lg items-center">
            <i className="bx bx-lock-alt text-2xl text-gray-800 py-2 px-2 "></i>
            <input
              type="password"
              {...register("password", passwordRequirements)}
              placeholder="Password"
              className={`appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password && "border-red-500"
              }`}
            />
          </div>

          {errors.password && (
            <p className="text-red-500 text-xs italic mb-4">
              {errors.password.type === "required"
                ? "Password is required"
                : errors.password.type === "minLength"
                ? "Password must be at least 4 characters long"
                : ""}
            </p>
          )}
          <div className="items-center text-center pt-4">
            <button
              type="submit"
              className="w-36 text-white rounded-lg p-2 mt-4 font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 hover:bg-purple-800"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
