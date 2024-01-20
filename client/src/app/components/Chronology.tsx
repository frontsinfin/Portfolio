import { chronologyCards } from "../constants/contant";

const Chronology = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:max-w-[75%]">
      <h1
        className="font-bold text-2xl sm:text-4xl text-center md:text-left"
        id="Хронология"
      >
        Хронология
      </h1>
      <div className="flex flex-col gap-4">
        {chronologyCards.map((card) => (
          <div className="flex" key={card.id}>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center my-[6px] gap-2">
                <div className=" rounded-full bg-red-400 w-4 h-4 mx-12 "></div>
                <div className="text-xs font-base">{card.data}</div>
              </div>
              <div className="text-xs font-base border-r-2 h-[100%]"></div>
            </div>
            <section
              className="text-xs sm:t ext-base flex gap-3 flex-col"
              id="tut"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold  md:leading-none">
                  {card.title}
                </h2>
                <h3 className="">#{card.typeWork}</h3>
              </div>
              <div className="flex gap-[5px]">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-[5px] py-[2px] text-[16px] rounded-[4px] bg-white text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg leading-tight">
                  <span className="font-semibold">Ключевая роль: </span>
                  {card.rols}
                </p>
                <p className="text-lg leading-tight">
                  <span className="font-semibold">Примеры задач: </span>
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
