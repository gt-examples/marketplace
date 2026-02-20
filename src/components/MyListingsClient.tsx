"use client";

import { useState } from "react";
import { T, Currency, Branch, DateTime } from "gt-next";
import { useGT } from "gt-next/client";
import Link from "next/link";
import { listings } from "@/data/listings";
import { ConditionBadge } from "@/components/ListingCard";

type Tab = "active" | "sold" | "all";

// Simulate user's own listings (first 6)
const myListings = listings.slice(0, 6).map((l, i) => ({
  ...l,
  status: i < 4 ? ("active" as const) : ("sold" as const),
}));

export default function MyListingsClient() {
  const t = useGT();
  const [tab, setTab] = useState<Tab>("active");
  const [items, setItems] = useState(myListings);

  const filtered = tab === "all" ? items : items.filter((l) => l.status === tab);

  function markSold(id: string) {
    setItems((prev) => prev.map((l) => (l.id === id ? { ...l, status: "sold" as const } : l)));
  }

  function deleteListing(id: string) {
    setItems((prev) => prev.filter((l) => l.id !== id));
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "active", label: "Active" },
    { key: "sold", label: "Sold" },
    { key: "all", label: "All" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">{t("My Listings")}</h1>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-neutral-200 mb-6">
        {tabs.map((tb) => (
          <button
            key={tb.key}
            onClick={() => setTab(tb.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              tab === tb.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {t(tb.label)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <T>
            <p className="text-neutral-400 text-lg">No listings in this tab</p>
          </T>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((listing) => (
            <div key={listing.id} className="border border-neutral-200 rounded-lg p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-neutral-100 rounded-lg shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Link href={`/listing/${listing.id}`} className="text-sm font-semibold text-neutral-900 truncate hover:text-blue-600 transition-colors">
                    <T>{listing.title}</T>
                  </Link>
                  <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                    listing.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-neutral-100 text-neutral-500"
                  }`}>
                    <T>
                      <Branch branch={listing.status} active="Active" sold="Sold" />
                    </T>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span>
                    {listing.isFree ? (
                      <T>Free</T>
                    ) : (
                      <Currency currency={listing.currency}>{listing.price}</Currency>
                    )}
                  </span>
                  <ConditionBadge condition={listing.condition} />
                  <span><DateTime>{new Date(listing.postedAt)}</DateTime></span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {listing.status === "active" && (
                  <button
                    onClick={() => markSold(listing.id)}
                    className="text-xs px-3 py-1.5 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-50 transition-colors"
                  >
                    {t("Mark Sold")}
                  </button>
                )}
                <button
                  onClick={() => deleteListing(listing.id)}
                  className="text-xs px-3 py-1.5 border border-red-200 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  {t("Delete")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
