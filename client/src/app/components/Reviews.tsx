import Image from "next/image";
import TitleComp from "./TitleComp";
import ScrollContainer from "react-indiana-drag-scroll";
import { reviewsCards } from "../constants/contants";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-10">
      <TitleComp title="Отзывы" titleId="Отзывы" />
      <ScrollContainer
        className="scroll-container flex gap-2 cursor-grab active:cursor-grabbing scrollbar"
        hideScrollbars={false}
        nativeMobileScroll
      >
        {reviewsCards.map((card) => (
          <div className="flex text-black snap-center gap-2 bg-white flex-col items-center p-4 md:p-6 rounded-md min-w-[240px] md:min-w-[280px]">
            <Image
              className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full"
              src={card.avatar}
              alt={card.name}
            />
            <div className="flex flex-col items-center ">
              <h4 className="font-bold text-sm md:text-base">{card.name}</h4>
              <div className="text-[10px] md:text-xs">{card.position}</div>
            </div>
            <p className="text-sm md:text-base text-center font-medium">
              {card.review}
            </p>
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Reviews;
