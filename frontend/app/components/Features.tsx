import React from 'react';
import { FaRobot, FaQuestionCircle, FaNewspaper, FaGavel, FaBell, FaFileAlt } from 'react-icons/fa';

const Features = () => {
  const featureList = [
    {
      name: "AI-Powered Chatbot",
      description: "Answer your legal queries in secounds.",
      icon: <FaRobot className="text-yellow-600 text-4xl" />,
    },
    {
      name: "Q&A Forum",
      description: "Don't confuse, ask others.",
      icon: <FaQuestionCircle className="text-yellow-600 text-4xl" />,
    },
    {
      name: "News and Updates",
      description: "Stay update with latest legal news.",
      icon: <FaNewspaper className="text-yellow-600 text-4xl" />,
    },
  ];

  const additionalFeatures = [
    {
      name: "Connect with Lawyers",
      description: "No need to walk away, legal help is here.",
      icon: <FaGavel className="text-yellow-600 text-4xl" />,
    },
    {
      name: "Notifications and Alerts",
      description: "Stay tuned with real time notifications.",
      icon: <FaBell className="text-yellow-600 text-4xl" />,
    },
    {
      name: "Document Library",
      description: "In case of doubts visit personalized library.",
      icon: <FaFileAlt className="text-yellow-600 text-4xl" />,
    },
  ];

  return (
    <div className="text-center my-60">
      <h1 className="text-4xl font-extrabold text-gray-700 mb-11">Our <span className='text-yellow-600'>Features</span></h1>
      <div className="flex justify-center space-x-20 mb-20">
        {featureList.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-800 p-1 rounded-md mb-2">
              {feature.icon}
            </div>
            <button className="text-gray-700 text-2xl font-extrabold py-2 px-4 hover:underline transition duration-200">
              {feature.name}
            </button>
            <p className="text-gray-500 text-sm">{feature.description}</p> 
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-20">
        {additionalFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-800 p-1 rounded-md mb-2">
              {feature.icon}
            </div>
            <button className="text-gray-700 text-2xl font-extrabold py-2 px-4 hover:underline transition duration-200">
              {feature.name}
            </button>
            <p className="text-gray-500 text-sm">{feature.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
