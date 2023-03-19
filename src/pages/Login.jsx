import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="signUp">
      <div className="backdrop-blur-md w-max form flex items-center justify-center flex-col gap-10 rounded-lg p-10">
        <div className="flex items-end gap-1">
          <h1 className="text-3xl font-extrabold text-white">
            Welcome Back Mate !
          </h1>
        </div>
        <form action="#" className="flex flex-col gap-6">
          <div className="h-12 overflow-hidden inputDiv w-[22rem]">
            <input
              type="text"
              placeholder="Contact number*"
              className="w-full h-full bg-transparent px-2 text-white"
            />
          </div>

          <div className="h-12 overflow-hidden inputDiv w-[22rem]">
            <input
              type="password"
              placeholder="Password*"
              className="w-full h-full bg-transparent px-2 text-white"
            />
          </div>
          <div className="w-full h-12 bg-red-700 cursor-pointer rounded-md overflow-hidden hover:bg-red-800 shadow-inner shadow-red-800">
            <input
              type="button"
              value="Login"
              className="h-full w-full uppercase text-white font-semibold tracking-wider cursor-pointer"
            />
          </div>
          <div className="w-full h-12 bg-blue-600 cursor-pointer rounded-md overflow-hidden hover:bg-blue-800 shadow-inner shadow-blue-800">
            <input
              type="submit"
              value="Request OTP"
              className="w-full h-full text-white uppercase tracking-wider font-semibold"
            />
          </div>
          <div className="w-full text-center text-white">
            <span className="font-normal">Don't have an account? </span>
            <Link
              to="/register"
              className="font-normal text-yellow-300 cursor-pointer hover:text-yellow-600"
            >
              Register Now
            </Link>
          </div>
          <div className="w-full text-center text-slate-100 cursor-pointer hover:text-sky-300">
            <span>Forgot Password ?</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
