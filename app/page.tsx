import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Live from "@/components/Live";
import Teachings from "@/components/Teachings";
import Prayer from "@/components/Prayer";
import Events from "@/components/Events";
import Give from "@/components/Give";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Live />
      <Teachings />
      <Prayer />
      <Events />
      <Give />
      <Connect />
      <Footer />
    </main>
  );
}
