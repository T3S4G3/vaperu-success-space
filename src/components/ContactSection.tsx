import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre es requerido").max(100),
  telefono: z.string().trim().min(6, "Teléfono inválido").max(20),
  email: z.string().trim().email("Email inválido").max(255),
  empresa: z.string().trim().min(2, "Empresa es requerida").max(100),
  mensaje: z.string().trim().min(5, "Mensaje muy corto").max(1000),
});

type FormData = z.infer<typeof schema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({ nombre: "", telefono: "", email: "", empresa: "", mensaje: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "¡Mensaje enviado!", description: "Nos comunicaremos contigo pronto." });
    setForm({ nombre: "", telefono: "", email: "", empresa: "", mensaje: "" });
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contacto" className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contacto</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-foreground">
              ¡Contáctanos Gratis!
            </h2>
            <p className="text-muted-foreground mt-3">Solicita una demo gratuita o resuelve tus dudas con nuestro equipo.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Input
                  placeholder="Nombre completo"
                  value={form.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  className={errors.nombre ? "border-destructive" : ""}
                />
                {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
              </div>
              <div>
                <Input
                  placeholder="Teléfono"
                  value={form.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                  className={errors.telefono ? "border-destructive" : ""}
                />
                {errors.telefono && <p className="text-destructive text-xs mt-1">{errors.telefono}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Input
                  placeholder="Email corporativo"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input
                  placeholder="Nombre de tu empresa"
                  value={form.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  className={errors.empresa ? "border-destructive" : ""}
                />
                {errors.empresa && <p className="text-destructive text-xs mt-1">{errors.empresa}</p>}
              </div>
            </div>
            <div>
              <Textarea
                placeholder="¿Cómo podemos ayudarte?"
                rows={4}
                value={form.mensaje}
                onChange={(e) => update("mensaje", e.target.value)}
                className={errors.mensaje ? "border-destructive" : ""}
              />
              {errors.mensaje && <p className="text-destructive text-xs mt-1">{errors.mensaje}</p>}
            </div>
            <Button variant="hero" size="lg" type="submit" className="w-full">
              <Send size={18} className="mr-2" /> ¡Contáctanos Gratis!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
