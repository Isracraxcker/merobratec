"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  { id: "all", label: "Todos" },
  { id: "residential", label: "Residencial" },
  { id: "commercial", label: "Comercial" },
  { id: "industrial", label: "Industrial" },
];

const projects = [
  {
    id: 1,
    title: "Torre Empresarial Pacífico",
    category: "commercial",
    location: "Ciudad de México",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Residencial Los Álamos",
    category: "residential",
    location: "Guadalajara",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Planta Industrial Norte",
    category: "industrial",
    location: "Monterrey",
    year: "2023",
    image: "https://images.unsplash.com/photo-1565636291267-c03b2a5aac18?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Centro Comercial Vista",
    category: "commercial",
    location: "Querétaro",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 5,
    title: "Complejo Habitacional Sol",
    category: "residential",
    location: "Puebla",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Nave Logística Express",
    category: "industrial",
    location: "León",
    year: "2024",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];

const OurWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="our-work" className="relative bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-amber-600 bg-amber-100 rounded-full">
            Nuestro Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Proyectos que{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-600">
              definen excelencia
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Cada proyecto representa nuestro compromiso con la calidad y la innovación.
            Explora nuestra trayectoria de construcciones exitosas.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/25"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative ${
                  project.featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="relative h-full min-h-80 md:min-h-95 rounded-2xl overflow-hidden bg-slate-100">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/20">
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium text-amber-900 bg-amber-400 rounded-full">
                        Destacado
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className={`font-bold text-white mb-2 ${project.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {project.year}
                        </span>
                      </div>

                      {/* View Project Link */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition-colors"
                        >
                          Ver proyecto
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact-us"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/30 group"
          >
            Ver todos los proyectos
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
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 32L60 37.3C120 43 240 53 360 58.7C480 64 600 64 720 58.7C840 53 960 43 1080 42.7C1200 43 1320 53 1380 58.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V32Z"
            className="border-slate-100"
          />
        </svg>
      </div>
    </section>
  );
};

export default OurWorkSection;
