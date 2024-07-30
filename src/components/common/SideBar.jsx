import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 h-screen bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Instagram</h1>
        <ul>
          <li className="mb-4">Home</li>
          <li className="mb-4">Search</li>
          <li className="mb-4">Explore</li>
          <li className="mb-4">Reels</li>
          <li className="mb-4">Messages</li>
          <li className="mb-4">Notifications</li>
          <li className="mb-4">Create</li>
          <li className="mb-4">Profile</li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="w-3/5 bg-gray-100 p-4">
        {children}
      </div>
      {/* Right Sidebar */}
      <div className="w-1/5 h-screen bg-gray-200 p-4">
        <h2 className="font-bold mb-4">Suggested for you</h2>
        <ul>
          <li className="mb-2">User 1</li>
          <li className="mb-2">User 2</li>
          <li className="mb-2">User 3</li>
          <li className="mb-2">User 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
