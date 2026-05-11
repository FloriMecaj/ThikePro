export type Knife = {
  name: string;
  description: string;
  steel: string;
  price: string;
  kanji: string;
  image: string;
};

export const allKnives: Knife[] = [
  {
    name: "Signature Set / 4 Blade Display",
    description: "A statement lineup of four Damascus profiles with vivid custom handles and gallery-style presentation.",
    steel: "Layered Damascus Collection",
    price: "Contact for price",
    kanji: "刃",
    image: "/images/image2.jpg",
  },
  {
    name: "Santoku Duo Stand",
    description: "Two polished working blades presented on a sculptural stand, balancing utility with showroom presence.",
    steel: "Mirror Damascus Finish",
    price: "Contact for price",
    kanji: "鋼",
    image: "/images/image4.jpg",
  },
  {
    name: "Abalone Gyuto",
    description: "A refined gyuto with a luminous abalone-style handle and visible Damascus patterning along the blade face.",
    steel: "Patterned Damascus Steel",
    price: "Contact for price",
    kanji: "匠",
    image: "/images/image5.jpg",
  },
  {
    name: "Gold Fleck Cleaver",
    description: "A bold rectangular profile with a textured finish and dramatic black-and-gold handle presentation box.",
    steel: "Textured Steel Cleaver",
    price: "Contact for price",
    kanji: "菜",
    image: "/images/image1.jpg",
  },
  {
    name: "Thike Pro Showcase Gyuto",
    description: "A premium presentation piece photographed with the Thike Pro mark, red-lined case, and ceremonial display stand.",
    steel: "Premium Damascus Display Piece",
    price: "Contact for price",
    kanji: "職",
    image: "/images/image3.jpg",
  },
  {
    name: "Kiritsuke Cleaver Profile",
    description: "A sculptural hybrid silhouette with strong heel presence, sharp tip geometry, and a high-contrast luxury handle.",
    steel: "Statement Forged Steel",
    price: "Contact for price",
    kanji: "力",
    image: "/images/image1.jpg",
  },
];

export const featuredKnives = allKnives.slice(0, 3);
