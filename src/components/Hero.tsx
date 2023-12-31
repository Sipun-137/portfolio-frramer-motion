"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  
  <section
    className={`sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6`}
  >
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col `}
    >
      <div className=" flex flex-col justify-center items-center relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white`}>
          subhranshu
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center "
        >
          <h3 className={`font-bold lg:text-[84px] md:text-[70px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-white uppercase`}>fullstack Web Developer</h3>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] "
        >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[300px] object-cover rounded-tl-[140px] z-0 relative"
            />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
            </div>
          </a>
        
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
