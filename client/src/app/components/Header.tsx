import Image from "next/image";
import avatar from "../../../public/avatar.jpg";
import { social } from "../constants/icons";
import TitleComp from "./TitleComp";

const Header = () => {
  return (
    <header className="gap-6 lg:gap-20 flex items-center flex-col-reverse md:flex-row">
      <div className="md:w-[70%] col-span-2 flex flex-col gap-2 md:gap-3 md:py-4">
        <TitleComp title="Галемов Иван" titleId="Приветствие" />
        <p className="text-[14px] md:text-base text-center md:text-left">
          Я web-разработчик из Санкт-Петербурга. На данном этапе жизни...
          Стремлюсь взять на себя больше интересных проектов и повысить свои
          навыки разработчика.Стремлюсь взять на себя больше интересных проектов
          и повысить свои навыки разработчика.
        </p>
        <div className="flex gap-2 justify-center md:justify-start">
          {social.map((icon, idx) => (
            <a key={idx}>
              <Image src={icon} alt={icon} />
            </a>
          ))}
        </div>
      </div>
      <div className=" flex items-center overflow-hidden w-[150px] h-[150px] md:h-[250px] md:w-[250px] rounded-full">
        <Image src={avatar} alt="avatar"></Image>
      </div>
    </header>
  );
};

export default Header;
