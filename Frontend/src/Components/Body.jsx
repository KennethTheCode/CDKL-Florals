import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function Body() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    setLoading(true);
    setResult(null);

    // Prepare the file for sending
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Failed to connect to backend.");
    }

    setLoading(false);
    setShowModal(false);
    setSelectedFile(null);
  };

  return (
    <div className='h-screen items-center flex flex-col justify-center'>
        {result && (
        <div className="mt-6 text-center text-gray-700 w-full h-[60%] justify-center flex flex-col p-4 rounded-lg ">
          <h3 className="text-lg font-semibold">Prediction Result</h3>
          <p>Flower name: <span className="font-bold text-pink-600">{result.flower}</span></p>
          <p>Confidence: <span className="text-green-600">{result.confidence}</span></p>
        </div>
      )}
      <div className='mb-5 text-gray-500 text-[18px]'>What's your bloom of the day</div>
      
      <div className="relative w-[70vh]">
        <FaPlus 
          className="absolute left-4 top-1/2 z-[5] -translate-y-1/2 text-gray-500 text-xl hover:text-gray-300 transition duration-200 cursor-pointer" 
          onClick={() => setShowModal(true)} 
        />

        {showModal && (
          <div className='bg-black/70 backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50'>
            <div className='bg-gray-300 rounded-lg shadow-xl h-[25vh] w-[50vh] p-4'>
              <div className='flex justify-end'>
                <button 
                  className='bg-gray-200 rounded-lg w-[3vh] flex items-center justify-center hover:bg-gray-100 transition duration-200' 
                  onClick={() => setShowModal(false)}>
                  <IoIosClose />
                </button>
              </div>
              
              <div className='flex flex-col mt-3'>          
                <input type="file" onChange={handleFileChange} className="border border-gray-400 rounded-lg p-2 text-stone-600"/>

                {selectedFile && (
                  <p className="text-sm text-gray-500 mt-1">Selected: {selectedFile.name}</p>
                )}

                <button
                  onClick={handleUpload}
                  disabled={loading}
                  className="bg-blue-600 text-white rounded-lg p-2 mt-6 hover:bg-blue-700 transition disabled:opacity-50">
                  {loading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </div>
        )}

        <input className='border border-gray-400 bg-gray-200 w-[70vh] p-3 rounded-full shadow-xl placeholder-gray-400 px-10' placeholder='Ask anything'></input>
      </div>

    </div>
  );
}

export default Body;
