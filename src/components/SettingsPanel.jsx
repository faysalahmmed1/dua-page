"use client";

import { useEffect, useState } from "react";
import { FiGlobe, FiSettings, FiMoon } from "react-icons/fi";
import { FaFont } from "react-icons/fa";

export default function SettingsPanel() {
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);


  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <aside className="w-64 bg-white  border-l p-4 hidden lg:block ">
      <h2 className="text-xl font-semibold mb-4 text-center text-black ">
        Settings
      </h2>

      <div className="mb-4">
        <h3 className="text-[#868686]  font-medium bg-[#F7F8FA] text-center py-2 rounded-lg flex items-center gap-2">
          <FiGlobe className="ml-2"/>
          Language Settings
        </h3>
      </div>

      <div className="mb-4">
        <h3 className="text-[#868686]  font-medium bg-[#F7F8FA] text-center py-2 rounded-lg flex items-center  gap-2">
          <FiSettings className="ml-2"/>
          General Settings
        </h3>
      </div>

      <div className="mb-4">
        <h3 className="text-[#868686]  font-medium bg-[#F7F8FA] text-center py-2 rounded-lg flex items-center  gap-2">
          <FaFont className="ml-2" />
          Font Settings
        </h3>
      </div>

      <div>
        <h3 className="text-[#868686]  font-medium bg-[#F7F8FA] text-center py-2 rounded-lg flex items-center  gap-2">
          <FiMoon className="ml-2"/>
          Appearance Settings
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">
            Night Mode
          </span>
          
          <input type="checkbox" defaultChecked className="toggle" />

        </div>
      </div>
    </aside>
  );
}
