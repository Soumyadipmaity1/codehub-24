import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useForm } from 'react-hook-form';


export default function GroupCodeForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      // console.log('passkwy submitted');
      // console.log(data);
      // const email=data.email;
      // const password=data.password;
      // console.log(email)
      // console.log(password)
      // dispatch(login(email, password, navigate))
    };

    return(
        <div className='m-4 mx-auto'>
        <form
          className="flex flex-col w-full px-10"
          onSubmit={handleSubmit(onSubmit)}
        >
        <div className="flex">
          <div className="mb-2 bg-white flex rounded-lg items-center">
            <i className="bx bx-lock-alt text-2xl text-gray-800 py-2 px-2 "></i>
            <input
              type="password"
              {...register("password", {
                required: "Group Code is required",
                minLength: { value: 4, message: "Group Code must be at least 4 characters long" },
                pattern: {
                  message: "Group Code must meet requirements",
                },
              })}
              placeholder="Password"
              className={`appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password && "border-red-500"}`}
            />
          </div>

          

          <div className="items-center text-center ">
            <button
              type="submit"
              className="w-24 text-white rounded-lg p-2 m-2 ml-4 font-bold  bg-[#C376FF]
 hover:bg-purple-800"
            >
              Enter
            </button>
          </div>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs italic mb-4">{errors.password.message}</p>
          )}
        </form>
      </div>
    );
}