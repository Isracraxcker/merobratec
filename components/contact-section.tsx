"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+593 99 999 9999",
    href: "tel:+593999999999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@tuempresa.com",
    href: "mailto:contacto@tuempresa.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Ecuador",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
    href: "#",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d5b81a6d-7d24-451f-9ae9-1ad1dc599de9");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Mensaje enviado correctamente");
        
        formRef.current?.reset();
    
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
    >
      {/* 🔥 TOASTER */}
      <Toaster position="top-right" />

      {/* DECORACION IGUAL AL ABOUT */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-amber-50 to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Contáctanos
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Hablemos de tu{" "}
            <span className="text-amber-500">próximo proyecto</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos listos para convertir tus ideas en realidad. Escríbenos y
            recibe asesoría personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                Envíanos un mensaje
              </h3>

              <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    name="name"
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                  <select
                    name="project"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  >
                    <option>Tipo de proyecto</option>
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Industrial</option>
                    <option>Remodelación</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 resize-none"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 rounded-lg shadow-lg shadow-amber-500/30 group"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Enviando..." : "Enviar mensaje"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-slate-900 font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* CTA */}
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Respuesta rápida ⚡
              </h4>
              <p className="text-slate-600 text-sm">
                Te respondemos en menos de 24 horas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
