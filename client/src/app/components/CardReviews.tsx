import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CardReviewsProps {
  card: {
    avatar: StaticImport;
    name: string;
    position: string;
    review: string;
  };
}

const CardReviews: React.FC<CardReviewsProps> = ({ card }) => {
  return (
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
  );
};

export default CardReviews;
