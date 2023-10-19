import React ,{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CodeBox from './CodeBox';
import girlImage from '../assets/girl.png';
import ScrollDownArrow from './ScrollDownArrow';


function IntroPage() {

  const [headerText, setHeaderText] = useState("<Vivek/>");
  const isVivek = headerText === "<Vivek/>";

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderText(isVivek ? "<creator_79/>" : "<Vivek/>");
    }, 1000);

    return () => clearInterval(interval);
  }, [isVivek]);

  const textAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    
  };

  return (
    <>
      <div className='flex items-center justify-center p-32'>
      <motion.a
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          href="#"
          className={`font-pacifico font-bold absolute top-8 right-12 text-3xl ${isVivek ? 'text-pink-300' : 'text-blue-300'}`}>
          {headerText}
        </motion.a>
        <motion.div className='top-10 w-96 h-96 bg-blue-400 rounded-full filter blur-2xl opacity-50 animate-blob'></motion.div>
        <motion.div className='absolute top-36 w-96 h-96 bg-pink-500 rounded-full filter blur-2xl opacity-50 animate-blob'></motion.div>
        <motion.div className='top-10 w-96 h-96 bg-pink-600 rounded-full filter blur-2xl opacity-50 animate-blob'></motion.div>
        <div className='absolute flex flex-col justify-center px-24'>
          <img src="https://media.tenor.com/z2xJqhCpneIAAAAC/wave-hand.giff" className='w-10 mix-blend-color-burn' />
          <h3 className='text-4xl text-white'>Hey, I'm</h3>
          <h1 className='text-7xl font-bold text-white'>Vivek Upadhyay</h1>
          <div className='my-6'></div>
          <CodeBox code='npx hi-vivek' />
         

        </div>
      </div>

      <div className='hidden md:block'>
        <img src={girlImage} className='absolute bottom-0 left-0' /></div>

      <ScrollDownArrow />
    </>
  );
}

export default IntroPage;

