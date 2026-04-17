"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Building2,
} from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Construcción Residencial", href: "#services" },
    { label: "Proyectos Comerciales", href: "#services" },
    { label: "Construcción Industrial", href: "#services" },
    { label: "Remodelaciones", href: "#services" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Proyectos", href: "#our-work" },
    { label: "Equipo", href: "#about" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-50 border-t border-slate-200">
      
      {/* 🔥 DECORACIÓN (NO BLOQUEA CLICK) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-amber-50 to-transparent opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* BRAND */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">
                MEROBRATEC
              </span>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed max-w-sm">
              Construimos proyectos con calidad, innovación y compromiso. 
              Transformamos ideas en realidades.
            </p>

            {/* CONTACTO */}
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-slate-600">
                <Phone className="w-4 h-4" />
                +593 99 999 9999
              </p>
              <p className="flex items-center gap-3 text-slate-600">
                <Mail className="w-4 h-4" />
                contacto@tuempresa.com
              </p>
              <p className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-4 h-4 mt-1" />
                Ecuador
              </p>
            </div>

            {/* REDES */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300 transition"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-amber-600 text-sm transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* EMPRESA */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-amber-600 text-sm transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4">
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h4 className="text-slate-900 font-semibold mb-2">
                ¿Listo para tu proyecto?
              </h4>
              <p className="text-slate-600 text-sm mb-4">
                Contáctanos y recibe asesoría personalizada.
              </p>

              <a
                href="#contact-us"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition"
              >
                Ir a contacto →
              </a>
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MEROBRATEC
          </p>

          <Link
            href="https://aicodigi.vercel.app"
            target="_blank"
            className="relative z-20 text-slate-600 hover:text-amber-600 text-sm transition font-medium"
          >
            Desarrollado por <span className="text-amber-500">AICODIGI</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}