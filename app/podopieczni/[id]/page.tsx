import { notFound } from "next/navigation";
import Image from "next/image";
import { getPetById } from "@/lib/pets";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

export default async function PetDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const pet = await getPetById(parseInt(params.id));

  if (!pet) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={pet.imageUrl}
              alt={pet.name}
              width={400}
              height={400}
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-primary-500 font-semibold">
              {pet.species} • {pet.breed}
            </div>
            <h1 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
              {pet.name}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Wiek: {pet.age} {pet.age === 1 ? "rok" : "lat(a)"}
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              {pet.fullDescription}
            </p>
            <div className="mt-6">
              <Button className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition duration-300">
                Adoptuj {pet.name}
                <PawPrint className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
