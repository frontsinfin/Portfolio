"use client";
import Image from "next/image";
import TitleComp from "./TitleComp";
import { portfolioImages } from "../constants/constants";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useState } from "react";
import closeIcon from "../../../public/icons/close.svg";

export default function Portfolio() {
  const [valueSlide, setValueSlide] = useState(true);
  const [isOpen, setIsOpen] = useState<null | number>(null);
  const clickOpenImage = (idx: null | number) => {
    setValueSlide(false);
    setIsOpen(idx);
    console.log(valueSlide);
  };

  const clickCloseImage = () => {
    setValueSlide(true);
    setIsOpen(null);
    console.log(valueSlide);
  };
  useEffect(() => {
    if (!valueSlide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [valueSlide]);

  return (
    <section className="flex flex-col gap-4 md:gap-10">
      <TitleComp title="Портфолио" titleId="Портфолио"></TitleComp>
      <ScrollContainer
        className="scroll-container flex gap-2 cursor-grab active:cursor-grabbing scrollbar"
        hideScrollbars={false}
        nativeMobileScroll
      >
        {portfolioImages.map((item, idx) => {
          return (
            <div
              key={item.name}
              className={`portfolio_container ${
                isOpen === idx ? "portfolio_container__active" : ""
              }`}
            >
              <Image
                priority
                onClick={() => clickOpenImage(idx)}
                id={item.name}
                alt={item.name}
                className={`portfolio_image ${
                  isOpen === idx ? "portfolio_image__active" : ""
                }`}
                src={isOpen === idx ? item.full : item.preview}
              />
              <Image
                alt="x"
                src={closeIcon}
                onClick={clickCloseImage}
                className={`portfolio_close ${
                  isOpen === idx ? "portfolio_close__active" : ""
                }`}
              />
            </div>
          );
        })}
      </ScrollContainer>
    </section>
  );
}
