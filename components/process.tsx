"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: "01",
      title: "Analyse du Site",
      description:
        "Étude approfondie du terrain, de l'environnement et des besoins du client pour poser les bases du projet.",
    },
    {
      number: "02",
      title: "Conception Architecturale",
      description:
        "Élaboration de concepts architecturaux modernes et fonctionnels, respectant l’identité gabonaise et le contexte local.",
    },
    {
      number: "03",
      title: "Plans et Modélisation 3D",
      description:
        "Création de plans détaillés et de maquettes 3D pour visualiser le projet et optimiser les espaces.",
    },
    {
      number: "04",
      title: "Suivi Technique",
      description:
        "Coordination avec les équipes de construction, contrôle qualité et respect des normes et délais.",
    },
    {
      number: "05",
      title: "Livraison",
      description:
        "Finalisation du projet et remise au client, avec un suivi post-livraison pour garantir la satisfaction.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">
              Notre Méthode
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Processus JBA
            <br />
            <span className="text-white/90">Étapes Clés</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-white/30 md:left-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right" : ""
                } pl-24 md:pl-0`}
              >
                <div
                  className={`text-5xl md:text-7xl font-bold text-white/40 mb-4 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {step.number}
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 text-white ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-white/85 ${
                    index % 2 === 0 ? "md:text-right md:ml-auto" : ""
                  } ${
                    index % 2 === 0 ? "md:max-w-sm md:inline-block" : "max-w-sm"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center z-10 absolute-vertical-center md:static">
                <div className="w-20 h-20 border-2 border-white/40 flex items-center justify-center bg-[#0a0a0a] group-hover:border-white/60 transition-all duration-300">
                  <div className="text-xl font-bold text-white">
                    {step.number}
                  </div>
                </div>
              </div>

              <div className="flex-1 hidden md:block">
                <div className="h-[2px] w-full bg-white/30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-40 right-20 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-60 left-20 w-40 h-40 border border-white/5"></div>

      <style jsx>{`
        .absolute-vertical-center {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (min-width: 768px) {
          .absolute-vertical-center {
            position: static;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
