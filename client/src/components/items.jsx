
import { list } from 'postcss';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
const ListItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-4 w-[80%] m-auto">
      <button
        className={`block w-full text-center text-xl font-bold py-3 px-6  bg-white drop-shadow-md  border-t-4 border-t-main rounded-md `}
        onClick={toggleExpand}
      >
        {title}
        <span className="inline-block mr-5 transform transition-transform">
          {isExpanded ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </button>
      {isExpanded && (
        <div className="p-4  mt-1 text-sm bg-white drop-shadow-md border-b-4 border-b-main rounded-md">
          {content.map((item, index) => (
            <p key={index} className="mb-2">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};


export default ListItem;