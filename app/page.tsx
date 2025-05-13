"use client";

import { useState } from "react";
import {
  Drink,
  drinks,
  ratingScale,
  computeCompositeScore,
} from "./data/drinks";
import Image from "next/image";

export default function HomePage() {
  const [filters, setFilters] = useState({
    spindrift: true,
    sanpellegrino: true,
    carbonatedOnly: false,
  });

  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  const toggleFilter = (key: keyof typeof filters) =>
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredDrinks = drinks
    .filter((drink) => {
      const carbonatedMatch = !filters.carbonatedOnly || drink.carbonated;

      return carbonatedMatch;
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
              {drink.brand} • {drink.carbonated ? "Carbonated" : "Still"} •{" "}
              {computeCompositeScore(drink).toFixed(2)}⭐
            </p>
          </div>
        ))}
      </div>

      {selectedDrink && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Image
            src={selectedDrink.image}
            alt={selectedDrink.name}
            width={128}
            height={128}
            className="rounded-md object-cover"
          />
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
            <h2 className="text-xl font-bold mb-1">{selectedDrink.name}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Brand:</strong> {selectedDrink.brand}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Overall Rating:</strong>{" "}
              {computeCompositeScore(selectedDrink).toFixed(2)}/{ratingScale}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Carbonation Rating:</strong>{" "}
              {selectedDrink.carbonationRating}/{ratingScale}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Flavor Rating:</strong> {selectedDrink.realFlavorRating}/
              {ratingScale}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Similarity to Advertised Flavor:</strong>{" "}
              {selectedDrink.adFlavorRating}/{ratingScale}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Scent Rating:</strong> {selectedDrink.scentRating}/
              {ratingScale}
            </p>
            <p className="text-gray-700 mb-3">{selectedDrink.review}</p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedDrink(null)}
            >
              ✕
            </button>
          </div>
          <div
            className="absolute inset-0"
            onClick={() => setSelectedDrink(null)}
          />
        </div>
      )}
    </div>
  );
}
