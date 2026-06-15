import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import ParallaxBanner from "@/components/ParallaxBanner";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <ParallaxBanner />
        <Products />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
