import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamation, FaProductHunt, FaCheck, FaHeart, FaExclamationCircle, FaExternalLinkSquareAlt, FaUndoAlt, FaPlusSquare} from "react-icons/fa";
import KeyFactorCard from '../components/KeyFactorCard'
import ActionCard from '../components/ActionCard'
import RiskLevel from '../components/RiskLevel'

const factorCard = [
  {
    id: "Moderate-Discomfort",
    title: "Moderate Discomfort",
    description: "Pain Level: 5/10"
  },
  {
    id: "Rapid-Volume-Increase",
    title: "Rapid Volume Increase",
    description: "Training Load Increased Significantly"
  }
]

const actionCard = [
  {
    id: "Immediate Action",
    title: "Moderate Discomfort",
    description: ["Training Load Increased Significantly", "Rest from direct arm training for 5-7 days", "Consider a compression sleeve"],
    Icon: FaExclamationCircle
    
  },
  {
    id: "Rapid-Volume-Increase",
    title: "Rapid Volume Increase",
    description: ["Training Load Increased Significantly", "Rest from direct arm training for 5-7 days", "Consider a compression sleeve"],
    Icon: FaExternalLinkSquareAlt
  }
]

const riskLevels = [
  {
    id: "Red",
    title:<>High Risk <br /> Injury</>,
    icon: FaExclamation,
    description: "Take immediate preventative action"
  },
  {
    id: "Yellow",
    title: <>Elevated Risk <br /> Injury</>,
    icon: FaExclamation,
    description: "Consider modifying your training"
  },
  {
    id: "Green",
    title:<>Normal<br /> Soreness</>,
    icon: FaCheck,
    description: "Your body is recovering well"
  }
]

const riskLevel = "Green"

const foundRiskLevel = riskLevels.find((risk) => risk.id == riskLevel)

const Results = () => {
  return (
     <div>
      <div className="flex justify-between items-center p-3">
        <Link
          to="/"
          className="font-bold tracking-wider text-black items-center flex pl-4 w-auto"
        >
          ← Back 
        </Link>
        <Link
        to="/">
        <h2 className='text-white bg-teal font-bold px-4 py-2 rounded-full'>Start Over →</h2>
        </Link>
      
      </div>
      <div className="container mx-auto mt-4 flex flex-col items-center">
        <h2 className='text-white bg-teal font-bold px-4 py-2 rounded-full'>Hip</h2>
        <h1 className="text-2xl lg:text-[2.5rem] text-teal text-center font-bold">
          Your Recovery Assessment 
        </h1>
      </div>
      <div className='container mx-auto mt-2 flex flex-col items-center mt-12'>
        <RiskLevel key={foundRiskLevel.id} title={foundRiskLevel.title} Icon={foundRiskLevel.icon} riskLevel={foundRiskLevel.id} description={foundRiskLevel.description}/>
      </div>
      <div className='container mt-12 max-w-2xl mx-auto'>
        <h3 className='text-black font-bold text-xl text-center'>Key Factors</h3>
        {factorCard.map((factorcard) => (
          <KeyFactorCard key={factorcard.id} title={factorcard.title} description={factorcard.description}/>
        ))}
      </div>
      <div className="container mt-12 max-w-2xl mx-auto">
  <h3 className="text-black font-bold text-xl text-center">
    Recommended Actions
  </h3>

  {actionCard.map((action, index) => (
    <ActionCard
      key={action.id}
      title={action.title}
      description={action.description}
      Icon={action.Icon}
      className={index === 0 ? "bg-[#CEDADB] text-white border-1 border-teal" : "bg-gray-100 text-black"} // first card different
    />
  ))}
</div>

      <div className='container mt-12 mx-auto max-w-2xl mb-12'>
      <div className='bg-lighter-gray p-4 rounded-lg mt-4'>
      <p className='text-black text-sm font-sm'>Disclaimer: This tool provides educational guidance only and is not a substitute for professional medical advice. If you experience persistent or severe pain, please consult a qualified healthcare provider or physiotherapist.</p>
    </div>
      </div>

    </div>
  )
}

export default Results