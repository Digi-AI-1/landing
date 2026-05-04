import Hero from "@/components/Hero";
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

      {/* Global ambient orbs — fixed behind all sections, no section boundary cuts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-48 -right-48 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(91,160,255,0.09) 0%, rgba(91,160,255,0.03) 45%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-48 -left-48 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,216,240,0.07) 0%, rgba(52,216,240,0.02) 45%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(91,160,255,0.04) 0%, transparent 65%)" }}
        />
      </div>

      <main>
        <Hero />
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
