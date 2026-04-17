"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#services" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Proyectos", href: "#our-work" },
  { label: "Contacto", href: "#contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between">
            
            {/* LOGO */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-amber-600 flex items-center justify-center transition-transform group-hover:scale-105">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span
                className={`font-bold transition-all duration-300 ${
                  scrolled ? "text-slate-900 text-lg" : "text-white text-xl"
                }`}
              >
                MEROBRATEC
              </span>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-slate-600 hover:text-amber-600"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-4">
              

              <Button
                asChild
                className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 shadow-lg shadow-amber-500/20 group"
              >
                <a href="#contact-us">
                  Contactar
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                </a>
              </Button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition ${
                scrolled
                  ? "bg-white border border-slate-200 text-slate-700"
                  : "bg-white/10 border border-white/20 text-white"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-xl"
            >
              <div className="flex flex-col h-full">
                
                {/* HEADER */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <span className="font-bold text-slate-900 text-lg">
                    MEROBRATEC
                  </span>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5 text-slate-700" />
                  </button>
                </div>

                {/* LINKS */}
                <div className="flex-1 py-6 px-6 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-700 text-lg hover:text-amber-600 transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-6 border-t border-slate-200">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Contactar
                  </Button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}