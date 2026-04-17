"use client";

import React from "react";
import { motion } from "motion/react";
import Counter from "@/components/ui/counter";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* IMAGEN DE FONDO */}
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
        alt="Construcción moderna"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* OVERLAY CON GRADIENTE PREMIUM */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-900/60 to-slate-950/80" />
      
      {/* CAPA DE TEXTURA SUTIL */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)]" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 sm:px-12 lg:px-24 xl:px-32 pt-20 pb-32">
        
        {/* BADGE SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Más de 15 años de experiencia
          </span>
        </motion.div>

        {/* TITULO PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold max-w-5xl leading-[1.1] tracking-tight text-white"
        >
          Construimos proyectos{" "}
          <span className="relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-400 to-amber-500">
              sólidos y confiables
            </span>
          </span>
        </motion.h1>

        {/* SUBTITULO */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed"
        >
          En MEROBRATEC desarrollamos soluciones de construcción y consultoría
          con altos estándares de calidad, seguridad y cumplimiento.
        </motion.p>

        {/* BOTONES CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href="#contact-us"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-linear-to-r from-amber-400 to-amber-500 rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:from-amber-300 hover:to-amber-400 transition-all duration-300"
          >
            Solicitar Cotización
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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

          <a
            href="#our-work"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400/50 hover:text-amber-300 transition-all duration-300"
          >
            Ver Proyectos
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>

        {/* INDICADORES DE CONFIANZA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-400"
        >
          <div className="flex flex-col items-center">
  <span className="text-3xl sm:text-4xl font-bold text-white">
    <Counter to={200} suffix="+" />
  </span>
  <span className="text-sm mt-1">Proyectos</span>
</div>

<div className="w-px h-10 bg-slate-700 hidden sm:block" />

<div className="flex flex-col items-center">
  <span className="text-3xl sm:text-4xl font-bold text-white">
    <Counter to={15} suffix="+" />
  </span>
  <span className="text-sm mt-1">Años</span>
</div>

<div className="w-px h-10 bg-slate-700 hidden sm:block" />

<div className="flex flex-col items-center">
  <span className="text-3xl sm:text-4xl font-bold text-white">
    <Counter to={50} suffix="+" />
  </span>
  <span className="text-sm mt-1">Clientes</span>
</div>
        </motion.div>
      </div>

      {/* TRANSICION WAVE ELEGANTE */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>

      {/* SCROLL INDICATOR */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-amber-400"
            />
          </div>
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
