import React from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedTextTwo = ({ text, className = "" }) => {
  const { ref, inView } = useInView();

  const quoteVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden' ref={ref}>
      <motion.h1 className={`inline-block w-full text-dark font-bold text-8xl ${className}`}
        variants={quoteVariants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      >
        {
          text.split("").map((word, index) =>
            <motion.span key={word + '-' + index} className='inline-block text-left'>
              {word}&nbsp;
            </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedTextTwo;
