import { chronologyCards } from "../constants/constants";
import DateChronology from "./DateChronology";
import RolsChronology from "./RolsChronology";
import TagsChronology from "./TagsChronology";
import TitleChronology from "./TitleChronology";
import TitleComp from "./TitleComp";
import UnfoldContainer from "./UnfoldContainer";

const Chronology = () => {
  return (
    <UnfoldContainer>
      <TitleComp title="Хронология" titleId="Хронология" />
      <div className="flex flex-col gap-4 items-start">
        {chronologyCards.map((card) => (
          <div className="grid grid-flow-col last-child" key={card.id}>
            <DateChronology data={card.data} />
            <section className="col-span-1 flex gap-2 md:gap-3 flex-col">
              <TitleChronology title={card.title} typeWork={card.typeWork} />
              <TagsChronology tags={card.tags} />
              <RolsChronology rols={card.rols} task={card.task} />
              {card.imagesPortfolio && (
                <a
                  className="text-sm font-light text-blue-400"
                  href={`#${card.id}`}
                >
                  смотреть в портфолио
                </a>
              )}
            </section>
          </div>
        ))}
      </div>
    </UnfoldContainer>
  );
};

export default Chronology;
