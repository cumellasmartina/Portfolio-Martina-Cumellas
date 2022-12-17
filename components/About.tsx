/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import me from "../img/me.jpg";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#7d7c7c] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={me.src}
        className=" object-cover rounded-full w-60 h-60 -mb-20 md:mb-0 flex-shrink-0 md:rounded-full md:w-80 md:h-80"
      />

      <div className="space-y-10 px-0 md:px-10 text-white">
        <h4 className="text-4xl font-semibold"> A bit of me...</h4>
        <p className="text-base">
          I'm Martina.👋🏼 I've been passionate about software development,
          graphic design and UI design for a while now! I have worked on several
          projects and created multiple full-stack web application with
          technologies such as React, TypeScript, TailwindCss... All my work
          performed in a team is driven by empathy and creating meaningful human
          connections. Furthermore, when facing any given scenario, I enjoy
          creating alternative ways to proceed and perform strategic analysis.💡
          I can quickly spot relevant patterns and issues and make conclusions
          in order to achieve excellence and effectiveness. 🚀 I could spend my
          whole day researching and designing new apps in Figma, whilst
          listening to LoFi music and drinking Cacaolat!🧋
        </p>
      </div>
    </motion.div>
  );
}
