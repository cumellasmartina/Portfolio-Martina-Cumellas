/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  DevicePhoneMobileIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-lightgray text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10 text-white">
        <h4 className="text-4xl font-semibold text-center">
          Could I have what you are looking for?{" "}
          <span className="  text-[#FB8500]"> Let's put in touch!</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <DevicePhoneMobileIcon className="text-[#FB8500] h-7 w-7 animate-pulse"></DevicePhoneMobileIcon>
            <p className="text-2xl">+34 625976435</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#FB8500] h-7 w-7 animate-pulse"></MapPinIcon>
            <p className="text-2xl">Barcelona, Spain</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <InboxArrowDownIcon className="text-[#FB8500] h-7 w-7 animate-pulse"></InboxArrowDownIcon>
            <p className="text-2xl">cumellasmartina@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
