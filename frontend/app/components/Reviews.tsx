import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Nouman Ejaz",
      role: "@CEO-ABC Corporation",
      profileInitial: "N",
      feedback:
        "LegalAi-Pak has made legal services more accessible to me and my clients. The AI chatbot is a game-changer!",
      rating: 5,
    },
    {
      id: 2,
      name: "Fatimah Bint-e-Mustafa",
      role: "@CEO-ABC Corporation",
      profileInitial: "F",
      feedback:
        "LegalAi-Pak has made legal services more accessible to me and my clients. The AI chatbot is a game-changer!",
      rating: 5,
    },
    {
      id: 3,
      name: "Wardah Mehboob",
      role: "@CEO-ABC Corporation",
      profileInitial: "W",
      feedback:
        "LegalAi-Pak has made legal services more accessible to me and my clients. The AI chatbot is a game-changer!",
      rating: 5,
    },
  ];

  return (
    <div className="text-center my-40">
      <h2 className="text-4xl font-extrabold text-gray-700 mb-4">
        What our <span className="text-yellow-600">users</span> say
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Our platform helps you find and connect with qualified lawyers based on
        your needs. Browse lawyer profiles,<br/> schedule consultations, and access
        secure communication options.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-800 text-white p-6 rounded-xl w-80 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold">
                {review.profileInitial}
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg">{review.name}</h3>
                <p className="text-gray-400 text-sm">{review.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-300 italic">
              <span className="text-2xl font-bold">“</span>
              {review.feedback}
              <span className="text-2xl font-bold">”</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
