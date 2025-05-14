"use client";

import { useState } from "react";
import Footer from "./components/Footer";

import {
  Drink,
  drinks,
  ratingScale,
  computeCompositeScore,
} from "./data/drinks";
import Image from "next/image";

function SpecificTypeRating(drink: Drink) {
  if (drink.carbonated) {
    return "Carbonation Rating";
  }
  if (drink.juice) {
    return "Sweetness Rating";
  }
  if (drink.NA) {
    return "Similarity Rating";
  }
}
export default function HomePage() {
  const [filters, setFilters] = useState({
    spindrift: true,
    sanpellegrino: true,
    carbonatedOnly: false,
    NAOnly: false,
  });

  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const toggleFilter = (key: keyof typeof filters) =>
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredDrinks = drinks
    .filter((drink) => {
      const carbonatedMatch = !filters.carbonatedOnly || drink.carbonated;
      const NAMatch = !filters.NAOnly || !drink.NA;
      return carbonatedMatch && NAMatch;
    })
    .sort((a, b) => computeCompositeScore(b) - computeCompositeScore(a));

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🥤 Drink Review Tracker</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <label>
          <input
            type="checkbox"
            checked={filters.carbonatedOnly}
            onChange={() => toggleFilter("carbonatedOnly")}
            className="mr-2"
          />
          Carbonated Only
        </label>

        <label>
          <input
            type="checkbox"
            checked={filters.NAOnly}
            onChange={() => toggleFilter("NAOnly")}
            className="mr-2"
          />
          Exclude Mocktails / NA Alcohols
        </label>
      </div>

      <div className="grid gap-4">
        {filteredDrinks.map((drink, idx) => (
          <div
            key={idx}
            className="border rounded p-4 shadow cursor-pointer hover:bg-gray-50"
            onClick={() => setSelectedDrink(drink)}
          >
            <h2 className="text-lg font-semibold">{drink.name}</h2>
            <p className="text-sm text-gray-600">
              {drink.brand} • {drink.carbonated ? "Carbonated" : "Still"}{" "}
              {drink.juice ? "• Juice" : ""} {drink.NA ? "• NA Beverage" : ""} •{" "}
              {computeCompositeScore(drink).toFixed(2)}⭐
            </p>
          </div>
        ))}
      </div>

      {selectedDrink && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-3xl relative flex items-center">
            <div className="w-1/3 flex justify-center">
              <Image
                src={selectedDrink.image}
                alt={selectedDrink.name}
                width={128}
                height={128}
                className="rounded-md object-cover"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-xl font-bold mb-1">{selectedDrink.name}</h2>
              <p className="text-gray-700 mb-1">
                <strong>Brand:</strong> {selectedDrink.brand}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Overall Rating:</strong>{" "}
                {computeCompositeScore(selectedDrink).toFixed(2)}/{ratingScale}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>{SpecificTypeRating(selectedDrink)}:</strong>{" "}
                {selectedDrink.specificRating}/{ratingScale}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Flavor Rating:</strong> {selectedDrink.realFlavorRating}
                /{ratingScale}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Similarity to Advertised Flavor:</strong>{" "}
                {selectedDrink.adFlavorRating}/{ratingScale}
              </p>
              <p className="text-gray-700 mb-3">{selectedDrink.review}</p>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setSelectedDrink(null)}
              >
                ✕
              </button>
            </div>
          </div>
          <div
            className="absolute inset-0"
            onClick={() => setSelectedDrink(null)}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}
