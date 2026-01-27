import React from "react";

const MuscleSelection = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="text-3xl">Where are you feeling pain?</h1>
          <p className="text-gray-600">
            Select the primary area(s) of discomfort to get personal guidance.
          </p>
        </div>
        {/* Muscle Options */}
        <button className="w-full p-5 bg-black rounded-2xl flex item-center">
          <div className="flex items-start flex-col">
            <h3 className="font-bold text-gray-600 mb-1">Rotator Cuff / Shoulder</h3>
            <p className="text-gray-600">Pain during pressing, overhead movements, or lateral raises</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default MuscleSelection;
