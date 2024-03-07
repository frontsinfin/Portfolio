import { useState } from "react";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";
import TitleComp from "./TitleComp";
import { portfolioImages } from "../constants/contants";

export default function Carousel() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(portfolioImages.length - 3);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === portfolioImages.length - 3) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <TitleComp title="Портфолио" titleId="Портфолио"></TitleComp>
        <div className="flex gap-2 items-center">
          <button
            className="border-solid border-[1px] border-white rounded-md p-2 w-[30px] h-[30px]"
            onClick={previousSlide}
          >
            <Image src={arrow} width={12} height={12} alt="<" />
          </button>
          <button
            className="border-solid border-[1px] border-white rounded-md p-2 w-[30px] h-[30px]"
            onClick={nextSlide}
          >
            <Image
              className="rotate-180"
              src={arrow}
              width={12}
              height={12}
              alt="<"
            />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className={`flex transition ease-out duration-40`}
          style={{
            transform: `translateX(-${current * 33.333}%)`,
          }}
        >
          {portfolioImages.map((image) => {
            return (
              <Image
                alt={image}
                className="w-[33.333%] rounded-lg p-1"
                src={image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
