import React from 'react';

export default function NewArrival() {
  return (
    <div className="flex flex-wrap gap-6 mb-8">
      <div className="relative flex-2 w-full md:w-[50%]">
        <img src="./newArrivals/ps5.png" alt="PlayStation 5" className="w-full h-full object-contain" />
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 flex-1">
        <div className="relative">
          <img src="./newArrivals/woman.png" alt="Women's Collections" className="w-full h-full object-contain" />
          
        </div>
        <div className="relative flex gap-4 w-[92%]" >
          <img src="./newArrivals/speaker.png" alt="Speakers" className="w-full h-full object-contain" />
          
          <img src="./newArrivals/perfume.png" alt="Perfume" className="w-full h-full object-contain" />
        </div>
        
      </div>
    </div>
  );
}
