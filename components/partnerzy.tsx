"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Partner {
  id: number;
  name: string;
  shortName: string;
}

const partners: Partner[] = [
  { id: 1, name: "PetCare Plus", shortName: "PetCare+" },
  { id: 2, name: "Happy Tails Co.", shortName: "HappyTails" },
  { id: 3, name: "Furry Friends Foundation", shortName: "FurryFriends" },
  { id: 4, name: "Paw Prints Shelter", shortName: "PawPrints" },
  { id: 5, name: "Whiskers & Wags", shortName: "W&W" },
  { id: 6, name: "Animal Haven", shortName: "AnimalHaven" },
  { id: 7, name: "Rescue Rangers", shortName: "RescueR" },
  { id: 8, name: "Compassion Critters", shortName: "ComCritters" },
];

export default function PartnersSection() {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  return (
    <section id="partnerzy" className="bg-transparent py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary-800 dark:text-primary-200 mb-16"
        >
          Nasi Partnerzy
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
              onMouseEnter={() => setHoveredLogo(partner.id)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <div
                className={cn(
                  "relative group mb-2 w-48 h-24 flex items-center justify-center rounded-lg",
                  "bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900",
                  "transition-all duration-300",
                  hoveredLogo === partner.id ? "scale-105 shadow-lg" : "",
                  hoveredLogo !== null && hoveredLogo !== partner.id
                    ? "opacity-50"
                    : "opacity-100"
                )}
              >
                <span
                  className={cn(
                    "text-2xl font-bold text-primary-600 dark:text-primary-300",
                    "transition-all duration-300",
                    hoveredLogo === partner.id
                      ? "text-primary-800 dark:text-primary-100"
                      : ""
                  )}
                >
                  {partner.shortName}
                </span>
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
              <p className="text-sm text-primary-600 dark:text-primary-400 text-center font-medium mt-2">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-primary-600 dark:text-primary-400 mt-16 max-w-2xl mx-auto text-xl tracking-tight"
        >
          Dziękujemy naszym partnerom za nieocenione wsparcie w misji
          znajdowania kochających domów dla zwierząt w potrzebie. Razem możemy
          zdziałać więcej!
        </motion.p>
      </div>
    </section>
  );
}
