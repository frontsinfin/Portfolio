import Link from "next/link";
import { navBarButtons } from "../constants/constants";

const NavBar = () => {
  return (
    <section
      className="
    items-start
    sticky
    top-[40px]
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
        <a
          key={button}
          href={`#${button}`}
          className="text-white hover:text-[#0085FF] active:text-[#60B2FF] hover:bg-transparent  min-w-0 font-sans text-[18px] leading-[1.4] transition-colors"
        >
          {button}
        </a>
      ))}
    </section>
  );
};

export default NavBar;
