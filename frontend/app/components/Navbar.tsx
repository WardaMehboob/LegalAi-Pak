import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2 py-4">
       
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> 
          <span className="font-extrabold text-xl text-gray-700">
            Legal<span className='text-yellow-600 font-extrabold'>Ai</span>-Pak
          </span>
        </div>

        
        <div className="flex-grow text-center">
          <div className="mt-2 flex justify-center space-x-6 font-bold text-gray-700">
            {['Home', 'About', 'Consultation', 'Process', 'Contact', 'Library'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="relative group text-gray-800 transition">
               
                <span className="absolute left-0 right-0 h-0.5 bg-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -top-1" />
                {item}
                <span className="absolute left-0 right-0 h-0.5 bg-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bottom-0" />
              </Link>
            ))}
          </div>
        </div>

        
        <div className="flex space-x-3">
          <Link href="/auth/signin">
            <button className="bg-gray-800 border-2 border-gray-800 text-white px-6 py-1 rounded-full hover:bg-yellow-600 transition">
              Sign In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="border-2 border-gray-800 text-gray-800 px-5 py-1 rounded-full hover:bg-yellow-600 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
