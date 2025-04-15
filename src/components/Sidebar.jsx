"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function CategoriesSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-80 h-screen bg-white shadow overflow-y-auto">
      <h2 className="text-center text-white bg-green-600 py-3 text-base font-medium rounded-t">
        Categories
      </h2>

      
      <div className="relative px-4 pt-4">
        <input
          type="text"
          placeholder="Search by Categories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
        />
        <Search className="absolute right-7 top-[22px] h-4 w-4 text-gray-700" />
      </div>

      
      <div className="mt-4 px-4 pb-4 space-y-2 text-sm">
        
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 bg-gray-100 rounded-xl p-3 border border-green-300 cursor-pointer transition duration-200 hover:bg-gray-200"
        >
          <img
            src="assets/image/005-fever.png"
            alt="Icon"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-green-600 font-semibold text-sm leading-4">
              Introduction to Dua
            </h3>
            <p className="text-xs text-gray-500 mt-[2px]">Subcategory: 11</p>
          </div>
          <div className="text-xs text-gray-600 text-right">
            <p className="font-semibold text-base leading-none">15</p>
            <p className="text-[11px]">Duas</p>
          </div>
        </div>

       
        {isExpanded && (
          <div className="ml-6 mt-2 pl-3 border-l-2 border-dotted border-green-500 space-y-[10px] text-[13px] leading-5">
            <p className="text-green-600 font-semibold cursor-pointer hover:underline">
              What is Dua
            </p>
            <p className="text-gray-800">Conditions for Dua to be successful</p>
            <p className="text-gray-800">The Methode Of Dua</p>
            <p className="text-gray-800">Before Dua</p>
            <p className="text-gray-800">During Dua</p>
            <p className="text-gray-800">
              Prerequisites of writing Dua and drinking it’s water
            </p>
            <p className="text-gray-800">
              The correct way to perform Dua for a small child
            </p>
          </div>
        )}

        
        {[1, 2].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition"
          >
            <img
              src="assets/image/005-fever.png"
              alt="Icon"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-gray-800 font-semibold text-sm leading-4">
                Introduction to Dua
              </h3>
              <p className="text-xs text-gray-500 mt-[2px]">Subcategory: 11</p>
            </div>
            <div className="text-xs text-gray-600 text-right">
              <p className="font-semibold text-base leading-none">15</p>
              <p className="text-[11px]">Duas</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
