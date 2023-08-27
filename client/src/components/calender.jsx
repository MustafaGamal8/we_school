import React, { useState } from 'react';
import { format, startOfMonth, addDays, addMonths, isToday, getDay } from 'date-fns';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const daysInMonth = Array.from({ length: 42 }, (_, index) =>
    addDays(monthStart, index - getDay(monthStart)) 
  );

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isToday = (day) => {
    const today = new Date();
    return day.getDate() === today.getDate() && day.getMonth() === today.getMonth() && day.getFullYear() === today.getFullYear();
  };

  return (
    <div className="p-2 bg-white rounded-lg w-full shadow-xl dark:bg-[#f0f0f0]">
      <div className="flex justify-between mb-2">
        <button
          className="text-blue-500 "
          onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
        >
          <IoIosArrowBack size={16} />
        </button>
        <h2 className="text-base font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          className="text-blue-500  "
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          <IoIosArrowForward size={16} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weekdays.map((weekday, index) => (
          <div key={index} className="p-1 text-center text-gray-500">
            {weekday}
          </div>
        ))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`p-1 text-center cursor-pointer ${
              isToday(day) ? 'bg-red-500 rounded-md text-white font-semibold' : ''
            } ${
              day.getMonth() === currentMonth.getMonth()
                ? 'text-black'
                : 'text-gray-400'
            }`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
 