import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/LiftSafe-Logo.png";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <div className="flex min-h-[calc(100vh-80px)] justify-center items-center px-4">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-45">
          <div className="flex flex-col items-center mb-12">
            <img src={navLogo} alt="LiftSafe Logo" className="h-12 mb-6" />
            <h1 className="text-5xl font-bold text-teal text-center">
              Welcome Back!
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-6 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-full bg-gray-100 py-5 pl-14 pr-4
                  focus:outline-none focus:ring-2 focus:ring-teal text-lg"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-1/2 left-6 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-full bg-gray-100 py-5 pl-14 pr-14
                  focus:outline-none focus:ring-2 focus:ring-teal text-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-6 -translate-y-1/2
                  text-gray-400 hover:text-teal text-lg"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="flex items-center justify-between text-lg">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="accent-teal w-5 h-5"
                />
                Remember me
              </label>

              <Link to="/forgot-password" className="text-teal font-semibold">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-6 bg-teal text-white font-bold tracking-wider
                py-5 text-xl rounded-full hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-lg mt-10 text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-teal font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
