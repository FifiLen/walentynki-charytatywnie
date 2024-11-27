"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type DecorationType = "quiz" | "match" | "valentine";

interface Step {
  title: string;
  content: string;
  decoration: DecorationType;
  image: string;
}

const steps: Step[] = [
  {
    title: "Wypełnij Quiz",
    content:
      "Odpowiedz na kilka prostych pytań, które pomogą nam lepiej Cię poznać. Twoje odpowiedzi będą kluczem do znalezienia idealnego dopasowania!",
    decoration: "quiz",
    image: "/jkd.webp",
  },
  {
    title: "Zapoznaj się z podopiecznym",
    content:
      "Na podstawie Twoich odpowiedzi, przedstawimy Ci profil podopiecznego, który najbardziej pasuje do Twojej osobowości i preferencji. To Twoja szansa, aby dowiedzieć się więcej o potencjalnym przyjacielu!",
    decoration: "match",
    image: "/jkd2.webp",
  },
  {
    title: "Przekaż walentynkę ♥️",
    content:
      "Jeśli czujesz, że to dobre dopasowanie, możesz wysłać specjalną walentynkę do swojego podopiecznego. To pierwszy krok do nawiązania wyjątkowej relacji i rozpoczęcia pięknej przyjaźni!",
    decoration: "valentine",
    image: "/jkd3.webp",
  },
];

export default function SteppedSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="jak-to-dziala"
      className="relative overflow-hidden bg-transparent min-h-screen py-24 px-4 sm:px-6 lg:px-8 font-[Helvetica,Arial,sans-serif]"
    >
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className=" max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight mb-5 sm:mb-0 text-primary-800 dark:text-primary-200 sm:text-6xl"
          >
            Jak to działa?
          </motion.h2>
        </div>

        <div className="relative mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              defaultValue="item-0"
              onValueChange={(value) =>
                setActiveStep(Number(value.split("-")[1]))
              }
            >
              {steps.map((step, index) => (
                <AccordionItem
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className="border-none rounded-2xl shadow-lg shadow-primary-500/5"
                >
                  <AccordionTrigger
                    className={cn(
                      "group relative w-full rounded-2xl p-6 text-left transition-all hover:no-underline",
                      activeStep === index
                        ? "bg-gradient-to-r from-primary-100 to-white dark:from-primary-900/50 dark:to-background"
                        : "bg-white/80 hover:bg-primary-100/80 dark:bg-background/80 dark:hover:bg-primary-900/50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold transition-colors duration-300",
                          activeStep === index
                            ? "bg-primary-600 text-primary-100 shadow-lg shadow-primary-500/25"
                            : "bg-white text-primary-600 ring-2 ring-primary-200 dark:bg-background dark:ring-primary-800"
                        )}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-primary-800 dark:text-primary-200">
                        {step.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden">
                    <div className="relative pl-[4.5rem] pr-6 pt-2 pb-6">
                      <p
                        style={{ wordSpacing: "0.1em" }}
                        className="relative text-primary-700 dark:text-primary-300 text-base font-semibold tracking-tight"
                      >
                        {step.content}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="w-full max-w-md mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary-200 to-white dark:from-primary-800 dark:to-background shadow-xl shadow-primary-500/10"
                  >
                    <Image
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
