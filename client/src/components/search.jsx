import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from 'react-icons/ri';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("userName");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value, searchCategory);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSearchCategory(value);
    onSearch(searchTerm, value);
  };

  return (
    <div className="w-full h-full bg-white m-2 rounded-lg flex p-1 dark:bg-slate-700 dark:text-white">
      <div className="bg-sec w-max h-full p-3 rounded-lg flex items-center justify-center">
        <FiSearch className="text-white" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent h-full outline-none p-2 text-lg"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select
        className=" bg-transparent outline-none p-2 text-lg  "
        value={searchCategory}
        onChange={handleSelectChange}
      >
        <option value="userName">User Name</option>
        <option value="content">Post Content</option>
        <option value="email">Email</option>
      </select>
      
    </div>
  );
};

export default Search;


