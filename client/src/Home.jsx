import React from "react";
import Navbar from "./components/Navbar";


const Home = () => {
  return (
    <>    
     <Navbar />
        {/* Header */}
        <div className="flex justify-center">
            <h1 className="text-4xl font-bold underline pb-2">Reusable React Components</h1>
        </div>

    </>
  );
};

export default Home;
