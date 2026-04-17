import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => (
  <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
    </div>

    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
            Desde 2015 en Lima, Perú
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-balance text-foreground">
            Virtual Assistance Perú:{" "}
            <span className="text-primary">Consultoría y ERP</span> para tu Éxito Empresarial
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Soluciones en gestión informática, instalaciones, software ERP. Cumple SUNAT. Soporte en Surquillo, Lima.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#servicios">
                <Play size={16} className="mr-1" /> Ver Servicios
              </a>
            </Button>
          </div>
          {/* Trust badges */}
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" /> RUC Activo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" /> +8 años
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" /> SUNAT Habilitado
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="relative">
            <img
              src={heroDashboard}
              alt="Dashboard ERP de Virtual Assistance Perú mostrando módulos de gestión empresarial"
              width={1024}
              height={768}
              className="w-full h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
