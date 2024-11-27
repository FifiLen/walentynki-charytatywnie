export interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  description: string;
  imageUrl: string;
  fullDescription: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Burek",
    species: "Pies",
    breed: "Mieszaniec",
    age: 3,
    description: "Przyjazny i energiczny pies, uwielbia długie spacery.",
    imageUrl: "/pet-1.jpg",
    fullDescription:
      "Burek to niezwykle przyjazny i energiczny pies, który uwielbia długie spacery i zabawę na świeżym powietrzu. Jest bardzo towarzyski i świetnie dogaduje się zarówno z ludźmi, jak i innymi zwierzętami. Burek ma 3 lata i jest w pełni zdrowy oraz zaszczepiony. Idealny kompan dla aktywnej rodziny lub osoby, która lubi spędzać dużo czasu na zewnątrz.",
  },
  {
    id: 2,
    name: "Mruczek",
    species: "Kot",
    breed: "Dachowiec",
    age: 2,
    description: "Spokojny kot, idealny do mieszkania.",
    imageUrl: "/pet-2.jpg",
    fullDescription:
      "Mruczek to spokojny i zrównoważony kot, który idealnie nadaje się do mieszkania w bloku. Ma 2 lata i jest już nauczony korzystania z kuwety. Uwielbia wylegiwać się na parapecie i obserwować ptaki za oknem. Mruczek jest czysty, dobrze wychowany i bardzo przytulaśny. Szuka domu, w którym będzie mógł cieszyć się spokojem i miłością swoich opiekunów.",
  },
  {
    id: 3,
    name: "Reksio",
    species: "Pies",
    breed: "Labrador",
    age: 5,
    description: "Łagodny pies, świetny dla rodzin z dziećmi.",
    imageUrl: "/pet-3.jpg",
    fullDescription:
      "Reksio to łagodny i cierpliwy labrador, który świetnie sprawdzi się w rodzinie z dziećmi. Ma 5 lat i jest bardzo dobrze wyszkolony. Reksio kocha dzieci i jest niezwykle delikatny w kontaktach z nimi. Jest również bardzo inteligentny i łatwo się uczy nowych komend. Reksio szuka kochającego domu, gdzie będzie mógł cieszyć się życiem jako pełnoprawny członek rodziny.",
  },
  {
    id: 4,
    name: "Kitka",
    species: "Kot",
    breed: "Brytyjski",
    age: 1,
    description: "Młoda, ciekawska kotka, uwielbia zabawę.",
    imageUrl: "/pet-4.jpg",
    fullDescription:
      "Kitka to młoda, zaledwie roczna kotka rasy brytyjskiej, która jest pełna energii i ciekawości świata. Uwielbia zabawę i eksplorowanie nowych miejsc. Kitka jest bardzo inteligentna i szybko się uczy. Jest również bardzo przywiązana do ludzi i uwielbia być w centrum uwagi. Szuka domu, w którym będzie miała dużo możliwości zabawy i interakcji z opiekunami.",
  },
];

export async function getPetById(id: number): Promise<Pet | undefined> {
  return pets.find((pet) => pet.id === id);
}

export async function getAllPets(): Promise<Pet[]> {
  return pets;
}
