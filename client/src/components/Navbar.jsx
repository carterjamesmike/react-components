import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="flex justify-between mb-2 items-center h-16 bg-white text-black shadow-sm font-mono"
      role="navigation"
    >
        {/* Home Button */}
        

        <div className="flex justify-center space-x-2">
            <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</a>
            <a href="/poll" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Polling Component with Victory Graph</a>
        </div>

    </nav>
  );
};

export default Navbar;

