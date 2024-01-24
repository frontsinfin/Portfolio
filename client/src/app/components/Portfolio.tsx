import TitleComp from "./TitleComp";

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:max-w-[75%]">
      <TitleComp title="Портфолио" titleId="Портфолио" />
      <div className="h-[600px] w-[300px] bg-slate-500 rounded-lg"></div>
    </div>
  );
};

export default Portfolio;
