"use client";
import Image from "next/image";
import avatar from "../../../public/avatar.jpg";
import { contacts } from "../constants/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [hiddenPhone, setHiddenPhone] = useState(true);

  const clickPhone = (e: string) => {
    setHiddenPhone(false);
    navigator.clipboard.writeText(e);
    setTimeout(() => {
      setHiddenPhone(true);
    }, 1500);
  };
  const stylesLink =
    "flex gap-2 cursor-pointer hover:opacity-100 active:opacity-100 md:hover:opacity-70 md:active:opacity-50 transition-opacity";
  return (
    <header className="gap-6 lg:gap-20 flex items-center flex-col-reverse md:flex-row">
      <section className="md:w-[70%] col-span-2 flex flex-col gap-2 md:gap-3 md:py-4">
        <h1 className="text-center md:text-start text-4xl md:text-[52px] font-bold">
          Галемов Иван
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-[14px] md:text-base text-center md:text-left">
            Я дизайнер и web-разработчик из Санкт-Петербурга. На данном этапе
            жизни cтремлюсь взять на себя больше интересных проектов и повысить
            свои навыки разработчика.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {contacts.map((social) => (
              <div key={social.id}>
                {social.id === "phone" ? (
                  <button
                    className={stylesLink}
                    onClick={() => clickPhone(social.link)}
                  >
                    <Image
                      src={social.icon}
                      alt={social.id}
                      className={`w-7 h-7 hover-icon block`}
                    />
                    <span
                      className="transition-opacity opacity-100 fixed top-[92%] right-5 bg-[#302727] py-[4px] px-2 rounded-md border-white border-[1px] z-20"
                      style={{ opacity: hiddenPhone ? 0 : 1 }}
                    >
                      скопировано!
                    </span>
                  </button>
                ) : (
                  <a target="_blank" href={social.link} className={stylesLink}>
                    <Image
                      src={social.icon}
                      alt={social.id}
                      className="w-7 h-7 hover-icon"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className=" flex items-center overflow-hidden w-[240px] h-[240px] md:min-h-[250px] md:min-w-[250px] lg:min-h-[300px] lg:min-w-[300px] rounded-full">
        <Image src={avatar} alt="avatar"></Image>
      </div>
    </header>
  );
};

export default Header;
