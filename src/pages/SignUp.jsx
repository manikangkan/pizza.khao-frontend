import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="signUp">
      <div className="backdrop-blur-md w-max form flex items-center justify-center flex-col gap-10 rounded-lg p-10">
        <div className="flex items-end gap-1">
          <h1 className="text-3xl font-extrabold text-white">
            Welcome to Don Peppe
          </h1>
          <div className="h-3 w-3 bg-red-600 rounded-full"></div>
        </div>
        <form action="#" className="flex flex-col gap-6">
          <div className="w-full h-12 overflow-hidden inputDiv">
            <input
              type="text"
              placeholder="First name*"
              className="w-full h-full bg-transparent px-2 text-white"
            />
          </div>
          <div className="w-full h-12 overflow-hidden inputDiv">
            <input
              type="text"
              placeholder="Last name*"
              className="w-full h-full bg-transparent px-2 text-white"
            />
          </div>
          <div className="flex items-center gap-6 w-full">
            <div className="w-full h-12 overflow-hidden inputDiv">
              <input
                type="number"
                placeholder="Contact number*"
                className="w-full h-full bg-transparent px-2 text-white"
              />
            </div>
            <div className="w-full h-12 overflow-hidden inputDiv">
              <input
                type="password"
                placeholder="Password*"
                className="w-full h-full bg-transparent px-2 text-white"
              />
            </div>
          </div>

          <div className="w-full h-12 overflow-hidden inputDiv">
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full h-full bg-transparent px-2 text-white"
            />
          </div>

          <div className="w-full h-12 bg-red-700 cursor-pointer rounded-md overflow-hidden hover:bg-red-800 shadow-inner shadow-red-800">
            <input
              type="button"
              value="Submit"
              className="h-full w-full uppercase text-white font-semibold tracking-wider cursor-pointer"
            />
          </div>
          <div className="w-full text-center text-white">
            <span className="font-normal">Already have an account? </span>
            <Link
              to="/login"
              className="font-normal text-yellow-300 cursor-pointer hover:text-yellow-600"
            >
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
