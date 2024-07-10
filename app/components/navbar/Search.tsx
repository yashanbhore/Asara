"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto  py-2 rounded-full  shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm px-6 font-semibold">
          Anywhere
        </div>
        <div className="hidden border-x-[1px] sm:block text-sm px-6 font-semibold">
          Any Week
        </div>
        <div className="text-gray-600 pl-6 pr-2 flex flex-row items-center gap-3 text-sm ">
          Add Guest
        </div>
        <div
          className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
        >
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};
export default Search;
