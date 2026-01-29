import React from "react";


const PainSelectionCard = ({ title, description, Icon, isActive, onToggle }) => {
  return (
    <button type="button" onClick={onToggle}>
     <div className="relative pl-[40px] my-[1.5rem]">
      <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 z-10">
        <div className={["w-[165px] h-[165px] flex items-center justify-center rounded-full shadow", isActive ? "bg-white border-teal border-2" : "bg-[#135E69]"].join(" ")}>
          {Icon ? (
            <Icon className={[ "text-[5rem]", isActive ? "text-teal" : "text-white"].join(" ")}/> 
          ) : null }

        </div>
      </div>

      <div className={["rounded-2xl p-8 pl-[120px] shadow rounded-2xl text-left", isActive ? "bg-[#135E69]" : "bg-light-gray"].join(" ")}>
        <h3 className={["text-xl font-bold", isActive ? "text-white" : "text-teal"].join(" ")}>{title}</h3>
        <p className={["text-lg font-medium", isActive ? "text-white" : "text-black"].join(" ")}>
          {description}
        </p>
      </div>
    </div>    
    </button>
  
  );
};

export default PainSelectionCard;
