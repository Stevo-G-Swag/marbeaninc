import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/agent" className="text-white">
            Agent Framework
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
