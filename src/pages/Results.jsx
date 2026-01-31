import React from "react";
import { Link } from "react-router-dom";
import KeyFactorCard from "../components/KeyFactorCard";
import ActionCard from "../components/ActionCard";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

const sleep = 6; // 0 - 10
const pain = 4; // 0 - 10
const volume = 5; // 0 - 100%
const frequency = 7; // 0 - 7
const area = "00cf7f1c-a043-4d60-b3db-8418e8f3df4c";

const Results = () => {
  const [actions, setActions] = useState([]);
  const [areaName, setAreaName] = useState("");

  let riskScore = 0;
  const keyFactors = [];

  // Sleep
  if (sleep <= 3) {
    riskScore += 30;
    keyFactors.push({
      id: "sleep",
      label: "Poor sleep quality",
      detail: `Sleep quality: ${sleep}/10`,
    });
  } else if (sleep <= 5) {
    riskScore += 10;
    keyFactors.push({
      label: "Suboptimal recovery",
      detail: `Sleep quality: ${sleep}/10`,
    });
  }

  // Pain
  if (pain >= 7) {
    riskScore += 40;
    keyFactors.push({
      label: "High pain level",
      detail: `Pain Level ${pain}/10`,
    });
  } else if (pain >= 4) {
    riskScore += 20;
    keyFactors.push({
      label: "Moderate pain level",
      detail: `Pain Level ${pain}/10`,
    });
  }
  // Volume
  if (volume >= 7) {
    riskScore += 25;
    keyFactors.push({
      label: "High volume increase",
      detail: `Training load increased significantly`,
    });
  } else if (volume >= 4) {
    riskScore += 10;
  }

  // Frequency
  if (frequency >= 6 && pain >= 4) {
    riskScore += 15;
    if (keyFactors.length < 2) {
      keyFactors.push({
        label: "High training frequency",
        detail: `${frequency} sessions/week with existing discomfort`,
      });
    }
  }

  let riskLevel = "Green";
  if (riskScore >= 50) {
    riskLevel = "Red";
  } else if (riskScore >= 25) {
    riskLevel = "Yellow";
  }

  if (riskLevel === "Green" && keyFactors.length === 0) {
    keyFactors.push({
      id: "overall-good",
      label: "Overall good recovery status",
      detail: "Your metrics indicate healthy training practices",
      type: "positive",
    });
  }

  useEffect(() => {
    const fetchActions = async () => {
      const { data, error } = await supabase
        .from("recommendations")
        .select(
          `
        id,
        risk_level,
        recommendation_type,
        tip,
        pain_area_id (
          id,
          name
        )
      `,
        )
        .eq("pain_area_id", area)
        .eq("risk_level", riskLevel);

      if (error) {
        console.log("Supabase error:", error);
      } else {
        setActions(data ?? []);
        if (data && data.length > 0 && data[0].pain_area_id) {
          setAreaName(data[0].pain_area_id.name);
        }
      }
    };
    fetchActions();
  }, [riskLevel]);

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
      <div className="container mx-auto mt-4 flex flex-col items-center">
        <h2 className="text-white bg-teal font-bold px-4 py-2 rounded-full">
          {areaName}
        </h2>
        <h1 className="text-2xl lg:text-[2rem] text-teal text-center font-bold">
          Your Recovery Assessment
        </h1>
      </div>
      <div className="container mt-16 max-w-2xl mx-auto">
        <h3 className="text-black font-bold text-xl text-center">
          Key Factors
        </h3>
        {keyFactors.map((factor, id) => (
          <KeyFactorCard
            key={id}
            title={factor.label}
            description={factor.detail}
          />
        ))}
      </div>
      <div className="container mt-16 max-w-2xl mx-auto">
        <h3 className="text-black font-bold text-xl text-center">
          Recommended Actions
        </h3>
        {actions.map((action) => (
          <ActionCard
            key={action.id}
            title={action.recommendation_type}
            description={action.tip}
            riskLevel={action.risk_level}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
