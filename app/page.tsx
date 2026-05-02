import Hero from "@/components/Hero";
import Tecnologia from "@/components/Tecnologia";
import CasoReal from "@/components/CasoReal";
import Servicios from "@/components/Servicios";
import Nosotros from "@/components/Nosotros";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tecnologia />
        <CasoReal />
        <Servicios />
        <Nosotros />
        <PorQueElegirnos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
