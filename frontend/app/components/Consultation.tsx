import React from 'react';

const Consultation = () => {
  return (
    <div className="text-center my-40">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-4">Get Personalized <span className="text-yellow-600">Legal </span>Consultation</h1>
      <p className="text-gray-500 text-sm mb-8">
      Our platform helps you to find and connect with qualified lawyers based on your needs. Browse lawyers profiles, schedule consultations, and <br/>access secure communication options
      </p>
      <button className="bg-gray-800 text-white text-md py-3 px-14 rounded-full hover:bg-yellow-500 transition duration-200">
        Find Lawyer Now
      </button>
    </div>
  );
};

export default Consultation;
