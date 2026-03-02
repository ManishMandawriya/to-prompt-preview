export type Villa = {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  tag: string;
  description: string;
  gallery: string[];
};

export const villas: Villa[] = [
  {
    id: "1",
    name: "Villa Azure",
    location: "Saint-Tropez, Côte d'Azur",
    price: "€12,500,000",
    beds: 6,
    baths: 8,
    area: "1.2 ha",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    tag: "Waterfront",
    description:
      "An exceptional waterfront estate with private dock and panoramic sea views. This villa blends contemporary design with the natural beauty of the French Riviera. Expansive terraces, a infinity pool, and direct beach access define the outdoor living experience.",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
  {
    id: "2",
    name: "Casa del Sol",
    location: "Marbella, Spain",
    price: "€8,900,000",
    beds: 5,
    baths: 6,
    area: "850 m²",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    tag: "Pool",
    description:
      "Sun-drenched Mediterranean villa with a spectacular pool and landscaped gardens. Open-plan living spaces flow onto covered terraces perfect for al fresco dining. Minutes from Marbella's golden mile and marina.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  {
    id: "3",
    name: "Villa Serenity",
    location: "Lake Como, Italy",
    price: "€15,200,000",
    beds: 7,
    baths: 9,
    area: "2.4 ha",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    tag: "Estate",
    description:
      "A landmark estate on the shores of Lake Como with private grounds and boathouse. Classic Italian architecture meets modern comfort. Formal gardens, a pool, and uninterrupted lake views create an incomparable setting.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
  },
  {
    id: "4",
    name: "Palazzo Verde",
    location: "Amalfi Coast",
    price: "€22,000,000",
    beds: 8,
    baths: 10,
    area: "3.1 ha",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    tag: "New",
    description:
      "Newly completed cliffside palazzo with breathtaking Amalfi views. Every detail has been curated for the most discerning buyer. Infinity pool, cinema, spa, and helipad. A rare opportunity on the world's most coveted coast.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
  },
  {
    id: "5",
    name: "Château des Vignes",
    location: "Provence, France",
    price: "€18,750,000",
    beds: 6,
    baths: 7,
    area: "5 ha",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    tag: "Vineyard",
    description:
      "A restored 18th-century château set within its own vineyard. Stone walls, exposed beams, and Provençal gardens. Produces a limited-edition estate wine. Pool, tennis, and total privacy in the Luberon.",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    ],
  },
  {
    id: "6",
    name: "Villa Bianca",
    location: "Mykonos, Greece",
    price: "€9,400,000",
    beds: 5,
    baths: 6,
    area: "720 m²",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    tag: "Beach",
    description:
      "Stunning Cycladic villa steps from a secluded beach. Whitewashed walls, blue shutters, and endless sea views. Multiple terraces, a pool, and outdoor kitchen. The essence of Greek island luxury.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
  },
];

export function getVilla(id: string): Villa | undefined {
  return villas.find((v) => v.id === id);
}
