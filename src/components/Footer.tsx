"use client";
import { motion } from "framer-motion";
import { socials } from "@/constants";
import { footerVariants } from "@/utils/motion";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className=" sm:p-16 xs:p-8 px-6 py-8 relative"
  >
    <div className="footer-gradient" />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Programming World!
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25168b] rounded-[32px] gap-[12px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            <Link href={"https://github.com/Sipun-137"}>Enter to the World of developers.</Link>
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb:[50px] h-[4px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* <h4 className="font-extrabold text-[24px] text-white ">SIPUN</h4> */}
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023-2025 Sipun. All rights reserverd.
          </p>
          <div className="flex gap-4">
            {socials.map((social)=>(
              // eslint-disable-next-line react/jsx-key
              <Link href={social.link}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={social.url} alt={social.name} key={social.name} 
              className="w-[24px] h-[24px] object-contain cursor-pointer"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
