import React from "react";
import PainSelectionCard from "../components/PainSelectionCard";
import { GiKneeCap } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    id: "knees",
    title: "Knees",
    description: "Issues with squats, lunges, leg press, or running",
    Icon: GiKneeCap,
  },
  {
    id: "shoulders",
    title: "Shoulders",
    description: "Issues with pressing movements",
    Icon: GiKneeCap,
  },
  {
    id: "lower-back",
    title: "Lower Back",
    description: "Issues with lifting from below",
    Icon: GiKneeCap,
  },
  {
    id: "hips",
    title: "Hips",
    description: "Issues with squats",
    Icon: GiKneeCap,
  },
  {
    id: "elbow",
    title: "Elbow",
    description: "Issue with elbows",
    Icon: GiKneeCap,
  },
];

const PainSelection = () => {
  const [activeCards, setActiveCards] = useState([]);

  const toggleCard = (id) => {
    setActiveCards((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <div className="flex">
        <Link
          to="/"
          className="font-bold tracking-wider text-black pt-2 items-center flex pl-4 w-auto"
        >
          ← Back 
        </Link>
      </div>
      <div className="container mx-auto mt-4 gap-[5rem]">
        <h1 className="text-2xl lg:text-[2rem] text-teal text-center font-bold">
          Where are you feeling soreness?
        </h1>
        <h2 className="text-gray-500 text-sm text-center">
          Complete a short questionaire to identify your injury risk
        </h2>
        <div className="container mx-auto max-w-5xl mt-8 gap-4 flex flex-col">
          {cards.map((card) => (
            <PainSelectionCard
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              isActive={activeCards.includes(card.id)}
              onToggle={() => toggleCard(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PainSelection;
