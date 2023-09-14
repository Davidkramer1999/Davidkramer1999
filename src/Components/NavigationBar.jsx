import React from 'react'
import { NavLink } from "react-router-dom";
import LanguageSelector from './LanguageSelector';

export default function NavigationBar() {
return (
  <nav className="bg-gray-200 relative p-3" >
    <div className="container mx-auto px-6 flex justify-center items-center">
      <ul className="flex space-x-4">
        <li>
          <NavLink 
            to="/AboutMe" 
            className="text-black hover:text-blue-500"
          >
            My story
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Accommodations" 
            className="text-black hover:text-blue-500"
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-7 ">
      <LanguageSelector />
    </div>
  </nav>
);

}
