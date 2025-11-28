"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextGenerateEffect } from "./TextGenerateEffect";

// HERO PERSONNALISÉ POUR JBA — Jennyfer Batolo Architecture
// Style : contemporain, architectural, ligne épurée, brutaliste haut de gamme

export default function Hero() {
  return (
    <section className="relative flex items-center px-10 py-[100px] sm:py-[110px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-block border border-neutral-800 px-3 py-1 text-xs uppercase tracking-widest text-neutral-400">
                Architecture & Design
              </div>
            </motion.div>

            <h1>
              <TextGenerateEffect
                words="Jennyfer Batolo"
                className="text-4xl md:text-6xl lg:text-7xl font-bold m-0 leading-tight tracking-tight"
                duration={0.5}
                speed={0.2}
                initialDelay={0.2}
              />
              <TextGenerateEffect
                words="Architecture"
                className="text-4xl md:text-6xl lg:text-7xl font-bold m-0 leading-tight tracking-tight text-neutral-400"
                duration={0.5}
                speed={0.2}
                initialDelay={0.4}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-neutral-400 mb-8 max-w-md text-lg"
            >
              Nous concevons des espaces architecturaux modernes, intemporels,
              minimalistes et techniquement maîtrisés.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                Voir nos projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border border-neutral-800 px-8 py-3 text-sm uppercase tracking-widest text-neutral-400 hover:border-neutral-600 hover:text-white transition-colors">
                Le studio JBA
              </button>
            </motion.div>
          </div>

          {/* RIGHT SHAPE - Espace réservé */}
          <div className="hidden md:block aspect-square"></div>
        </div>
      </div>
    </section>
  );
}
