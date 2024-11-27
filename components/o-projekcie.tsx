"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { Just_Another_Hand } from "next/font/google";

const hand = Just_Another_Hand({ weight: ["400"], subsets: ["latin"] });

export default function AboutSection() {
  return (
    <section
      id="o-projekcie"
      className="bg-transparent dark:bg-gray-950 py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <h5 className="text-primary-400">#O Projekcie</h5>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-800 dark:text-primary-200 leading-none mb-6 tracking-tight">
              PODARUJ
              <br />
              MIŁOŚĆ&nbsp;W
              <br />
              WALENTYNKI
            </h2>
            <div
              className={`${hand.className} text-3xl sm:text-5xl font-handwriting text-primary-600 dark:text-primary-400`}
            >
              Adopt Love 2024
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="/about.webp"
              alt="Szczęśliwy pies z sercem"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24">
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-4">
              Znajdź nas
            </h3>
            <div className="space-y-4">
              <Link
                href="https://instagram.com/adoptlove"
                className="flex items-center group text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
                <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="https://youtube.com/adoptlove"
                className="flex items-center group text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
              >
                <Youtube className="mr-2 h-5 w-5" />
                Youtube
                <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-primary-600 dark:text-primary-400 text-lg leading-relaxed">
              Adopt Love to wyjątkowa akcja walentynkowa, która łączy ludzi ze
              zwierzętami poprzez spersonalizowany quiz. Wierzymy, że każde
              zwierzę zasługuje na miłość i dom, a walentynki to idealny moment,
              by podarować coś więcej niż tylko symboliczny gest.
            </p>
            <p className="text-primary-600 dark:text-primary-400 text-lg leading-relaxed mt-4">
              Dołącz do nas i pomóż zmienić życie zwierzaka na lepsze. Twoja
              walentynka może być początkiem pięknej historii miłosnej.
            </p>
          </div>

          <div className="lg:col-span-4">
            <blockquote className="text-xl font-medium text-primary-800 dark:text-primary-200">
              "Dzięki Adopt Love znalazłam nie tylko wspaniałego przyjaciela,
              ale też sposób na pokazanie, że walentynki mogą mieć głębszy
              wymiar - wymiar bezinteresownej miłości do zwierząt."
            </blockquote>
            <div className="mt-4 flex items-center">
              <Image
                src="/team-member-1.webp"
                alt="Anna Kowalska"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-3 text-primary-600 dark:text-primary-400">
                Anna Kowalska
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
