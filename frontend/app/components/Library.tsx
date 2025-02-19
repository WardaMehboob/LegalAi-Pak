import React from "react";

const Library = () => {
  const books = [
    {
      id: 1,
      title: "Next JS Advancement in Web Development",
      description:
        "Our platform helps you find and connect with qualified lawyers based on your needs. Browse lawyer profiles, schedule consultations, and access secure communication options.",
      image: "https://via.placeholder.com/300", // Replace with actual image URLs
      author: "Warda Mehboob",
      publishedDate: "12-09-2024",
    },
    {
      id: 2,
      title: "React Patterns and Best Practices",
      description:
        "This book helps developers refine their React skills by introducing modern patterns and practices for effective development.",
      image: "https://via.placeholder.com/300",
      author: "Warda Mehboob",
      publishedDate: "12-09-2024",
    },
    {
      id: 3,
      title: "TypeScript for Professionals",
      description:
        "An advanced guide to mastering TypeScript and enhancing your JavaScript development experience.",
      image: "https://via.placeholder.com/300",
      author: "Warda Mehboob",
      publishedDate: "12-09-2024",
    },
  ];

  return (
    <div className="my-40 text-center">
      <h2 className="text-4xl font-extrabold text-gray-700 mb-4">
        Lega<span className="text-yellow-600">Ai</span>-Pak Library
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        In our library you'll find books, articles, blogs, and so much more.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-96 flex flex-col justify-between" // Updated width here
          >
            {/* Book Cover */}
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              {/* Title and Description */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{book.description}</p>
              {/* Author and Publish Date */}
              <div className="mt-auto flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center">
                  <div className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold mr-2">
                    {book.author.charAt(0)}
                  </div>
                  <span>{book.author}</span>
                </div>
                <span>Published: {book.publishedDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-gray-800 text-white text-md py-3 px-10 rounded-full hover:bg-yellow-500 transition duration-200">
        Visit Our Library
      </button>
    </div>
  );
};

export default Library;
