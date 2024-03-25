import { chronologyCards } from "../constants/contants";
import TitleComp from "./TitleComp";

const Chronology = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-10">
      <TitleComp title="Хронология" titleId="Хронология" />
      <div className="flex flex-col gap-4 items-start">
        {chronologyCards.map((card) => (
          <div className="grid grid-flow-col last-child" key={card.id}>
            {/* дата хронологии */}
            <div className="col-span-1 flex flex-col items-center mr-3 md:mr-6 w-[42px] md:w-[60px]">
              <div className="flex flex-col items-center my-[6px] gap-2">
                {/* точка*/}
                <div className=" rounded-full bg-red-400 w-3 h-3 md:w-4 md:h-4 "></div>
                {/* дата*/}
                <div className="flex flex-col items-center text-[10px] md:text-xs font-light max-w-min text-center">
                  {card.data}
                </div>
              </div>
              {/* линия */}
              <div className="last:bg-white border-r-2 h-[100%] line"></div>
            </div>
            {/* контент */}
            <section
              className="col-span-1 flex gap-2 md:gap-3 flex-col"
              id="tut"
            >
              <div>
                {/* заголовок */}
                <h2 className="text-[20px] md:text-2xl font-bold leading-none">
                  {card.title}
                </h2>
                {/* тип занятия */}
                <h3 className="text-[10px] md:text-xs">#{card.typeWork}</h3>
              </div>
              {/* теги */}
              <div className="flex gap-[5px] flex-wrap justify-stretch">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-[3px] py-[1px] md:px-[5px] md:py-[2px] text-[10px] md:text-xs rounded-[4px] bg-white text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* роли */}
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
    </section>
  );
};

export default Chronology;
