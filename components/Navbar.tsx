"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/menu", label: "Il Menu" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-lavagna shadow-md' : 'bg-lavagna/95'}`}>
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity z-[101]">
          <Image 
            src="/images/logo-full-v2.png" 
            alt="Duilio Logo" 
            width={160} 
            height={60} 
            className="object-contain"
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-body uppercase tracking-widest font-semibold text-sm text-panna-antico">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`transition-colors hover:text-terra-siena ${pathname === link.href ? 'text-terra-siena' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#prenota" className="btn-primary text-xs py-2 px-6 ml-4">Prenota</Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-panna-antico z-[101] p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-lavagna text-panna-antico flex flex-col items-center justify-center pt-20"
          >
            {/* Background Texture inside mobile menu */}
            <div className="absolute inset-0 opacity-[0.03] scale-150 pointer-events-none">
              <Image src="/images/monogram-dark.png" alt="" fill className="object-cover invert opacity-50" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-10 font-body uppercase tracking-widest font-bold text-2xl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className={`hover:text-terra-siena transition-colors ${pathname === link.href ? 'text-terra-siena' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
                className="mt-4"
              >
                <Link href="/#prenota" onClick={() => setIsOpen(false)} className="btn-primary text-lg py-3 px-10">
                  Prenota un Tavolo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
