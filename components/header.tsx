"use client";

import { useState, useEffect } from "react";
import { HeartHandshake, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentineQuizHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const menuItems = [
    { name: "O projekcie", href: "#o-projekcie" },
    { name: "Jak to działa?", href: "#jak-to-dziala" },
    { name: "Nasi podopieczni", href: "#nasi-podopieczni" },
    { name: "Zespół", href: "#zespol" },
    { name: "Partnerzy", href: "#partnerzy" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-100/80 dark:bg-primary-900/90 backdrop-blur-sm shadow-xs"
          : "bg-primary-100 dark:bg-primary-900"
      } h-16 sm:h-20`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <a
            href="/"
            className="text-2xl sm:text-2xl font-bold text-primary-700 dark:text-primary-100 flex items-center mr-8"
          >
            <span className="font-cursive tracking-tighter flex items-center">
              ADOPT
              <span>
                <HeartHandshake className=" w-6 h-6" />
              </span>
              LOVE
            </span>
          </a>
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary-600 hover:text-primary-800 dark:text-primary-100 dark:hover:text-primary-100 transition-colors duration-200 font-semibold text-base tracking-tight"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size="lg"
            className="hidden lg:inline-flex bg-primary-600 text-primary-100 hover:bg-primary-800 dark:bg-primary-600 dark:text-primary-100 dark:hover:bg-primary-700 font-semibold tracking-tight"
          >
            Rozpocznij Quiz
          </Button>
          {/* <Button
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="bg-primary-600 text-primary-100 hover:bg-primary-800 dark:bg-primary-600 dark:text-primary-100 dark:hover:bg-primary-700"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Przełącz tryb ciemny</span>
          </Button> */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="lg:hidden bg-primary-600 text-primary-100 hover:bg-primary-800 dark:bg-primary-600 dark:text-primary-100 dark:hover:bg-primary-700"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Otwórz menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-primary-100 dark:bg-primary-900"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-200 flex items-center">
                    <HeartHandshake className="w-6 h-6 mr-2 fill-current" />
                    <span className="font-cursive">Menu</span>
                  </h2>
                </div>
                <nav className="flex flex-col space-y-4">
                  <AnimatePresence>
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100 text-base py-2 font-semibold tracking-tight"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </AnimatePresence>
                </nav>
                <div className="mt-auto space-y-4">
                  <Button
                    className="w-full bg-primary-600 text-primary-100 hover:bg-primary-800 dark:bg-primary-600 dark:text-primary-100 dark:hover:bg-primary-700 text-lg py-6 font-semibold tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    Rozpocznij Quiz
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
