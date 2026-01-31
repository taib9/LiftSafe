import React from 'react'

const KeyFactorCard = ({ title, description, Icon, className }) => {
  return (
    <div className={`${className} p-4 rounded-lg shadow-2xl mt-4`}>
      <div className='flex'>
      <div className='flex bg-[#135E69] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
        <Icon className='my-auto text-[1.5rem] text-white my-auto'></Icon>
      </div>
      <h4 className='text-black text-[1.4rem] font-semibold mx-4 my-auto'>{title}</h4>
      </div>
      <ul className="text-black text-md font-md mt-3 list-disc list-inside">
  {description.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>    </div>
  )
}

export default KeyFactorCard