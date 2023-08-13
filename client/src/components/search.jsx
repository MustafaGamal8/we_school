import { FiSearch } from "react-icons/fi";


const Search = () => {
  return ( 
    <div className="w-full h-full bg-blue-400 bg-opacity-20 m-2 rounded-lg  flex ">
      <div className="bg-blue-400 w-max h-full p-3 rounded-lg flex items-center justify-center bg-opacity-50"><FiSearch  className="text-blue-500"/></div>
      <input type="text" placeholder="Search"  className="w-full bg-transparent h-full  outline-none p-2 text-lg"/>

    </div>
   );
}
 
export default Search;