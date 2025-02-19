"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

type FormData = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="bg-white shadow-md rounded-lg flex w-[1200px] overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-[#0E1629] p-10 flex flex-col justify-between rounded-l-lg">
          <h2 className="text-white text-xl font-semibold">LegalAI-Pak</h2>
          <div className="text-left mb-6">
            <h2 className="text-white text-xl font-bold leading-tight">
              Get Personalized <br/><span className="text-yellow-600">Legal</span> Advice today
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Simplifying legal access in Pakistan with cutting-edge AI technology.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-14 flex flex-col justify-center">
          <div className="flex items-center justify-center mb-6">
            <Image src={logo} alt="LegalAI-Pak Logo" width={30} height={30} />
            <span className="ml-2 text-xl font-semibold text-gray-900">LegalAI-Pak</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 text-center">Welcome Back</h2>
          <p className="text-gray-500 text-base mt-2 mb-6 text-center">
            Enter your email and password to access your account
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

            <div className="mb-6 relative">
              <label className="block text-gray-700 text-base font-medium mb-2">Password</label>
              <input
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg bg-gray-200 focus:outline-none text-gray-900 "
              />
              <button
                type="button"
                className="absolute top-11 right-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
              {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
            </div>

            <div className="flex justify-between text-sm mb-6">
              <Link href="/auth/forgot-password" className="text-gray-500">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0E1629] text-white font-medium py-3 rounded-lg hover:bg-yellow-600 text-lg transition-colors duration-300"
            >
              Sign in
            </button>
          </form>

          <p className="text-base text-gray-500 mt-6 text-center">
            Don’t have an account? <Link href="/auth/signup" className="text-[#0E1629] font-medium">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
