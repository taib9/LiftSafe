import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../assets/LiftSafe-Logo.png";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      
      // redirect to pain selection
      navigate("/pain-selection");
      
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex min-h-[calc(100vh-80px)] justify-center items-center px-4">
        <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-45">
          <div className="flex flex-col items-center mb-12">
            <img src={navLogo} alt="LiftSafe Logo" className="h-12 mb-6" />
            <h1 className="text-5xl font-bold text-teal text-center">
              Create New Account
            </h1>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

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
                minLength={6}
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
              disabled={loading}
              className="mt-6 bg-teal text-white font-bold tracking-wider
                py-5 text-xl rounded-full hover:opacity-90 transition
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-lg mt-10 text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-teal font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;