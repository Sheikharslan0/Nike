import React from 'react';
import jordonImage from '../../Media/jordon.png';

const Header = () => {
  return (
    <div className="w-full h-16 bg-gray-300 shadow-lg flex items-center px-5 md:px-10 lg:px-20">
      <div>
        <img src={jordonImage} className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="Logo" />
      </div>
      
      <button className="ml-auto px-4 py-2 text-sm md:text-base font-semibold border border-black rounded-full text-black hover:text-white hover:border-blue-100 hover:bg-blue-400 transition duration-300">
        Sign In
      </button>
    </div>
  );
};

export default Header;
