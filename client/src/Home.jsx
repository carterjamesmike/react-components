import React from "react";


const Home = () => {
  return (
    <>    
        {/* Header */}
        <div className="flex justify-center">
            <h1 className="text-4xl font-bold underline pb-2">Reusable React Components</h1>
        </div>
        {/* Button */}
        <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="/poll">Polling Component with Victory Graph</a>
            </button>
        </div>
    </>
  );
};

export default Home;
