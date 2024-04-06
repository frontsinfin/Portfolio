"use client";
import TitleComp from "./TitleComp";
import ScrollContainer from "react-indiana-drag-scroll";
import { reviewsCards } from "../constants/constants";
import CardReviews from "./CardReviews";

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
          <CardReviews key={card.name} card={card} />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Reviews;
