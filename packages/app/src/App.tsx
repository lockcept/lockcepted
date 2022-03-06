import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";
import Developer from "./Developer";
import Gamer from "./Gamer";

export default function App() {
  return (
    <div className="bg-white text-3xl md:text-5xl text-black text-center">
      <main>
        <Hero />
        <About />
        <Developer />
        <Gamer />
      </main>
      <Footer />
    </div>
  );
}
