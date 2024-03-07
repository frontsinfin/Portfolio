"use client";
import Carousel from "./components/Carousel";
import Chronology from "./components/Chronology";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 sm:gap-10 md:gap-16 m-auto max-w-[1140px] px-2 md:px-6 py-8 md:py-16">
      <Header />
      <div className="flex gap-4 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-10 ">
          <Chronology />
          <Carousel />
        </div>
        <NavBar />
      </div>
    </main>
  );
}
