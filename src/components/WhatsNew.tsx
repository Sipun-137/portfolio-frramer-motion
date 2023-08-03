'use client';

import { motion } from "framer-motion";
import { newFeatures } from "@/constants";
import { staggerContainer, fadeIn, planetVariants  } from "@/utils/motion";
import { TitleText, TypingText } from "./CustomTexts";
import NewFeatures from "./NewFeatures";


const WhatsNew = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
    variants={staggerContainer(0,0)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      
      <motion.div
      variants={fadeIn('left','tween',0.2,1)}
      className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| More About > > >"/>
        <TitleText title1="Skills ..."/>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature,index)=>(
           <NewFeatures key={index} {...feature}  /> 
          ))}
        </div>

      </motion.div>
      <motion.div
      variants={planetVariants('right')}
      className="flex-1 flex justify-center items-center"
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/whats-new.png" alt="getstarted "  className="w-[70%] h-[70%] object-contain"/>

      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
