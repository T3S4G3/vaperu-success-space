import { Monitor, Code, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    title: "Consultoría Informática y Gestión de Instalaciones",
    desc: "Asesoría experta en TI: diagnóstico, planificación e implementación de infraestructura tecnológica para tu empresa.",
    tags: ["CIIU 6202", "TI", "Infraestructura"],
  },
  {
    icon: Code,
    title: "Otras Actividades de Tecnología",
    desc: "Desarrollo de software a medida, sistemas ERP personalizados y servicios informáticos avanzados para tu negocio.",
    tags: ["CIIU 6209", "Software", "Desarrollo"],
  },
  {
    icon: BarChart3,
    title: "ERP Integral",
    desc: "Sistema completo: compras, ventas, contabilidad, inventarios. Todo integrado en una sola plataforma eficiente.",
    tags: ["Compras", "Ventas", "Contabilidad", "Inventarios"],
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20">
    <div className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Servicios Principales</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Soluciones que impulsan tu negocio
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <s.icon className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {s.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                  {t}
                </span>
              ))}
            </div>
            <Button variant="link" className="p-0 h-auto group-hover:gap-3 transition-all">
              Ver Más <ArrowRight size={14} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
