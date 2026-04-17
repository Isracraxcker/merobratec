"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [showNotif, setShowNotif] = useState(false);

  const url = `https://wa.me/593999999999`;

  useEffect(() => {
    const t = setTimeout(() => setShowNotif(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      
      <AnimatePresence>
        {showNotif && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto absolute bottom-16 right-0 w-64 bg-white rounded-xl shadow-xl p-4"
          >
            <div className="flex justify-between">
              <p className="text-sm font-semibold">
                Estamos en línea 🟢
              </p>
              <button onClick={() => setShowNotif(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href={url}
              target="_blank"
              className="block mt-3 text-center bg-green-500 text-white py-2 rounded-lg"
            >
              Abrir WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={url}
        target="_blank"
        className="pointer-events-auto w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
      >
        <MessageCircle className="text-white" />
      </motion.a>
    </div>
  );
}