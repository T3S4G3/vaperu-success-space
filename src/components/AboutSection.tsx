import { Building, Calendar, MapPin, CheckCircle } from "lucide-react";

const AboutSection = () => (
  <section id="nosotros" className="py-20 bg-surface">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-left" style={{ opacity: 0 }}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sobre Nosotros</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6 text-foreground">
            Confianza y experiencia en TI desde 2015
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Fundada en 2015, Virtual Assistance Perú es una empresa{" "}
            <strong className="text-foreground">hábil y activa</strong>, especializada en consultoría informática, gestión
            de instalaciones y soluciones ERP para empresas peruanas.
          </p>
          <div className="space-y-4">
            {[
              { icon: Building, text: "RUC: 20526212449 — SUNAT Habilitado" },
              { icon: MapPin, text: "Calles Gaviotas 122 Int. 401, Tambo Lima — Surquillo" },
              { icon: Calendar, text: "Activa desde 2015 — +8 años de experiencia" },
              { icon: CheckCircle, text: "Sociedad Anónima Cerrada — Empresa confiable" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <item.icon className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-fade-in-right" style={{ opacity: 0, animationDelay: "0.2s" }}>
          <div className="gradient-primary rounded-2xl p-8 md:p-10 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6">Cifras que respaldan</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "+8", label: "Años de experiencia" },
                { num: "+100", label: "Clientes satisfechos" },
                { num: "24/7", label: "Soporte técnico" },
                { num: "99%", label: "Uptime garantizado" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold">{s.num}</div>
                  <div className="text-sm opacity-90 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
