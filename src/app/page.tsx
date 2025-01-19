import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export default function Main() {
  return (
    <div className="font-sans antialiased flex flex-col items-center w-full">
      <header>
        <Navigation />
      </header>
      <main className="max-w-[1230px]">
        <Home />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
