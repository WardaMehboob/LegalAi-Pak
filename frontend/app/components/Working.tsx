import React from 'react';
import { FaUserPlus, FaComments, FaBalanceScale } from 'react-icons/fa'; 

const Working = () => {
  const workingList = [
    {
      name: "Create Your Account",
      description: "Signup and create your account.",
      icon: <FaUserPlus className="text-yellow-600 text-4xl" />, 
    },
    {
      name: "Ask Legal Chatbot",
      description: "Ask your queries from our chatbot.",
      icon: <FaComments className="text-yellow-600 text-4xl" />, 
    },
    {
      name: "Legal Advice",
      description: "Connect and consult with legal experts.",
      icon: <FaBalanceScale className="text-yellow-600 text-4xl" />, 
    },
  ];

  return (
    <div className="text-center my-60">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-11">How it <span className='text-yellow-600'>works</span></h1>
      <div className="flex justify-center space-x-20 mb-10">
        {workingList.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-800 p-1 rounded-md mb-2">
              {item.icon}
            </div>
            <button className="text-gray-700 text-2xl font-extrabold py-2 px-4 hover:underline transition duration-200">
              {item.name}
            </button>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      
      <button className="bg-gray-800 text-white text-md py-3 px-9 rounded-full hover:bg-yellow-500 transition duration-200">
        Start now
      </button>
    </div>
  );
};

export default Working;
