import { Button } from "@mui/material";
import { navBarButtons } from "../constants/contants";

const NavBar = () => {
  return (
    <section
      className="
    items-start
    sticky
    top-[20px]
    hidden 
    md:flex 
    h-[100%]
    flex-col 
    border-solid 
    border-l-2 
    border-l-white 
    px-4
    py-4
    "
    >
      {navBarButtons.map((button) => (
        <Button
          key={button}
          variant="text"
          href={`#${button}`}
          className="normal-case text-white p-0 hover:text-red-400 hover:bg-transparent  min-w-0 font-sans text-[16px] leading-[1.5]"
        >
          {button}
        </Button>
      ))}
    </section>
  );
};

export default NavBar;
