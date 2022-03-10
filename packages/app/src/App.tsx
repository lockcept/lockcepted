import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";
import Developer from "./Developer";
import Gamer from "./Gamer";
import smoothscroll from "smoothscroll-polyfill";

function Divider() {
  return (
    <div className="w-full h-1 px-[10%]">
      <div className="bg-green-200 w-full h-full rounded-full" />
    </div>
  );
}

smoothscroll.polyfill();

export default function App() {
  return (
    <div className="bg-white text-3xl md:text-5xl text-black text-center">
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Developer />
        <Divider />
        <Gamer />
      </main>
      <Footer />
    </div>
  );
}
