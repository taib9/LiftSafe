import React from 'react'
import { Link } from 'react-router-dom'
import KeyFactorCard from '../components/KeyFactorCard'
import ActionCard from '../components/ActionCard'

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
    description: "Pain Level: 5/10"
  },
  {
    id: "Rapid-Volume-Increase",
    title: "Rapid Volume Increase",
    description: "Training Load Increased Significantly"
  }
]

const Results = () => {
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
        <h2 className='text-white bg-teal font-bold px-4 py-2 rounded-full'>Hip</h2>
        <h1 className="text-2xl lg:text-[2rem] text-teal text-center font-bold">
          Your Recovery Assessment 
        </h1>
      </div>
      <div className='container mt-16 max-w-2xl mx-auto'>
        <h3 className='text-black font-bold text-xl text-center'>Key Factors</h3>
        {factorCard.map((factorcard) => (
          <KeyFactorCard key={factorcard.id} title={factorcard.title} description={factorcard.description}/>
        ))}
      </div>
      <div className='container mt-16 max-w-2xl mx-auto'>
        <h3 className='text-black font-bold text-xl text-center'>Recmmended Actions</h3>
        {actionCard.map((actioncard) => (
          <ActionCard key={actioncard.id} title={actioncard.title} description={actioncard.description}/>
        ))}
      </div>
    </div>
  )
}

export default Results