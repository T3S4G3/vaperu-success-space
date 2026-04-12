import { TrendingUp, TrendingDown, ShieldCheck, Headphones, Settings } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "+20% Eficiencia", desc: "Optimiza procesos y reduce tiempos operativos con automatización inteligente." },
  { icon: TrendingDown, title: "-15% Costos", desc: "Reduce costos operativos con soluciones integradas y eliminación de redundancias." },
  { icon: ShieldCheck, title: "Cumplimiento Normativo", desc: "Cumple con SUNAT y normativas peruanas. Facturación electrónica incluida." },
  { icon: Headphones, title: "Soporte Local 24/7", desc: "Equipo técnico en Lima disponible las 24 horas para asistencia inmediata." },
  { icon: Settings, title: "Manual y Automático", desc: "Flexibilidad total: adapta sistemas manuales o automatizados a tu ritmo." },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-20 bg-surface">
    <div className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Beneficios</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          ¿Por qué elegir VAPERU?
        </h2>
        <p className="text-muted-foreground mt-4">
          Resultados medibles para tu empresa desde el primer mes de implementación.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
          >
            <div className="w-12 h-12 mx-auto rounded-lg bg-accent flex items-center justify-center mb-4">
              <b.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
