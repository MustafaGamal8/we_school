import React, { useState } from 'react';

export default function ElzatonaModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='absolute bottom-0 left-0'>
      <button 
        onClick={toggleModal} 
        className=" text-[#4b2e77]  rounded-lg"
      >
        elzatona
      </button>

      {/* Full-screen modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <video src="/assets/wow.mp4" autoPlay controls className="w-full" />
            <button 
              onClick={toggleModal} 
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              أقفل
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
