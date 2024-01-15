import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { icons } from "../constant/icons";

const Header = () => {
  return (
    <header className="gap-10 lg:gap-20 flex items-center flex-col-reverse md:flex-row">
      <div className="md:w-[70%] col-span-2 flex flex-col gap-2 md:gap-4 md:py-4">
        <h1 className="font-bold text-2xl sm:text-4xl text-center md:text-left">
          Галемов Иван
        </h1>
        <p className="text-xs sm:text-base text-center md:text-left">
          Я web-разработчик из Санкт-Петербурга. На данном этапе жизни...
          Стремлюсь взять на себя больше интересных проектов и повысить свои
          навыки разработчика.Стремлюсь взять на себя больше интересных проектов
          и повысить свои навыки разработчика.
        </p>
        <div className="flex gap-2 justify-center md:justify-start">
          {icons.map((icon) => (
            <a>
              <Image src={icon} alt={icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center w-[150px] md:w-[250px]">
        <Image
          className="overflow-hidden rounded-full "
          src={avatar}
          alt="avatar"
        ></Image>
      </div>
    </header>
  );
};

export default Header;
