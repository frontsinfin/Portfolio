import { Button } from "@mui/material";

const buttons = [
  "Приветствие",
  "Хронология",
  "Портфолио",
  "Инструменты",
  "Отзывы",
  "Контакты",
];

const NavBar = () => {
  return (
    <div
      className="
    items-start
    fixed
    hidden 
    right-[5%]
    xl:right-[15%]
    2xl:right-[23%]
    md:flex 
    flex-col 
    border-solid 
    border-l-2 
    border-l-white 
    p-4
    "
    >
      {buttons.map((button) => (
        <Button
          key={button}
          variant="text"
          href={`#${button}`}
          className=" text-white p-0 hover:text-red-400 hover:bg-transparent"
        >
          {button}
        </Button>
      ))}
    </div>
  );
};

export default NavBar;
