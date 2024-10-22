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
            <h1 className="text-2xl font-bold mb-4 text-center">POV: اللي مستنيك بعد المدرسة </h1>
            <video src="/assets/wow.mp4" autoPlay  className="w-full" />
            <div 
              onClick={toggleModal} 
              className="bg-red-500 text-white px-4 py-2 rounded-lg mx-auto text-center mt-2  cursor-pointer"
            >
              أقفل
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
