import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
        
       
        <div>
          <h1 className="text-xl font-bold mb-2">Legal<span className='text-yellow-600'>Ai</span>-Pak</h1>
          <p className="text-xs">
            Your trusted partner for personalized legal solutions. We connect you with the best legal minds and AI to ensure your needs are met.
          </p>
        </div>

       
        <div>
          <h2 className="font-bold mb-2 text-sm">Links</h2>
          <ul className="text-xs">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-sm">Privacy Policy</h2>
          <ul className="text-xs">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Legal Docs</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-sm">Contact</h2>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <span className='text-xs'>Email: info@legalai-pak.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span className="text-xs">Phone: +92 123 456 7890</span>
          </div>
        </div>

     
        <div>
          <h2 className="font-bold mb-2 text-sm">Newsletter</h2>
          <p className="text-xs mb-2">Subscribe to our newsletter for updates:</p>
          <div className="flex items-center">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 rounded-l-md focus:outline-none text-xs"
            />
            <button className="bg-yellow-600 text-white py-2 px-4 rounded-r-md hover:bg-yellow-500 transition duration-200 text-xs">
              Submit
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-xs mt-8">
        &copy; 2024 legalai-pak.com All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
