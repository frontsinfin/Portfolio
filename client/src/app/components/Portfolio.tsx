"use client";
import TitleComp from "./TitleComp";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
];

const Portfolio = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col gap-4 md:gap-8 overflow-hidden">
      <TitleComp title="Портфолио" titleId="Портфолио" />
      <Carousel itemPadding={[5, 5]} outerSpacing={0} breakPoints={breakPoints}>
        {items.map((item) => (
          <div className="bg-slate-500 w-[300px] h-[600px] rounded-lg">
            {item}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
