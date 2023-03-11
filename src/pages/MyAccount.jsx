import React from "react";
import MainNav from "../components/MainNav";
const MyAccount = () => {
  return (
    <>
      <section>
        <div>
          <MainNav />
        </div>
        <div className="h-72 bg-page-head bg-center bg-cover w-full flex items-center px-10">
          <h1 className="font-extrabold text-white text-6xl font-roboto tracking-wide uppercase">
            My Account
          </h1>
        </div>
      </section>
      <section className="flex items-center gap-4 p-20 bg-slate-50">
        <div className="flex-[0.3] flex flex-col gap-4">
          <div className="flex items-center p-4 gap-2 bg-white shadow-md">
            <img src="/images/profile-pic.svg" alt="profile pic" />
            <p className="flex flex-col gap-1">
              <span className="text-xs">Hello,</span>
              <span className="text-red-600 font-semibold text-base">
                Rajkumar Kalita
              </span>
            </p>
          </div>
          <div className="bg-white shadow-md">
            <div className="uppercase text-gray-500 p-3 font-semibold border-b-[1px]">
              My orders
            </div>
            <div className="border-b-[1px]">
              <div className="uppercase text-gray-500 p-3 font-semibold border-b-[1px]">
                Account settings
              </div>
              <div className="flex flex-col py-4">
                <span className="hover:bg-blue-50 cursor-pointer px-10 py-2 hover:text-blue-800">
                  Personal Information
                </span>
                <span className="hover:bg-blue-50 cursor-pointer px-10 py-2 hover:text-blue-800">
                  Manage Address
                </span>
              </div>
            </div>
            <div className="border-b-[1px]">
              <div className="uppercase text-gray-500 p-3 font-semibold border-b-[1px]">
                My sutff
              </div>
              <div className="flex flex-col py-4">
                <span className="hover:bg-blue-50 cursor-pointer px-10 py-2 hover:text-blue-800">
                  My coupons
                </span>
                <span className="hover:bg-blue-50 cursor-pointer px-10 py-2 hover:text-blue-800">
                  My reviews & ratings
                </span>
                <span className="hover:bg-blue-50 cursor-pointer px-10 py-2 hover:text-blue-800">
                  My favourite
                </span>
                <span className="hover:bg-blue-50 cursor-pointer px-10 py-2 hover:text-blue-800">
                  My cart
                </span>
              </div>
            </div>
            <div className="uppercase text-gray-500 p-3 font-semibold border-b-[1px]">
              Logout
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-md"></div>
      </section>
    </>
  );
};

export default MyAccount;
