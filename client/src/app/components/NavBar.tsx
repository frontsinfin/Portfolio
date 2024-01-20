import { Button } from "@mui/material";
import { navBarButtons } from "../constants/contant";

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
    justify-start
    "
    >
      {navBarButtons.map((button) => (
        <Button
          key={button}
          variant="text"
          href={`#${button}`}
          className="normal-case text-white p-0 hover:text-red-400 hover:bg-transparent  min-w-0 font-sans text-lg"
        >
          {button}
        </Button>
      ))}
    </div>
  );
};

export default NavBar;
