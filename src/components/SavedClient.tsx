"use client";

import { useState } from "react";
import { T } from "gt-next";
import { useGT } from "gt-next/client";
import { listings } from "@/data/listings";
import { useFavorites } from "@/context/FavoritesContext";
import ListingCard from "@/components/ListingCard";

type SortOption = "dateSaved" | "priceLow" | "priceHigh";

export default function SavedClient() {
  const gt = useGT();
  const { favorites } = useFavorites();
  const [sort, setSort] = useState<SortOption>("dateSaved");

  const savedListings = listings.filter((l) => favorites.has(l.id));

  const sorted = [...savedListings].sort((a, b) => {
    if (sort === "priceLow") return a.price - b.price;
    if (sort === "priceHigh") return b.price - a.price;
    return 0; // dateSaved - keep original order
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">{gt("Saved Listings")}</h1>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="text-sm border border-neutral-200 rounded-lg px-3 py-2 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="dateSaved">{gt("Date Saved")}</option>
          <option value="priceLow">{gt("Price: Low to High")}</option>
          <option value="priceHigh">{gt("Price: High to Low")}</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-16">
          <T>
            <svg className="w-12 h-12 text-neutral-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-neutral-400 text-lg mb-2">No saved listings yet</p>
            <p className="text-neutral-400 text-sm">Tap the heart icon on any listing to save it here</p>
          </T>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}
