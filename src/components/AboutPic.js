import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
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

  const PrevSlide = () => {
    const isFirstSlide = currentPic === 0;
    const newPic = isFirstSlide ? PicSlides.length - 1 : currentPic - 1;
    setCurrentPic(newPic);
  };
  const NextSlide = () => {
    const isLastSlide = currentPic === PicSlides.length - 1;
    const newPic = isLastSlide ? 0 : currentPic + 1;
    setCurrentPic(newPic);
  };

  return (
    <div className="col-span-3 relative items-center h-max rounded-2xl group p-2 xl:col-span-5 md:border-1 md:col-span-6 flex justify-center">
      <div className="absolute top-0 -right-3 -z-10 rounded-[2rem]" />
      <Image
        src={PicSlides[currentPic].url}
        alt="Cloth Store"
        width={100}
        height={100}
        className="w-[65%] h-[60%] rounded-2xl md:w-full md:h-auto hover:cursor-pointer duration-500"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        
      />
      <div className="hidden group-hover:block absolute md:block top-1/2 -translate-x-0 left-5 md:left-0 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={PrevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute md:block top-1/2 -translate-x-0 right-5 md:right-0 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={NextSlide} size={30} />
      </div>
    </div>
  );
};

export default AboutPic;
