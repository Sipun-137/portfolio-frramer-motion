"use client";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`sm:px-16 p-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" /> */}
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">SIPUN</h2>
        <Link href={"https://read.cv/kumarsipun_137"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain"/> */}
        </Link>
      </div>
    </motion.nav>
  );
};
export default Navbar;
