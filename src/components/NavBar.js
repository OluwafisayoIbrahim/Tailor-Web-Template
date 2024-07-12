import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
  TikTokIcon,
  DarkModeLogo,
  LightHomeIcon,
  DarkHomeIcon,
  LightAboutIcon,
  DarkAboutIcon,
  LightCollectionIcon,
  DarkCollectionIcon,
  LightContactIcon,
  DarkContactIcon,
} from "./Icons";
import { motion } from "framer-motion";
import ThemeSwitcher from "./hooks/ThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-black absolute left-1/2 bottom-0.5 transform -translate-x-1/2 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-white`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle, IconLight, IconDark, mode }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group flex items-center text-white dark:text-black my-2`}
      onClick={handleClick}
    >
      <span className="mr-0.5 flex items-center">
        {IconLight && IconDark && (mode === 'dark' ? <IconDark /> : <IconLight />)}
      </span>
      {title}

      <span
        className={`h-[1px] inline-block bg-white absolute left-1/2 bottom-0.5 transform -translate-x-1/2 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-black`}
      >
        &nbsp;
      </span>
    </button>
  );
};


const NavBar = () => {
  const [mode, setMode] = ThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between text-dark
    dark:text-white relative z-10 lg:px-16 md:px-12 sm:px-8
    "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="-ml-10 xl:-mx-12">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/About" title="About" className="mx-4" />
          <CustomLink
            href="/Collections"
            title="Collections"
            className="mx-4"
          />
          <CustomLink href="/Contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center -mr-12 flex-wrap">
          <motion.a
            href="https://x.com/tutoredoutfits"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/tutoredofficial/?igsh=MTc5YW12dW1lbmlxOA%3D%3D"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@tutored_?_t=8nlkJwn64lq&_r=1"
            target={"_blank"}
            className="w-7  mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TikTokIcon />
          </motion.a>

          <motion.button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-black"} />
            ) : (
              <MoonIcon className={"fill-black"} />
            )}
          </motion.button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          ref={navbarRef}
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-black/90 dark:bg-white/70 rounded-lg backdrop-blur-md py-32 
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
              IconLight={DarkHomeIcon}
              IconDark={LightHomeIcon}
              mode={mode}
            />
            <CustomMobileLink
              href="/About"
              title="About"
              className=""
              toggle={handleClick}
              IconLight={LightAboutIcon}
              IconDark={DarkAboutIcon}
              mode={mode}
            />
            <CustomMobileLink
              href="/Collections"
              title="Collections"
              className=""
              toggle={handleClick}
              IconLight={LightCollectionIcon}
              IconDark={DarkCollectionIcon}
              mode={mode}
            />
            <CustomMobileLink
              href="/Contact"
              title="Contact"
              className=""
              toggle={handleClick}
              IconLight={LightContactIcon}
              IconDark={DarkContactIcon}
              mode={mode}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://x.com/tutoredoutfits"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/tutoredofficial/?igsh=MTc5YW12dW1lbmlxOA%3D%3D"
              target={"_blank"}
              className="w-6 mx-3 dark:bg-black rounded-md"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@tutored_?_t=8nlkJwn64lq&_r=1"
              target={"_blank"}
              className="w-7  mx-3 dark:bg-black rounded-md"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TikTokIcon />
            </motion.a>
            <motion.button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`absolute top-0 right-0 mt-2 mr-2 flex items-center justify-center rounded-full p-1 
        ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}
        xl:w-16 xl:h-16 xl:p-2
        lg:w-12 lg:h-12 lg:p-1
        md:w-10 md:h-10 md:p-1
        sm:w-8 sm:h-8 sm:p-1
        xs:w-6 xs:h-6 xs:p-1`}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-black" />
              ) : (
                <MoonIcon className="fill-black" />
              )}
            </motion.button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] xl:mx-7 md:mx-3">
        <Logo mode={mode} />
      </div>
    </header>
  );
};

export default NavBar;
