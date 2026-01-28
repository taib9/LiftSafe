import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { useState } from "react";
import React from "react";
import heroImg from "../assets/Landing-Hero.png";
import navLogo from "../assets/LiftSafe-Logo.png"

const Landing = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center gap-10 py-4 lg:flex-row lg:justify-between">
        <img src={navLogo} />
        <div className="flex items-center gap-4">
          <a href="" className="text-teal font-bold">
            Login
          </a>
          <a
            href=""
            className="bg-teal font-bold tracking-wider text-white px-8 py-2 items-center flex rounded-full"
          >
            Sign Up
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:justify-betwee">
        <div className="flex flex-col items-start sm:text-center sm:items-center lg:text-left">
          <h1 className="text-teal leading-tight text-4xl sm:text-5xl lg:text-[5rem]">
            <span className="font-bold">Protect</span> Your body.<br></br>
            <span className="font-bold">Elevate</span> Your Performance
          </h1>
          <p className="text-2xl my-8">
            Join us in protecting your body and elevating your performance
            through prevention and strengthening.
          </p>
          <a
            href=""
            className="bg-teal font-bold tracking-wider text-white px-12 py-2 items-center flex rounded-full mx-auto" 
          >
            Get Started
          </a>
        </div>
        <img src={heroImg} />
      </div>
    </>
  );
};

export default Landing;
