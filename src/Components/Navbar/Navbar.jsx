import React from 'react';
import LogoImage from '../../Media/Logo.png';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white shadow-md'>
      <img src={LogoImage} alt="Logo" className='h-12 ' />

      <ul className='flex flex-col md:flex-row gap-10 text-lg font-semibold'>
        <li className='hover:text-blue-600 cursor-pointer transition duration-300 group relative'>
          New
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
        <li className='relative hover:text-blue-600 cursor-pointer transition duration-300 group'>
          Women
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className='relative hover:text-blue-600 cursor-pointer transition duration-300 group'>
          Men
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className='relative hover:text-blue-600 cursor-pointer transition duration-300 group'>
          Jordan
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
      </ul>

      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <CiSearch className='absolute left-2 size-7 top-2 text-gray-400' />
          <input
            type="text"
            placeholder='Search'
            className='border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          />
        </div>
        <CiHeart className='text-5xl cursor-pointer hover:text-blue-600 transition duration-300' />
        <FiShoppingBag className='text-4xl cursor-pointer hover:text-blue-600 transition duration-300' />
      </div>
    </nav>
  );
};

export default Navbar;
