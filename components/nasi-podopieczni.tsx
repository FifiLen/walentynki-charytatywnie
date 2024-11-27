"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PiHandWavingThin } from "react-icons/pi";
import { Pet } from "@/lib/pets";

interface OurPetsSectionProps {
  pets: Pet[];
}

export default function OurPetsSection({ pets = [] }: OurPetsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const currentScroll = container.scrollLeft;
      container.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!pets || pets.length === 0) {
    return (
      <section className="bg-transparent py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl tracking-tight font-bold text-primary-800 dark:text-primary-200 mb-6 text-center">
            Nasi Podopieczni
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 text-center">
            Aktualnie nie mamy żadnych zwierząt do adopcji. Sprawdź ponownie
            później!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="nasi-podopieczni" className="bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ wordSpacing: "0.15em" }}
          className="text-4xl md:text-6xl tracking-tight font-bold text-primary-800 dark:text-primary-200 mb-12 flex items-center gap-3"
        >
          Poznaj naszych <br />
          podopiecznych <PiHandWavingThin className=" h-32 w-32" />
        </motion.h2>
      </div>
      <div className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory py-2 no-scrollbar"
            ref={scrollContainerRef}
          >
            {pets.map((pet, index) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/podopieczni/${pet.id}`}
                  className="transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                >
                  <Card
                    className={cn(
                      "flex-none w-[300px] sm:w-[340px] md:w-[372px] h-[600px] sm:h-[640px] md:h-[680px] rounded-3xl border-none overflow-hidden snap-start relative",
                      "bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-700 dark:to-primary-900"
                    )}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={pet.imageUrl}
                        alt={`Zdjęcie ${pet.name}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                    </div>
                    <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10">
                      <div className="space-y-2">
                        <div className="text-lg sm:text-xl font-semibold text-primary-200">
                          {pet.species} • {pet.breed}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
                          {pet.name}, {pet.age}{" "}
                          {pet.age === 1 ? "rok" : "lat(a)"}
                        </h3>
                        <p className="text-primary-100/90">{pet.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        className="self-end font-semibold rounded-full py-2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white transition-all duration-300 ease-in-out hover:scale-105"
                      >
                        Poznaj {pet.name}
                        <PawPrint className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-4 mb-4 pr-4 md:pr-8 container mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-primary-100 dark:bg-primary-900 backdrop-blur-sm border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-800 mr-4 transition-all duration-300 ease-in-out"
            onClick={() => scroll("left")}
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-6 w-6 text-primary-800 dark:text-primary-200" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 bg-primary-100 dark:bg-primary-900 backdrop-blur-sm border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-800 transition-all duration-300 ease-in-out"
            onClick={() => scroll("right")}
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-6 w-6 text-primary-800 dark:text-primary-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
