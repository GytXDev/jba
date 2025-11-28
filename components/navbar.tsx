"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-tight group"
          >
            <span className="group-hover:text-white/90 transition-colors">
              JBA
            </span>
            <span className="text-neutral-400">.</span>
            <span className="text-xs font-normal text-neutral-500 ml-2 hidden sm:inline-block">
              Architecture
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              onClick={(e) => handleLinkClick(e, "#features")}
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Services
            </Link>
            <Link
              href="#work"
              onClick={(e) => handleLinkClick(e, "#work")}
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Projets
            </Link>
            <Link
              href="#process"
              onClick={(e) => handleLinkClick(e, "#process")}
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Processus
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => handleLinkClick(e, "#testimonials")}
              className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Témoignages
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="border border-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-block"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black"
        >
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <Link
                href="#features"
                className="text-neutral-400 hover:text-white py-2 text-2xl font-light transition-colors"
                onClick={(e) => handleLinkClick(e, "#features")}
              >
                Services
              </Link>
              <Link
                href="#work"
                className="text-neutral-400 hover:text-white py-2 text-2xl font-light transition-colors"
                onClick={(e) => handleLinkClick(e, "#work")}
              >
                Projets
              </Link>
              <Link
                href="#process"
                className="text-neutral-400 hover:text-white py-2 text-2xl font-light transition-colors"
                onClick={(e) => handleLinkClick(e, "#process")}
              >
                Processus
              </Link>
              <Link
                href="#testimonials"
                className="text-neutral-400 hover:text-white py-2 text-2xl font-light transition-colors"
                onClick={(e) => handleLinkClick(e, "#testimonials")}
              >
                Témoignages
              </Link>
              <Link
                href="#contact"
                className="border border-white px-5 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full mt-4 text-center"
                onClick={(e) => handleLinkClick(e, "#contact")}
              >
                Contact
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
