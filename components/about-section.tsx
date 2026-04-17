"use client";

import React from "react";
import { motion } from "motion/react";

const stats = [
  { value: "200+", label: "Proyectos Completados" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "15+", label: "Años de Experiencia" },
  { value: "50+", label: "Profesionales" },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Compromiso",
    description: "Nos comprometemos con cada proyecto como si fuera propio.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Eficiencia",
    description: "Optimizamos recursos sin comprometer la calidad.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Equipo Experto",
    description: "Profesionales altamente capacitados en cada área.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-slate-50 overflow-hidden">
      {/* DECORACION GEOMETRICA */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-amber-50 to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* COLUMNA IZQUIERDA - CONTENIDO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-amber-600 bg-amber-100 rounded-full">
              Sobre Nosotros
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Construyendo el futuro{" "}
              <span className="text-amber-500">desde 2009</span>
            </h2>
            
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              En MEROBRATEC somos una empresa líder en el sector de la construcción, 
              dedicada a transformar ideas en realidades tangibles. Nuestra trayectoria 
              de más de 15 años nos respalda con proyectos exitosos en todo el país.
            </p>
            
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Combinamos innovación, tecnología y mano de obra calificada para ofrecer 
              soluciones integrales que superan las expectativas de nuestros clientes.
            </p>

            {/* VALORES */}
            <div className="mt-10 space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                    <p className="text-slate-600 mt-1">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="#contact-us"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
              >
                Conoce más sobre nosotros
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA - IMAGEN Y STATS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* IMAGEN PRINCIPAL */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-amber-400/20 to-amber-500/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                  alt="Equipo de construcción trabajando"
                  className="w-full h-100 lg:h-125 object-cover"
                />
                {/* OVERLAY GRADIENTE */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* BADGE FLOTANTE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">ISO 9001</p>
                    <p className="text-sm text-slate-500">Certificación de Calidad</p>
                  </div>
                </div>
              </motion.div>

              {/* DECORACION */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
            </div>

            {/* GRID DE STATS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* WAVE INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
