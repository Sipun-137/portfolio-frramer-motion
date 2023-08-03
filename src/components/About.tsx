"use client";

import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import {
  fadeIn,
  staggerContainer,
} from "@/utils/motion";
import React from "react";

const About: React.FC = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
    >
      <TypingText title="| About me " />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[25px] text-[15px] text-center text-[#b5cbd7]"
      >
        Welcome to my portfolio ! I am a passionate and skilled fullstack web developer and
        UI/UX designer, dedicated to creating exceptional digital experiences.
        With a strong foundation in front-end and back-end technologies, I bring
        websites to life by blending beautiful aesthetics with seamless
        functionality. As a web developer, I thrive on turning complex ideas
        into user-friendly and responsive designs. My proficiency in HTML, CSS,
        JavaScript,React and various frameworks empowers me to build interactive and
        engaging websites that leave a lasting impression on users. In the realm
        of UI/UX design, I possess an innate ability to understand user behavior
        and preferences, translating them into visually captivating and
        intuitive interfaces. My designs prioritize accessibility, usability,
        and a delightful user journey to ensure maximum engagement.
        My diverse skill set and keen eye for detail allow me to deliver
        projects that exceed client expectations and elevate their online
        presence. I am always excited to take on new challenges and collaborate
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        on projects that push the boundaries of creativity and innovation. Let's
        create something amazing together!
      </motion.p>
      <motion.img
      variants={fadeIn("up","tween",0.3,1)}
      src="/arrow-down.svg"
      alt="down"
      className="w-[18px] h-[28px] object-contain mt-[28px]"
      >
      </motion.img>
    </motion.div>
  </section>
);

export default About;
