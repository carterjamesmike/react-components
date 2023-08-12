import React, { useState } from 'react'
import Navbar from './Navbar';

const Openai = () => {
    const [userPrompt, setUserPrompt] = useState('');
    const [aiResponse, setAiResponse] = useState('');



    const handleGenerateText = async () => {
        console.log(aiResponse)
        const response = await fetch('http://localhost:3001/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: userPrompt })
        });
        const data = await response.json();
        setAiResponse(data.openaiText);
    }


  return (
    <>
    <Navbar />
    <input
        className='border-2 border-gray-900'
        type="text"
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
    />
    <button 
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    onClick={handleGenerateText}>Generate Text</button>
    <p>{aiResponse}</p>

    </>
  )
}

export default Openai