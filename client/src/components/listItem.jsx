
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
;
const ListItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mb-4 md:w-[60%] m-auto p-5">
      <button
        className={`flex flex-row justify-between items-center text-md  md:justify-center w-full text-center md:text-xl font-bold py-3 px-6  bg-[#6e237e] text-white drop-shadow-md  rounded-t-lg `}
        onClick={toggleExpand}
      >
        {title}
        <span className="inline-block mr-5 transform transition-transform">
          {isExpanded ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </button>
      {isExpanded && (
      <div className="bg-white   drop-shadow-lg  rounded-b-lg ">
          {content.map((item, index) => (
            <p key={index} className=" text-md p-5 py-2 md:text-lg text-gray-800">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};


export default ListItem;