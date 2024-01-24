import { Button } from "@mui/material";
import { navBarButtons } from "../constants/contant";

const NavBar = () => {
  return (
    <div
      className="
    items-start
    sticky
    top-[20px]
    hidden 
    md:flex 
    h-[200px]
    flex-col 
    border-solid 
    border-l-2 
    border-l-white 
    p-4
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
