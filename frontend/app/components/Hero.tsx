import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white text-center space-y-8">
      
      <button className="bg-gray-800 text-white py-3 px-7 rounded-xl text-lg">
        LegalAi-pak where legal aspects become easy
      </button>

      <div className="flex flex-col space-y-0">
  <p className="text-md text-gray-500 mb-0">
    Simplifying legal access in Pakistan with cutting-edge AI technology
  </p>
  <h1 className="text-4xl font-bold text-gray-700 -mt-2">
    <span className="font-extrabold">
      AI-Powered <span className="text-yellow-600">Legal</span> Solutions For Everyone
    </span>
  </h1>
</div>

     
      
      <button className="bg-gray-800 text-white py-3 px-14 rounded-full hover:bg-yellow-600 transition duration-300">
        Get Legal Help Now
      </button>
    </section>
  );
};

export default Hero;