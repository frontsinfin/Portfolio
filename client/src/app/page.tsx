import Chronology from "./components/Chronology";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-16 m-auto max-w-[1140px] px-6 py-8 md:py-16">
      <Header />
      <div className="md:grid grid-cols-5 ">
        <div className="col-span-4">
          <Chronology />
        </div>
        <NavBar />
      </div>
    </main>
  );
}
