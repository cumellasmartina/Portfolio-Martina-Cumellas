import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 py-3 flex items-start justify-between max-w-full px-10 z-20 xl:items-center bg-[#424043]">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/martina-cumellas/"
          fgColor="lightgray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/cumellasmartina"
          fgColor="lightgray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="lightgray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-lightgray">
            Reach me!
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
