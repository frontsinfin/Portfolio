import Portfolio from "./components/Portfolio";
import Chronology from "./components/Chronology";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Tools from "./components/Tools";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 m-auto max-w-[1140px] px-4 md:px-6 py-20 md:py-16">
      <Header />
      <div className="flex gap-4 md:gap-8">
        <div className="flex flex-col gap-16 md:gap-16 w-full md:w-[75%] lg:w-[80%]">
          <Chronology />
          <Portfolio />
          <Tools />
          <Reviews />
        </div>
        <NavBar />
      </div>
    </main>
  );
}
