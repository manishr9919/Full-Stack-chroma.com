import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Slider2 = () => {
  // Array of 20 placeholder images with associated links
  const images = [
    {
      id: 1,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746355/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons%20-%20Mobile/Mobiles_idlyc2.png?tr=w-1000",
      link: "/image/1",
    },
    {
      id: 2,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729680688/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/Desktop_wbgsf2.png?tr=w-720",
      link: "/image/2",
    },
    {
      id: 3,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/TV_vdemgc.png?tr=w-720",
      link: "/image/3",
    },
    {
      id: 4,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746331/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Laptops_pzewpv.png?tr=w-720",
      link: "/image/4",
    },
    {
      id: 5,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Head_set_xjj934.png?tr=w-720",
      link: "/image/5",
    },
    {
      id: 6,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Kitchen_Appliances_yhzevo.png?tr=w-720",
      link: "/image/6",
    },
    {
      id: 7,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Washing_machines_izyrnd.png?tr=w-720",
      link: "/image/7",
    },
    {
      id: 8,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1726907827/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Sept/D_Geyser_i5frr1.png?tr=w-720",
      link: "/image/8",
    },
    {
      id: 9,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1726131595/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Sept/Water_Purifiers_Desktop_phji31.png?tr=w-720",
      link: "/image/9",
    },
    {
      id: 10,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Home_theatres_kpwvft.png?tr=w-720",
      link: "/image/10",
    },
    {
      id: 11,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Home_theatres_kpwvft.png?tr=w-720",
      link: "/image/11",
    },
    {
      id: 12,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746345/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Tablets_yzod4f.png?tr=w-720",
      link: "/image/12",
    },
    {
      id: 13,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746333/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Ref_biysg7.png?tr=w-720",
      link: "/image/13",
    },
    {
      id: 14,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616448/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Wearables_iunu7h.png?tr=w-720",
      link: "/image/14",
    },
    {
      id: 15,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616447/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Speaker_g2mbgn.png?tr=w-720",
      link: "/image/15",
    },
    {
      id: 16,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746310/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Grooming_vvxudd.png?tr=w-720",
      link: "/image/16",
    },
    {
      id: 17,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746310/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Grooming_vvxudd.png?tr=w-720",
      link: "/image/17",
    },
    {
      id: 18,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616447/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Microwaves_otd6qq.png?tr=w-720",
      link: "/image/18",
    },
    {
      id: 19,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718616445/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/June/17th/Desktop/Cameras_a6n2jy.png?tr=w-720",
      link: "/image/19",
    },
    {
      id: 20,
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746308/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Air_Conditioner_a4hg1z.png?tr=w-720",
      link: "/image/20",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track the current set of 10 images

  const itemsPerPage = 10; // Number of images to show at a time

  // Function to go to the next set of images
  const handleNext = () => {
    if (currentIndex + itemsPerPage < images.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // Function to go to the previous set of images
  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="w-full p-4 bg-black">
      <div className="relative">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-2">
          {/* Loop through the current set of images to display */}
          {images
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((image) => (
              <div key={image.id} className="flex justify-center items-center">
                {/* Link component wraps the image */}
                <Link to={image.link}>
                  <img
                    src={image.src}
                    alt={`Image ${image.id}`}
                    className="w-full h-auto object-contain rounded-[20%]"
                  />
                </Link>
              </div>
            ))}
        </div>

        {/* Arrow Buttons (Large Screens Only) */}
        <button
          onClick={handlePrevious}
          className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <span>&#8592;</span>
        </button>
        <button
          onClick={handleNext}
          className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 disabled:opacity-50"
          disabled={currentIndex + itemsPerPage >= images.length}
        >
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
};
