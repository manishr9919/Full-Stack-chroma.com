import { useState, useEffect } from "react";

// Sample image URLs for the slider
const images = [
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733143039/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Wedding%20Store/021224/HP%20Rotating%20Banner/HP_Wedding_2Dec24_kuqdju.png",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733224379/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/04122024/Desktop/HP_Rotating_GooglePixel8A_04Dec2024_qaqdqh.jpg",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733201222/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/03122024/HP_Rotating_vivo_3Dec2024_uq0qdw.jpg",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733139693/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/03122024/Desktop/HP_Rotating_TV_3Dec2024_lz0afo.jpg",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733139693/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/03122024/Desktop/HP_Rotating_Speaker_3Dec2024_mc2nxn.jpg",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733201222/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Dec/03122024/HP_Rotating_ref_3Dec2024_ohj18x.jpg",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1733139696/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Dec/03122024/Desktop/HP_Rotating_watch_3Dec2024_bjnaou.jpg",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730899009/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Winter%20sale/Revised/HP%20rotating/HP_Rotating_Winter_6Nov2024_mdttsh.jpg",
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0); // Track the progress for the indicator

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically transition images every 3 seconds and reset progress
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds interval

    // Progress Bar Logic
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 3.33; // Fill progress bar by 3.33% each interval (3 seconds total time)
      });
    }, 100);

    return () => {
      clearInterval(interval); // Cleanup on unmount
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="slider-container relative w-full max-w-full">
      {/* Slider Images */}
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          )
        }
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-6 left-0 w-full bg-gray-300 h-1">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        />
      </div>
    </div>
  );
};
