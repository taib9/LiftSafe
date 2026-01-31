import React from 'react'

const KeyFactorCard = ({ title, description }) => {
  return (
    <div className='bg-light-gray p-4 rounded-lg shadow-2xl mt-4'>
      <h4 className='text-teal text-lg font-bold'>{title}</h4>
      <p className='text-black text-md font-md'>{description}</p>
    </div>
  )
}

export default KeyFactorCard