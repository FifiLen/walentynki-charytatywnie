import { HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function StyledHeroSection() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-28 flex flex-col lg:flex-row items-center justify-between font-[Helvetica,Arial,sans-serif]">
      {/* Left column: Content */}
      <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
        <a
          href="#"
          className="text-2xl sm:text-xl font-bold text-primary-600 dark:text-primary-100 flex items-center mb-2"
        >
          <span className="font-cursive tracking-tighter flex items-center">
            ADOPT
            <span>
              <HeartHandshake className=" w-5 h-5" />
            </span>
            LOVE
          </span>
        </a>

        <h2 className="mb-4 tracking-tight" style={{ wordSpacing: "0.1em" }}>
          Znajdź swoją walentynkę... <br />
          <span className=" text-transparent bg-clip-text bg-gradient-to-br from-primary-600 via-primary-700 to-primary-600">
            wśród naszych podopiecznych!
          </span>
        </h2>
        <p className="text-2xl text-primary-800/80 dark:text-primary-200 mb-6 font-semibold">
          Rozwiąż quiz i odkryj zwierzaka, który skradnie Twoje serce.
        </p>
        <button className="px-10 py-3 rounded-md text-lg font-semibold bg-primary-600 text-white hover:bg-primary-800 transition">
          Rozpocznij Quiz
        </button>
      </div>

      {/* Right column: Image with gradient background */}
      <div className="lg:w-1/2 relative flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-primary-300 to-primary-500 rounded-full transform rotate-3 blur-2xl"></div>
        <div className="relative z-10 transform -rotate-3">
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={300}
            height={300}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
