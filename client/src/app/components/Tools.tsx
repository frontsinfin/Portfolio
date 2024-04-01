import Image from "next/image";
import { tools } from "../constants/constants";
import TitleComp from "./TitleComp";

const Tools = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-10">
      <TitleComp title="Инструменты" titleId="Инструменты" />
      <div className="flex gap-x-4 gap-y-1 md:gap-x-6 md:gap-y-2 flex-wrap justify-center md:justify-start">
        {tools.map((tool) => (
          <div key={tool.name} className="flex gap-1 md:gap-2 items-center">
            <span className="text-red-400 text-xl md:text-2xl font-bold ">
              {tool.name}
            </span>
            <Image
              className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
              src={tool.icon}
              alt={tool.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
