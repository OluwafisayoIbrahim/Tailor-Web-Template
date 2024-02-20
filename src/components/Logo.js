import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DarkModeLogo, LightModeLogo } from "./Icons";

const MotionLink = motion(Link);

const Logo = ({ mode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(mode === "dark");
  }, [mode, isDarkMode])

  return (
    <div className="-mt-10 ml-4 w-27 h-27 flex items-center justify-center">
      {isDarkMode ? <DarkModeLogo /> : <LightModeLogo />}
    </div>
  );
};

export default Logo;
