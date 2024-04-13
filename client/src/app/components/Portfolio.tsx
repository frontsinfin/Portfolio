"use client";
import Image from "next/image";
import TitleComp from "./TitleComp";
import { portfolioImages } from "../constants/constants";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useState } from "react";
import closeIcon from "../../../public/icons/close.svg";
import Link from "next/link";

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
        {portfolioImages.map((slide, slideIdx) => {
          return (
            <>
              <Image
                priority
                onClick={() => clickOpenImage(slideIdx)}
                id={slide.name}
                alt={slide.name}
                src={slide.preview}
                className="portfolio_preview"
              />
              {isOpen === slideIdx && (
                <div className="case_opacity" onClick={clickCloseImage}>
                  {slide.case.map((caseItem, caseItemIdx) => (
                    <Image
                      className="case_image"
                      onClick={(e) => e.stopPropagation()}
                      key={caseItemIdx}
                      priority
                      src={caseItem}
                      alt="item"
                    />
                  ))}
                  <Image className="case_close" src={closeIcon} alt="x" />
                </div>
              )}
            </>
          );
        })}
      </ScrollContainer>
    </section>
  );
}
