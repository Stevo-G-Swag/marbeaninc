import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to OpenDevin</h1>
      <p className="mb-8">Experience a state-of-the-art UI/UX design</p>
      <Link
        to="/agent"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Start the Agentic Framework
      </Link>
    </div>
  );
};

export default Home;
