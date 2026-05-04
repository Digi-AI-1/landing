import Hero from "@/components/Hero";
import MetricsTicker from "@/components/MetricsTicker";
import Tecnologia from "@/components/Tecnologia";
import CasoReal from "@/components/CasoReal";
import ROICalculator from "@/components/ROICalculator";
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
        <div className="relative z-10 -mt-10">
          <MetricsTicker />
        </div>
        <Tecnologia />
        <CasoReal />
        <ROICalculator />
        <Servicios />
        <Nosotros />
        <PorQueElegirnos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
