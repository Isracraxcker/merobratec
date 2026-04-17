"use client";

import React from "react";
import { motion } from "motion/react";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Construcción Integral",
    description:
      "Desarrollamos proyectos de construcción desde la planificación hasta la entrega final, garantizando calidad en cada etapa.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Seguridad Certificada",
    description:
      "Cumplimos con los más altos estándares de seguridad y normativas vigentes en todos nuestros proyectos.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: "Consultoría Experta",
    description:
      "Asesoramiento profesional en cada fase del proyecto para optimizar recursos y maximizar resultados.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="services"
      className="relative bg-white py-24 sm:py-32 lg:py-40"
    >
      {/* DECORACION SUPERIOR - Conexion visual con Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg- from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* HEADER DE SECCION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-amber-600 bg-amber-50 rounded-full">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Soluciones completas para{" "}
            <span className="text-amber-500">tu proyecto</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ofrecemos servicios integrales de construcción y consultoría,
            respaldados por años de experiencia y un equipo altamente
            calificado.
          </p>
        </motion.div>

        {/* GRID DE FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-amber-200/50 transition-all duration-500">
                {/* ICONO */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-500/20 mb-6">
                  {feature.icon}
                </div>

                {/* CONTENIDO */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* LINK HOVER */}
                <div className="mt-6 flex items-center text-amber-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Conocer más</span>
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* DECORACION DE ESQUINA */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-amber-400/10 to-transparent rounded-tr-2xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA INFERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-lg"
          >
            Ver todos los servicios
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
