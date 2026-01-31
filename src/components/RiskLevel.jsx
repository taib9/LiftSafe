import React from "react";
import { FaExclamation, FaProductHunt, FaCheck, FaHeart, FaExclamationCircle, FaExternalLinkSquareAlt, FaUndoAlt, FaPlusSquare} from "react-icons/fa";

const riskStyles = {
  Red: {
    bg: "bg-red",
    text: "text-red",
    title: <>High Risk <br /> Injury</>,
    icon: FaExclamation,
    description: "Take immediate preventative action"
  },
  Yellow: {
    bg: "bg-orange",
    text: "text-orange",
    title: <>Elevated Risk <br /> Injury</>,
    icon: FaExclamation,
    description: "Consider modifying your training"
  },
  Green: {
    bg: "bg-green",
    text: "text-green",
    title: <>Normal<br /> Soreness</>,
    icon: FaCheck,
    description: "Your body is recovering well"
  },
};

const RiskLevel = ({ riskLevel }) => {
  const { bg, text, title, icon: Icon, description} = riskStyles[riskLevel] 

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div
        className={`lg:h-[400px] md:h-[320px] sm:h-[240px] lg:w-[400px] md:w-[320px] sm:w-[240px] ${bg} rounded-full flex items-center justify-center`}
      >
        <div className="lg:h-[320px] md:h-[240px] sm:h-[180px] lg:w-[320px] md:w-[240px] sm:w-[180px] bg-white rounded-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Icon className={`text-[6rem] ${text}`} />
            <h4 className={`font-bold lg:text-[2rem] text-center leading-tight mt-3 ${text}`}>
              {title}
            </h4>
          </div>
        </div>
      </div>

      <h4 className={`font-semibold text-[1.5rem] mt-6 ${text}`}>
        {description}
      </h4>
    </div>
  );
};

export default RiskLevel;