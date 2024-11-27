import OurPetsSection from "@/components/nasi-podopieczni";
import { getAllPets } from "@/lib/pets";

export default async function Home() {
  const pets = await getAllPets();

  return (
    <main>
      <OurPetsSection pets={pets} />
      {/* Add other sections of your homepage here */}
    </main>
  );
}
