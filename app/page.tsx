import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <FeaturedProjects />
        <Process />
        <Services />
      </main>
      <Footer />
    </>
  );
}
