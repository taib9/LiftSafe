import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { useState } from "react";
import React from "react";
import heroImg from "../assets/Landing-Hero.png";
import navLogo from "../assets/LiftSafe-Logo.png"
import LandingCard from "../components/LandingCard";

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
      <div className="container mx-auto mt-8 flex flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-center sm:text-center lg:items-start lg:text-left">
          <h1 className="text-teal leading-tight text-4xl sm:text-5xl lg:text-[5rem]">
            <span className="font-bold">Protect</span> Your body.<br></br>
            <span className="font-bold">Elevate</span> Your Performance
          </h1>
          <p className="my-8 text-xl sm:text-2xl text-center lg:text-lef">
            Join us in protecting your body and elevating your performance
            through prevention and strengthening.
          </p>
          <a
            href=""
            className="bg-teal font-bold tracking-wider text-white px-12 py-2 items-center flex rounded-full" 
          >
            Get Started
          </a>
        </div>
        <img src={heroImg} className="w-full max-w-sm sm:max-w-md lg:max-w-xl"/>
      </div>
      <div className="bg-teal pb-8">
      <div className="flex gap-8 container mx-auto mt-[8rem]">
        <LandingCard />
        <LandingCard />
        <LandingCard />
      </div>
      </div>
    </>
  );
};

export default Landing;
