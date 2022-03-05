import Hero from "./Hero";
import Footer from "./Footer";
import About from "./About";
import Developer from "./Developer";
import Gamer from "./Gamer";

export default function App() {
  return (
    <div className="bg-white">
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
