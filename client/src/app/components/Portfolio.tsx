import Image from "next/image";
import TitleComp from "./TitleComp";
import { portfolioImages } from "../constants/constants";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Portfolio() {
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
            <Image
              id={item.name}
              key={idx}
              alt={item.name}
              className="rounded-lg  w-[240px] md:w-[280px]"
              src={item.img}
            />
          );
        })}
      </ScrollContainer>
    </section>
  );
}
