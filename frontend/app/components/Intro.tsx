import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="h-12 flex flex-col items-center justify-center text-center px-8">
      
      <h2 className="text-4xl font-extrabold text-gray-700 mb-4">
        Who <span className='text-yellow-600'>We</span> Are
      </h2>

      
      <p className="text-lg text-gray-600 max-w-3xl">
      LegalAi-Pak is an AI-powered platform designed to provide<br/> accessible and efficient legal support to individuals,<br/> businesses and legal professionals in Pakistan. Our mission is<br/> to modernize the legal sector using Al tools that simplify legal research,<br/> offer personalized legal advice, and predict case outcomes.
      </p>
    </section>
  );
};

export default Intro;