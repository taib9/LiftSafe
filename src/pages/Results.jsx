import React from "react";
import { Link, useLocation } from "react-router-dom";
import KeyFactorCard from "../components/KeyFactorCard";
import ActionCard from "../components/ActionCard";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import RiskLevel from '../components/RiskLevel'

const Results = () => {
  const location = useLocation();
  const { answers, painAreaDbId } = location.state || {};

  console.log("Received data:", { answers, painAreaDbId });

  const sleep = answers[3]; // 0 - 10
  const pain = answers[4]; // 0 - 10
  const volume = answers[2]; // 0 - 100%
  const frequency = answers[0]; // 0 - 7
  const area = painAreaDbId;

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
  if (volume >= 70) {
    riskScore += 25;
    keyFactors.push({
      label: "High volume increase",
      detail: `Training load increased significantly`,
    });
  } else if (volume >= 40) {
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
      <div className="flex justify-between items-center p-3">
        <Link
          to="/"
          className="font-bold tracking-wider text-black pt-2 items-center flex pl-4 w-auto"
        >
          ← Back
        </Link>
        <Link
        to="/">
        <h2 className='text-white bg-teal font-bold px-4 py-2 rounded-full'>Start Over →</h2>
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
      <div className='container mx-auto flex flex-col items-center mt-12'>
        <RiskLevel riskLevel={riskLevel}/>
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
        {actions.map((action, index) => (
          <ActionCard
            key={action.id}
            title={action.recommendation_type}
            description={action.tip}
            riskLevel={action.risk_level}
            className={index === 0 ? "bg-[#CEDADB] text-white border-1 border-teal" : "bg-gray-100 text-black"}
          />
        ))}
      </div>
       <div className='container mt-12 mx-auto max-w-2xl mb-12'>
      <div className='bg-lighter-gray p-4 rounded-lg mt-4'>
      <p className='text-black text-sm font-sm'>Disclaimer: This tool provides educational guidance only and is not a substitute for professional medical advice. If you experience persistent or severe pain, please consult a qualified healthcare provider or physiotherapist.</p>
    </div>
      </div>
    </div>
  );
};

export default Results;
