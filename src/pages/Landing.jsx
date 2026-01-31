import reactLogo from "../assets/react.svg";
import { useState } from "react";
import React from "react";
import heroImg from "../assets/Landing-Hero.png";
import navLogo from "../assets/LiftSafe-Logo.png";
import LandingCard from "../components/LandingCard";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

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
          <h1 className="text-teal leading-tight text-center text-4xl sm:text-5xl lg:text-left lg:text-[5rem]">
            <span className="font-bold">Protect</span> Your body.<br></br>
            <span className="font-bold">Elevate</span> Your Performance
          </h1>
          <p className="my-8 text-xl sm:text-2xl text-center lg:text-left text-balance">
            Join us in protecting your body and elevating your performance
            through prevention and strengthening.
          </p>
          <Link
            to="/pain-selection"
            className="bg-teal font-bold tracking-wider text-white px-12 py-2 items-center flex rounded-full"
          >
            Get Started
          </Link>
        </div>
        <img
          src={heroImg}
          className="w-full max-w-sm sm:max-w-md lg:max-w-xl"
        />
      </div>
      <div className="bg-teal pb-8">
        <div className="container px-4 mx-auto mt-16 flex flex-col gap-8 py-16 lg:py-0 items-stretch lg:mt-32 lg:grid lg:grid-cols-3 ">
          <LandingCard
            title="Pain Selection"
            description="Select which body parts are troubling for you. This will help tailor the app to work best for you."
            Icon={FaRegHeart}
          />
          <LandingCard
            title="Risk Assessment"
            description="Take a quick assessment to gauge what can be possible risks for you in your workouts."
            Icon={FaRegFlag}
          />
          <LandingCard
            title="Prevention & Strengthening"
            description="View a catalog of tips and exercises to prevent injuries and strengthen under compensated body parts."
            Icon={FaArrowUp}
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
