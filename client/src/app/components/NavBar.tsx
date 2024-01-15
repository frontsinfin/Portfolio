import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <div className="fixed left-[80%] hidden md:flex flex-col border-solid border-l-2 border-l-white p-4">
      <Button variant="text" href="#" className=" text-white p-0">
        Приветствие
      </Button>
      <a href="#">Приветствие</a>
      <a href="#">Хронология</a>
      <a href="#">Портфолио</a>
      <a href="#">Инструменты</a>
      <a href="#">Отзывы</a>
      <a href="#">Контакты</a>
    </div>
  );
};

export default NavBar;
