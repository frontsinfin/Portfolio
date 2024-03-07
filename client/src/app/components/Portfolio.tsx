"use client";

import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Carousel from "./Carousel";

// const items = [
//   {
//     name: "landing",
//     description: "Description for first item",
//   },
//   {
//     name: "landing",
//     description: "Description for first item",
//   },
//   {
//     name: "landing",
//     description: "Description for first item",
//   },
// ];

export default function Portfolio() {
  // const duration: number = 5000;
  // const itemsRef = useRef<HTMLDivElement>(null);
  // const frame = useRef<number>(0);
  // const firstFrameTime = useRef(performance.now());
  // const [active, setActive] = useState<number>(0);
  // const [progress, setProgress] = useState<number>(0);
  // const items = [
  //   {
  //     id: 1,
  //     desc: "Omnichannel",
  //   },
  //   {
  //     id: 2,
  //     desc: "Multilingual",
  //   },
  //   {
  //     id: 3,
  //     desc: "Interpolate",
  //   },
  //   {
  //     id: 4,
  //     desc: "Enriched",
  //   },
  // ];

  // useEffect(() => {
  //   firstFrameTime.current = performance.now();

  //   return () => {
  //     cancelAnimationFrame(frame.current);
  //   };
  // }, [active]);

  // const heightFix = () => {
  //   if (itemsRef.current && itemsRef.current.parentElement)
  //     itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  // };

  // useEffect(() => {
  //   heightFix();
  // }, []);

  return (
    <div>
      {/* <div className="w-full mx-auto text-center">
       
        <div className="transition-all duration-150 delay-300 ease-in-out">
          <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-4 gap-4 mt-8">
            {items.map((item, index) => (
              <button
                key={index}
                className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
                onClick={() => {
                  setActive(index);
                  setProgress(0);
                }}
              >
                <span
                  className={`text-center flex flex-col items-center ${
                    active === index
                      ? ""
                      : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
                  }`}
                >
                  <span className="flex items-center justify-center relative w-9 h-9 rounded-xl bg-indigo-100 mb-2">
                    <div>next</div>
                  </span>
                  <span className="block text-sm font-medium text-slate-900 mb-2">
                    {item.desc}
                  </span>
                </span>
              </button>
            ))}
          </div>
         
          <div className="relative flex flex-col" ref={itemsRef}>
            {items.map((item, index) => (
              <Transition
                key={index}
                show={active === index}
                enter="transition ease-in-out duration-500 delay-200 order-first"
                enterFrom="opacity-0 scale-105"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in-out duration-300 absolute"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                beforeEnter={() => heightFix()}
              >
                <div className="w-[100%] aspect-[1/2] bg-purple-300 rounded-xl"></div>
              </Transition>
            ))}
          </div>
        </div>
      </div> */}
      <Carousel />
    </div>
  );
}
