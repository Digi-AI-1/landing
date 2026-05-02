import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Nosotros from "@/components/Nosotros";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <PorQueElegirnos />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
