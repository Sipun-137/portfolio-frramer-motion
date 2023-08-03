"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import React from "react";
import Axios from "axios";
// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Insights = () => {
  // const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const onSignup = async () => {
    try {
      const response = await Axios.post("/api/users/contact", user);
      console.log("message sent successfully" + response.data);
    } catch (error: any) {
      console.log("message not sent " + error.message);
      toast.error(error.message);
    }
  };
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[950px] w-full mx-auto flex flex-col gap-8"
      >
        <div className="rounded-lg p-6 text-white shadow-lg">
          <div className="flex justify-center">
            <h2 className="mb-4 text-4xl font-semibold uppercase">
              Contact Us
            </h2>
          </div>
          <form>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-400 "
                htmlFor="name"
              >
                {" "}
                Name{" "}
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white bg-black border-blue-400 focus:outline-none"
                id="name"
                type="text"
                placeholder="Name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-400"
                htmlFor="email"
              >
                {" "}
                Email{" "}
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white bg-black  border-blue-300 focus:outline-none"
                id="email"
                type="email"
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-400"
                htmlFor="message"
              >
                {" "}
                Message{" "}
              </label>
              <textarea
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white bg-black  border-blue-400 focus:outline-none"
                id="message"
                rows={4}
                placeholder="Enter your message here"
                onChange={(e) => setUser({ ...user, message: e.target.value })}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={onSignup}
                className="h-10 rounded-md border border-indigo-600 px-6 font-semibold uppercase text-white hover:border-sky-400"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
