"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";

type FormData = {
  email: string;
};

const ForgotPasswordPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Forgot Password Request:", data);
    // API call to send a password reset email
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="bg-white shadow-md rounded-lg flex w-[1200px] overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-[#0E1629] p-10 flex flex-col justify-between rounded-l-lg">
          <h2 className="text-white text-xl font-semibold">LegalAI-Pak</h2>
          <div className="text-left mb-6">
            <h2 className="text-white text-xl font-bold leading-tight">
              Recover your <br />
              <span className="text-yellow-600">Account</span> easily
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Enter your email, and we'll send you a link to reset your password.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-14 flex flex-col justify-center">
          <div className="flex items-center justify-center mb-6">
            <Image src={logo} alt="LegalAI-Pak Logo" width={30} height={30} />
            <span className="ml-2 text-xl font-semibold text-gray-900">LegalAI-Pak</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 text-center">Forgot Password</h2>
          <p className="text-gray-500 text-base mt-2 mb-6 text-center">
            Enter your email to receive password reset instructions.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="block text-gray-700 text-base font-medium mb-2">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg bg-gray-200 focus:outline-none text-gray-900"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#0E1629] text-white font-medium py-3 rounded-lg hover:bg-yellow-600 text-lg transition-colors duration-300"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-base text-gray-500 mt-6 text-center">
            Remembered your password?{" "}
            <Link href="/auth/signin" className="text-[#0E1629] font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

