import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-base dark:border-[#707070] sm:text-base absolute bottom-0 lg:relative">
      <div className="py-4 z-0 md:py-8 flex items-center justify-around lg:flex-col bg-black dark:bg-black lg:py-6">
        <span className="text-white dark:text-[#707070]">&copy; {new Date().getFullYear()} All Rights Reserved.</span>
        <div className="flex items-center lg:py-7 text-white dark:text-[#707070]">
          Shop with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> at Tutored Outfits.
        </div>
        <div className="flex items-center text-white dark:text-[#707070]">
          Created&nbsp;by&nbsp;
          <Link
            href="https://next-js-portfolio-oluwafisayoibrahim.vercel.app/"
            className="underline underline-offset-2"
            target="_blank"
          > 
            Fisayo👨‍💻
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
