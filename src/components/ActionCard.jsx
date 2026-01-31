import { FaExclamation, FaProductHunt, FaCheck, FaHeart, FaExclamationCircle, FaExternalLinkSquareAlt, FaUndoAlt, FaPlusSquare} from "react-icons/fa";

const recommendedActions = {
  "Modify Technique": {
    icon: FaExclamationCircle,
  },
  "Recover": {
    icon: FaPlusSquare,
  },
  "Reduce Load": {
    icon: FaUndoAlt,
  },
    "Strengthen": {
    icon: FaExternalLinkSquareAlt,
  },
};

const KeyFactorCard = ({ title, description, className }) => {
   const {icon: Icon} = recommendedActions[title] 
  return (
<div className={`${className} p-4 rounded-lg shadow-2xl mt-4`}>
      <div className='flex'>
      <div className='flex bg-[#135E69] w-[50px] h-[50px] flex items-center justify-center rounded-full'>
        <Icon className='text-[1.5rem] text-white my-auto'></Icon>
      </div>
      <h4 className='text-teal text-lg font-bold mx-4 my-auto'>{title}</h4>
      </div>
      <p className='text-black text-md font-md mt-3'>{description}</p>
    </div>
  )
}

export default KeyFactorCard