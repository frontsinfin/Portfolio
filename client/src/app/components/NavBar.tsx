import Link from "next/link";
import { navBarButtons } from "../constants/constants";

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
        <Link
          key={button}
          href={`#${button}`}
          className="text-white hover:text-red-400 active:text-red-300 hover:bg-transparent  min-w-0 font-sans text-[18px] leading-[1.4] transition-colors"
        >
          {button}
        </Link>
      ))}
    </section>
  );
};

export default NavBar;
