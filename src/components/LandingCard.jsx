import React from "react";
import { FaRegHeart } from "react-icons/fa";

const LandingCard = () => {
  return (
    <div className="-mt-[4rem]">
      <div className="p-8 bg-light-gray rounded-2xl flex flex-col items-center relative mt-[25px]">
        <div className="bg-[#135E69] w-[50px] h-[50px] flex items-center justify-center rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaRegHeart className=" text-white text-2xl" />
        </div>
        <h3 className="text-teal text-2xl text-center font-bold my-4">
          Pain Selection
        </h3>
        <p className="text-black text-center text-lg">
          Select which body parts are troubling for you. This will help tailor
          the app to work best for you.
        </p>
      </div>
    </div>
  );
};

export default LandingCard;
