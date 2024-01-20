import Chronology from "./components/Chronology";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-16 m-auto max-w-[1140px] px-6 py-8 md:py-16">
      <Header />
      <div className="flex">
        <div className="flex flex-col gap-6">
          <Chronology />
          <Portfolio />
        </div>
        <NavBar />
      </div>
    </main>
  );
}
