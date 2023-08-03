'use client';
import { motion } from "framer-motion";
import { staggerContainer,  fadeIn, zoomIn } from "@/utils/motion";
import Link from "next/link";
const Details = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
    variants={fadeIn("up", "spring", 0.5, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className="2xl:max-w-[1280px] w-full mx-auto flex flex-wrap justify-between gap-8 text-white "
    >  
      
      <button className="h-10 rounded-md border border-sky-300 px-6 font-semibold uppercase text-white hover:border-sky-400">
        <Link href="https://read.cv/kumarsipun_137">resume</Link>
      </button>
      <button className="h-10 rounded-md border border-sky-300 px-6 font-semibold uppercase text-white hover:border-sky-400">
      <Link href="https://github.com/Sipun-137">Projects</Link>
      </button>
      
    </motion.div>
  </section>
);

export default Details;
