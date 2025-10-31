import React, { useState } from 'react';

function Explore() {
  const boxes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
  const [visibleCount, setVisibleCount] = useState(10); // show first 10 initially

  const showMore = () => {
    setVisibleCount((prev) => prev + 5); // show 5 more each click
  };

  return (
    <div className="h-[95vh] flex flex-col items-center px-[1vh] overflow-y-auto">
      <div className="grid grid-cols-5 gap-4 p-3 auto-rows-min">
        {boxes.slice(0, visibleCount).map((box, index) => (
          <div
            key={index}
            className="bg-gray-300 border border-gray-200 shadow-xl w-[29vh] h-[30vh] rounded-lg"
          >
            <div className="bg-gray-300 w-full h-[22vh] flex items-center justify-center">
              Flower Pic {box}
            </div>
            <div className="bg-gray-100 w-full h-[8vh] flex items-center justify-center">
              Flower Info {box}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < boxes.length && (
        <button
          onClick={showMore}
          className="mt-4 bg-fuchsia-500 text-white px-6 py-2 rounded-full hover:bg-fuchsia-600 duration-200 transition"
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default Explore;
