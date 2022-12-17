import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi! This is Martina!", "It is a pleasure to see you here. Enjoy!"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="custom-img h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-center bg-cover">
      <div className="z-20 flex flex-col ">
        <h2 className="text-sm uppercase text-gray pb-5 tracking-[10px] ">
          Software Engineer & UI Designer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-medium pt-1 text-[#fb8500]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#7c747b"></Cursor>
        </h1>
      </div>

      <div className="pt-5 text-[#7d7c7c] ">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
