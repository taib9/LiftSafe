import React from "react";

const LandingCard = ({ title, description, Icon }) => {
  return (
    <div className="mt-0 lg:-mt-[4rem]">
      <div className="p-8 bg-light-gray rounded-2xl flex flex-col items-center relative mt-[25px]">
        <div className="bg-[#135E69] w-[50px] h-[50px] flex items-center justify-center rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {Icon ? <Icon className="text-white text-2xl" /> : null}
        </div>
        <h3 className="text-teal text-2xl text-center font-bold my-4">
          {title}
        </h3>
        <p className="text-black text-center text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LandingCard;
