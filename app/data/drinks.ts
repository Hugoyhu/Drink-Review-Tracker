export type Drink = {
  name: string;
  brand: string;
  type: string;
  specificRating: number;
  realFlavorRating: number;
  adFlavorRating: number;
  review: string;
  image: string;
};

const src = "/images/";

export const drinks: Drink[] = [
  {
    name: "Lemon Spindrift",
    brand: "Spindrift",
    type: "Carbonated",
    specificRating: 4,
    realFlavorRating: 7,
    adFlavorRating: 7,
    image: src + "spindrift-lemon.png",
    review:
      "This one is an acquired taste. It's like lemonade without as much sugar or flavor, but I find myself bored of it after a while. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "Grapeade Spindrift",
    brand: "Spindrift",
    type: "Carbonated",
    specificRating: 4,
    realFlavorRating: 8,
    adFlavorRating: 8,
    image: src + "spindrift-grape.png",
    review:
      "Grapeade is really good when you first try it, but then it gets worse as your expectations surpass what's possible from a no-sugar grape beverage. It's like grape juice, without the sickening sweetness. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "Cosnopolitan™ Spindrift",
    brand: "Spindrift",
    type: "Carbonated",
    specificRating: 4,
    realFlavorRating: 5,
    adFlavorRating: 3,
    image: src + "spindrift-cosnopolitanTM.png",
    review:
      "Cosnopolitan™ is just fine. Imagine Ocean Spray, but sour and without any sugar. That's Cosnopolitan™ Spindrift. Do yourself a favor and dilute some cranberry juice with plain seltzer. Or buy some orange juice.",
  },
  {
    name: "Pineapple Spindrift",
    brand: "Spindrift",
    type: "Carbonated",
    specificRating: 4,
    realFlavorRating: 8,
    adFlavorRating: 7,
    image: src + "spindrift-pineapple.png",
    review:
      "Pineapple's really good. It tastes a bit sour, but generally tastes like pineapple and has good flavor. Not very sweet. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "Mango Orange Spindrift",
    brand: "Spindrift",
    type: "Carbonated",
    specificRating: 4,
    realFlavorRating: 8,
    adFlavorRating: 6,
    image: src + "spindrift-mango.png",
    review:
      "Mango Orange does not taste like orange. It smells like orange, but tastes like mango. I think that's a good thing. It's well flavored. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "Raspberry Lime Spindrift",
    brand: "Spindrift",
    type: "Carbonated",
    specificRating: 4,
    realFlavorRating: 2,
    adFlavorRating: 3,
    image: src + "spindrift-raspberry.png",
    review:
      "Raspberry Lime Spindrift has no flavor. At best, you can imagine the taste of the water used to wash raspberries. You might as well get plain seltzer and use frozen raspberries as ice cubes while you drink, and I'm sure you'd get more flavor.",
  },
  {
    name: "Island Punch Spindrift",
    brand: "Spindrift",
    type: "Carbonated",
    specificRating: 4,
    realFlavorRating: 6,
    adFlavorRating: 6,
    image: src + "spindrift-islandpunch.png",
    review:
      "Island Punch tastes similar to actual punch, without the sickening sweetness. You can taste the guava and a bit of passionfruit. It's a bit tart. Like all spindrift flavors, it's not heavily carbonated but still has a light kick.",
  },
  {
    name: "G&G Peach Bellini",
    brand: "Good & Gather (Target)",
    type: "Carbonated",
    specificRating: 2.5,
    realFlavorRating: 0,
    adFlavorRating: 0,
    image: src + "target-peachbellini.jpeg",
    review:
      "G&G Peach Bellini is one of the worst 'flavored' seltzers out there. It sounds like a great flavor until you try it - there is no flavor. You get the whiff of what you're missing out on, and you're gaslit into thinking there's flavor there (there's not). For an unflavored 'flavored' seltzer, it's not even a good one at that. Has a slightly sweet but indiscernible taste.",
  },
  {
    name: "G&G Ginger Peach",
    brand: "Good & Gather (Target)",
    type: "Carbonated",
    specificRating: 2.5,
    realFlavorRating: 0,
    adFlavorRating: 0,
    image: src + "target-gingerpeach.jpeg",
    review:
      "G&G Ginger Peach is one of the worst 'flavored' seltzers out there. It sounds like a great flavor until you try it - there is no flavor. You get the whiff of what you're missing out on, and you're gaslit into thinking there's flavor there (there's not). For an unflavored 'flavored' seltzer, it's not even a good one at that. Has a slightly sweet but indiscernible taste.",
  },
  {
    name: "G&G Pomegranate Dragon Fruit",
    brand: "Good & Gather (Target)",
    type: "Carbonated",
    specificRating: 2.5,
    realFlavorRating: 0,
    adFlavorRating: 0,
    image: src + "target-pomegranate.jpeg",
    review:
      "G&G Peach Bellini is one of the worst 'flavored' seltzers out there. It sounds like a great flavor until you try it - there is no flavor. You get the whiff of what you're missing out on, and you're gaslit into thinking there's flavor there (there's not). For an unflavored 'flavored' seltzer, it's not even a good one at that. Has a slightly sweet but indiscernible taste.",
  },
  {
    name: "G&G Strawberry Mango",
    brand: "Good & Gather (Target)",
    type: "Carbonated",
    specificRating: 2.5,
    realFlavorRating: 0,
    adFlavorRating: 0,
    image: src + "target-strawberrymango.jpeg",
    review:
      "G&G Strawberry Mango is one of the worst 'flavored' seltzers out there. It sounds like a great flavor until you try it - there is no flavor. You get the whiff of what you're missing out on, and you're gaslit into thinking there's flavor there (there's not). For an unflavored 'flavored' seltzer, it's not even a good one at that. Has a slightly sweet but indiscernible taste.",
  },
  {
    name: "Heineken 0.0",
    brand: "Heineken",
    type: "Non-Alcoholic",
    specificRating: 5,
    realFlavorRating: 7,
    adFlavorRating: 6,
    image: src + "heineken-zero.png",
    review:
      "Heineken 0.0 tastes fine. It doesn't taste entirely like liquid wheat, has decent flavor and foams easily.",
  },
  {
    name: "Budweiser 0.0",
    brand: "Budweiser",
    type: "Non-Alcoholic",
    specificRating: 3,
    realFlavorRating: 3,
    adFlavorRating: 3,
    image: src + "budweiser-zero.png",
    review:
      "Budweiser 0.0 is underwhelming. Tastes a lot like wheat and doesn't have much flavor to it.",
  },
  {
    name: "Saint James Raspberry Black Tea",
    brand: "Saint James",
    type: "Tea",
    specificRating: 2,
    realFlavorRating: 3,
    adFlavorRating: 6,
    image: src + "SaintJamesBlackTeaRaspberry.jpeg",
    review:
      "It does taste like raspberry, but uses an artificial sweetener (stevia) that I'm not a fan of. The tea itself seems diluted and tastes like stevia'd raspberry.",
  },
  {
    name: "Sound Blueberry Cinnamon & Hibiscus Tea",
    brand: "Sound",
    type: "Carbonated",
    specificRating: 2,
    realFlavorRating: 2,
    adFlavorRating: 4,
    image: src + "SoundBlueberryCinnamon.png",
    review:
      "I can't taste the blueberry, and the tea isn't too strong. Cinnamon is pretty strong, carbonation is mediocre. This is like lightly carbonated cinnamon flavored sparkling water.",
  },
  {
    name: "Hint Crisp Apple",
    brand: "Hint",
    type: "Essenced Water",
    specificRating: 6,
    realFlavorRating: 5,
    adFlavorRating: 6,
    image: src + "hint-apple.jpg",
    review:
      "Hint is surprisingly good. The scent smells overly bold for a 'flavor infused water', but you can very much taste crisp and light apple notes.",
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
