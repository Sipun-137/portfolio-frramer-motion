'use client';

import { motion } from "framer-motion";
import { TitleText, TypingText } from "./CustomTexts";
import {staggerContainer} from "@/utils/motion";
import ExploreCard from "./ExploreCard";
import {useState} from "react";
import { exploreWorlds } from "@/constants";

const Explore = () => {

   const [active, setactive] = useState("world-2")

return (

  <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
    <motion.div
    variants={staggerContainer(0,0)}
    initial='hidden'
    whileInView="show"
    viewport={{ once: false,amount:0.25 }}
    className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <TypingText title=" | Projects > > >"/>
      <TitleText title1={"Choose the project you want to explore"}/>
  <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
    {exploreWorlds.map((world,index)=>(
      <ExploreCard key={world.id} {...world} index={index} active={active} link={world.link} handleClick={setactive}/>
    ))}

  </div>
    </motion.div>
    
  </section>
);

    }
export default Explore;
