import { chronologyCards } from "../constants/contant";
import TitleComp from "./TitleComp";

const Chronology = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-10">
      <TitleComp title="Хронология" titleId="Хронология" />
      <div className="flex flex-col gap-4">
        {chronologyCards.map((card) => (
          <div className="flex" key={card.id}>
            <div className="flex flex-col items-center mr- md:mr-6">
              <div className="flex flex-col items-center my-[6px] gap-2">
                <div className=" rounded-full bg-red-400 w-5 h-5 "></div>
                <div className="flex flex-col items-center text-[10px] md:text-xs font-light">
                  {card.data}
                </div>
              </div>
              <div className="border-r-2 h-[100%]"></div>
            </div>
            <section className="flex gap-2 md:gap-3 flex-col" id="tut">
              <div>
                <h2 className="text-base md:text-2xl font-bold leading-none">
                  {card.title}
                </h2>
                <h3 className="text-[10px] md:text-xs">#{card.typeWork}</h3>
              </div>
              <div className="flex gap-[5px] flex-wrap justify-stretch">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-[3px] py-[1px] md:px-[5px] md:py-[2px] text-xs md:text-[14px] rounded-[4px] bg-white text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-lg leading-tight">
                  <span className="font-black">Ключевая роль: </span>
                  {card.rols}
                </p>
                <p className="text-sm md:text-lg leading-tight">
                  <span className="font-black">Примеры задач: </span>
                  {card.task}
                </p>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chronology;
