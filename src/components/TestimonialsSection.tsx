import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excelente soporte en implementación ERP. El sistema integró todos nuestros procesos de facturación con SUNAT sin problemas.",
    author: "Carlos M.",
    role: "Gerente General",
    company: "Distribuidora Lima SAC",
  },
  {
    text: "Redujimos nuestros costos operativos en un 18% con la consultoría de Virtual Assistance Perú. Soporte técnico impecable.",
    author: "María L.",
    role: "Directora de TI",
    company: "Distribuidora Lima",
  },
  {
    text: "El equipo de Virtual Assistance Perú nos acompañó en cada paso de la migración. Profesionalismo y dedicación constante.",
    author: "Jorge R.",
    role: "Administrador",
    company: "Constructora Pacífico",
  },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonios</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
          Lo que dicen nuestros clientes
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={t.author}
            className="bg-card border border-border rounded-2xl p-8 relative animate-fade-in"
            style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
          >
            <Quote className="text-primary/20 absolute top-6 right-6" size={32} />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="text-primary fill-primary" size={16} />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="font-semibold text-foreground">{t.author}</div>
              <div className="text-sm text-muted-foreground">{t.role} — {t.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
