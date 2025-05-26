
 
import React from 'react'
export default function InfiniteSlider() {
    const imageUrls = [
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/WeWork_logo.png",
      "https://marpol.co.uk/wp-content/uploads/Bellway-logo-clients-black-white.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/WeWork_logo.png",
      "https://marpol.co.uk/wp-content/uploads/Bellway-logo-clients-black-white.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/WeWork_logo.png",
      "https://marpol.co.uk/wp-content/uploads/Bellway-logo-clients-black-white.jpg",
    ];
  
    return (
      <div className="overflow-hidden relative w-full bg-white py-6">
        <div className="flex   animate-scroll ">
          {/* First set of images */}
          <div className="flex  ">
            {imageUrls.map((src, i) => (
              <div
                key={`set1-${i}`}
                className="min-w-[200px] h-[120px] rounded-lg flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
  
          {/* Duplicate set for infinite scroll */}
          <div className="flex  ">
            {imageUrls.map((src, i) => (
              <div
                key={`set2-${i}`}
                className="min-w-[200px] h-[120px] rounded-lg   flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

  
  