export type Drink = {
  name: string;
  brand: string;
  carbonated: boolean;
  juice: boolean;
  specificRating: number;
  realFlavorRating: number;
  adFlavorRating: number;
  review: string;
  image: string;
};

export const drinks: Drink[] = [
  {
    name: "Lemon Spindrift",
    brand: "Spindrift",
    carbonated: true,
    juice: false,
    specificRating: 4,
    realFlavorRating: 7,
    adFlavorRating: 7,
    image: "/images/spindrift-lemon.png",
    review:
      "This one is an acquired taste. It's like lemonade without as much sugar or flavor, but I find myself bored of it after a while. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "Grapeade Spindrift",
    brand: "Spindrift",
    carbonated: true,
    juice: false,
    specificRating: 4,
    realFlavorRating: 8,
    adFlavorRating: 8,
    image: "/images/spindrift-grape.png",
    review:
      "Grapeade is really good when you first try it, but then it gets worse as your expectations surpass what's possible from a no-sugar grape beverage. It's like grape juice, without the sickening sweetness. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "Cosnopolitan™ Spindrift",
    brand: "Spindrift",
    carbonated: true,
    juice: false,
    specificRating: 4,
    realFlavorRating: 2,
    adFlavorRating: 2,
    image: "/images/spindrift-cosnopolitanTM.png",
    review:
      "Cosnopolitan™ is one of the worst spindrift flavors out there. Imagine Ocean Spray, but sour and without any sugar. That's Cosnopolitan™ Spindrift. Do yourself a favor and dilute some cranberry juice with plain seltzer.",
  },
  {
    name: "Pineapple Spindrift",
    brand: "Spindrift",
    carbonated: true,
    juice: false,
    specificRating: 4,
    realFlavorRating: 8,
    adFlavorRating: 7,
    image: "/images/spindrift-pineapple.png",
    review:
      "Pineapple's really good. It tastes a bit sour, but generally tastes like pineapple and has good flavor. Not very sweet. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "Mango Orange Spindrift",
    brand: "Spindrift",
    carbonated: true,
    juice: false,
    specificRating: 4,
    realFlavorRating: 8,
    adFlavorRating: 6,
    image: "/images/spindrift-mango.png",
    review:
      "Mango Orange does not taste like orange. It smells like orange, but tastes like mango. I think that's a good thing. It's well flavored. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
];

export const ratingScale = 10;

export const computeCompositeScore = (drink: Drink): number => {
  const weights = {
    specificRating: 0.1,
    realFlavorRating: 0.45,
    adFlavorRating: 0.45,
  };

  return (
    drink.specificRating * weights.specificRating +
    drink.realFlavorRating * weights.realFlavorRating +
    drink.adFlavorRating * weights.adFlavorRating
  );
};

// {
//     name: "",
//     brand: "",
//     carbonated: true,
//     overallRating: ,
//     specificRating: ,
//     realFlavorRating: ,
//     adFlavorRating: ,
//     image: "images/",
//     review: "",
//   },
