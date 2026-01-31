import React, { useEffect } from "react";
import PainSelectionCard from "../components/PainSelectionCard";
import { GiKneeCap } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const PainSelection = () => {
  const [painAreas, setPainAreas] = useState([]);
  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    const fetchPainAreas = async () => {
      const { data, error } = await supabase
      .from('pain_area_id')
      .select("*")

      if (error) {
        console.log("Supabase error:", error)
      } else {
        setPainAreas(data)
      }
    };
    fetchPainAreas()
  }, [])

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
          {painAreas.map((area) => (
            <PainSelectionCard
              key={area.id}
              title={area.name}
              description={area.description}
              iconUrl={area.icon}
              isActive={activeCards.includes(area.id)}
              onToggle={() => toggleCard(area.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PainSelection;
