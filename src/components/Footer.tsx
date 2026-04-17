import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="section-container py-14">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-extrabold mb-4">
            Virtual Assistance Perú
          </h3>
          <p className="text-sm opacity-70 leading-relaxed mb-4">
            Consultoría informática, gestión de instalaciones y soluciones ERP para empresas peruanas.
          </p>
          <p className="text-xs opacity-50">RUC: 20526212449</p>
          <p className="text-xs opacity-50">Comprobantes: F.806 / F.816 / Factura</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">Contacto</h4>
          <div className="space-y-3 text-sm opacity-80">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Calles Gaviotas 122 Int. 401, Urb. Tambo Lima — Surquillo, Lima</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+51 XXX XXX XXX (WhatsApp)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@vaperu.com</span>
            </div>
            <a
              href="https://facebook.com/erpvap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity"
            >
              <Facebook size={16} />
              <span>@erpvap</span>
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h4 className="font-bold mb-4">Ubicación</h4>
          <div className="rounded-xl overflow-hidden border border-border/20">
            <iframe
              title="Ubicación Virtual Assistance Perú Surquillo, Lima"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.0!3d-12.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSurquillo!5e0!3m2!1ses!2spe!4v1600000000000!5m2!1ses!2spe"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs opacity-60">
        <span>© 2026 Virtual Assistance Perú. Todos los derechos reservados.</span>
        <span>Dirección: Calles Gaviotas 122 Int. 401, Surquillo — Lima, Perú</span>
      </div>
    </div>
  </footer>
);

export default Footer;
