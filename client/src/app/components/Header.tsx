import Image from "next/image";
import avatar from "../../../public/avatar.jpg";
import { social } from "../constants/constants";
import TitleComp from "./TitleComp";

const Header = () => {
  return (
    <header className="gap-6 lg:gap-20 flex items-center flex-col-reverse md:flex-row">
      <section className="md:w-[70%] col-span-2 flex flex-col gap-2 md:gap-3 md:py-4">
        <h1 className="text-center md:text-start text-4xl md:text-6xl font-bold">
          Галемов Иван
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-[14px] md:text-base text-center md:text-left">
            Я web-разработчик из Санкт-Петербурга. На данном этапе жизни...
            Стремлюсь взять на себя больше интересных проектов и повысить свои
            навыки разработчика.Стремлюсь взять на себя больше интересных
            проектов и повысить свои навыки разработчика.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {social.map((icon, idx) => (
              <a key={idx} className="cursor-pointer">
                <Image src={icon} alt={icon} className="w-7 h-7 hover-icon" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className=" flex items-center overflow-hidden w-[200px] h-[200px] md:min-h-[250px] md:min-w-[250px] lg:min-h-[300px] lg:min-w-[300px] rounded-full">
        <Image src={avatar} alt="avatar"></Image>
      </div>
    </header>
  );
};

export default Header;
