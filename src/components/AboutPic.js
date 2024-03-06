import React, { useState, useRef } from "react";
import Image from "next/image";

const AboutPic = () => {
  const PicSlides = [
    {
      url: "/images/website-images/Pic1.jpeg",
    },
    {
      url: "/images/website-images/Pic2.jpeg",
    },
    {
      url: "/images/website-images/Pic3.jpeg",
    },
    {
      url: "/images/website-images/Pic4.jpeg",
    },
    {
      url: "/images/website-images/Pic5.jpeg",
    },
    {
      url: "/images/website-images/Pic6.jpeg",
    },
    {
      url: "/images/website-images/Pic7.jpeg",
    },
    {
      url: "/images/website-images/Pic8.jpeg",
    },
    {
      url: "/images/website-images/Pic9.jpeg",
    },
    {
      url: "/images/website-images/Pic10.jpeg",
    },
    {
      url: "/images/website-images/Pic11.jpeg",
    },
  ];

  const [currentPic, setCurrentPic] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevSlide = () => {
    setCurrentPic((prev) => (prev === 0 ? PicSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentPic((prev) => (prev === PicSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="col-span-3 relative items-center h-max rounded-2xl group p-2 xl:col-span-5 md:border-1 md:col-span-6 flex justify-center">
      <p className="hidden xl:hidden lg:hidden md:block sm:block xs:block absolute top-2 left-2 text-white bg-black bg-opacity-50 rounded p-2 z-10">
        Swipe left or right to change pic
      </p>
      <button className="prev md:hidden lg:hidden sm:hidden xs:hidden underline" onClick={prevSlide} style={{ marginRight: "10px" }}>
        Prev
      </button>
      <Image
        src={PicSlides[currentPic].url}
        alt="Cloth Store"
        width={100}
        height={100}
        className="w-[65%] h-[60%] rounded-2xl md:w-full md:h-auto hover:cursor-pointer duration-500"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      <button className="next md:hidden lg:hidden sm:hidden xs:hidden underline" onClick={nextSlide} style={{ marginLeft: "10px" }}>
        Next
      </button>
    </div>
  );
};

export default AboutPic;
