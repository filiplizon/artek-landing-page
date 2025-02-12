import Home from "./components/pages/Home";

import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import { Navigation } from "./components/organisms/Navigation";
import { Footer } from "./components/organisms/Footer";
import Services from "./components/pages/Services";
import WhyWe from "./components/organisms/WhyWe";

export default function Main() {
  return (
    <div className="font-sans antialiased flex flex-col items-center w-full">
      <header>
        <Navigation />
      </header>
      <Home />
      <main className="w-full">
        <Services />
        <WhyWe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
