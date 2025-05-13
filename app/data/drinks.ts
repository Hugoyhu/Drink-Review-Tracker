export type Drink = {
  name: string;
  brand: string;
  carbonated: boolean;
  carbonationRating: number;
  realFlavorRating: number;
  adFlavorRating: number;
  scentRating: number;
  review: string;
  image: string;
};

export const drinks: Drink[] = [
  {
    name: "Lemon Spindrift",
    brand: "Spindrift",
    carbonated: true,
    carbonationRating: 4,
    realFlavorRating: 7,
    adFlavorRating: 7,
    scentRating: 5,
    image: "/images/spindrift-lemon.png",
    review: "Very refreshing with a tart lemon punch.",
  },
];

export const ratingScale = 10;

export const computeCompositeScore = (drink: Drink): number => {
  const weights = {
    carbonationRating: 0.15,
    realFlavorRating: 0.45,
    adFlavorRating: 0.35,
    scentRating: 0.05,
  };

  return (
    drink.carbonationRating * weights.carbonationRating +
    drink.realFlavorRating * weights.realFlavorRating +
    drink.adFlavorRating * weights.adFlavorRating +
    drink.scentRating * weights.scentRating
  );
};

// {
//     name: "",
//     brand: "",
//     carbonated: true,
//     overallRating: ,
//     carbonationRating: ,
//     realFlavorRating: ,
//     adFlavorRating: ,
//     scentRating: ,
//     image: "images/",
//     review: "",
//   },
