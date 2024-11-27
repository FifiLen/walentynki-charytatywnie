"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialMedia: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ania Kowalska",
    role: "Założycielka",
    bio: "Pasjonatka zwierząt z misją tworzenia lepszego świata dla naszych czworonożnych przyjaciół. W wolnym czasie uwielbia długie spacery z psami ze schroniska.",
    imageUrl: "/team-member-1.webp",
    socialMedia: {
      instagram: "https://instagram.com/aniakowalska",
      twitter: "https://twitter.com/aniakowalska",
      linkedin: "https://linkedin.com/in/aniakowalska",
    },
  },
  {
    id: 2,
    name: "Michał Nowak",
    role: "Koordynator Adopcji",
    bio: "Ekspert w łączeniu zwierząt z idealnymi rodzinami. Jego motto to: 'Każde zwierzę zasługuje na kochający dom'. Prywatnie, ojciec trzech kotów i jednego psa.",
    imageUrl: "/team-member-2.webp",
    socialMedia: {
      instagram: "https://instagram.com/michalnowak",
      linkedin: "https://linkedin.com/in/michalnowak",
    },
  },
  {
    id: 3,
    name: "Kasia Wiśniewska",
    role: "Behawiorystka Zwierząt",
    bio: "Specjalistka od zrozumienia i poprawy zachowań zwierząt. Jej praca pomaga w przygotowaniu zwierząt do adopcji i edukacji nowych właścicieli.",
    imageUrl: "/team-member-3.webp",
    socialMedia: {
      twitter: "https://twitter.com/kasiawisniewska",
      linkedin: "https://linkedin.com/in/kasiawisniewska",
    },
  },
  {
    id: 4,
    name: "Tomek Zieliński",
    role: "Weterynarz",
    bio: "Doświadczony lekarz weterynarii, który dba o zdrowie naszych podopiecznych. Pasjonat egzotycznych zwierząt i miłośnik technologii w medycynie weterynaryjnej.",
    imageUrl: "/team-member-4.webp",
    socialMedia: {
      instagram: "https://instagram.com/tomekzielinski",
      linkedin: "https://linkedin.com/in/tomekzielinski",
    },
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="zespol" className="bg-transparent py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-primary-800 dark:text-primary-200 mb-16"
        >
          Poznaj Nasz Zespół
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-white dark:bg-primary-950 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-2xl"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      {member.socialMedia.instagram && (
                        <a
                          href={member.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:text-primary-200"
                          >
                            <Instagram className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                      {member.socialMedia.twitter && (
                        <a
                          href={member.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:text-primary-200"
                          >
                            <Twitter className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                      {member.socialMedia.linkedin && (
                        <a
                          href={member.socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-white hover:text-primary-200"
                          >
                            <Linkedin className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-primary-800 dark:text-primary-200 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-semibold dark:text-primary-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-primary-800 dark:text-primary-300 text-sm font-semibold tracking-tigh line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-16 bg-white dark:bg-primary-900/50 p-8 rounded-3xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="w-32 h-32 border-4 border-primary-200 dark:border-primary-700">
                <AvatarImage
                  src={teamMembers[activeIndex].imageUrl}
                  alt={teamMembers[activeIndex].name}
                />
                <AvatarFallback>
                  {teamMembers[activeIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-3xl tracking-tight font-bold text-primary-800 dark:text-primary-200 mb-2">
                  {teamMembers[activeIndex].name}
                </h3>
                <p className="text-xl text-primary-500 font-semibold dark:text-primary-400 mb-4">
                  {teamMembers[activeIndex].role}
                </p>
                <p className="text-primary-700 dark:text-primary-300 text-l font-semibold tracking-tight">
                  {teamMembers[activeIndex].bio}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
