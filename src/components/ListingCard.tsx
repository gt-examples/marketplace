"use client";

import { T, Currency, DateTime, Branch, Num, Var } from "gt-next";
import Link from "next/link";
import { Listing } from "@/data/listings";
import { useFavorites } from "@/context/FavoritesContext";

function ConditionBadge({ condition }: { condition: string }) {
  const colors: Record<string, string> = {
    new: "bg-emerald-100 text-emerald-700",
    likeNew: "bg-blue-100 text-blue-700",
    good: "bg-amber-100 text-amber-700",
    fair: "bg-orange-100 text-orange-700",
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${colors[condition] || "bg-neutral-100 text-neutral-600"}`}>
      <T>
        <Branch branch={condition} new="New" likeNew="Like New" good="Good" fair="Fair" />
      </T>
    </span>
  );
}

export { ConditionBadge };

export default function ListingCard({ listing }: { listing: Listing }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(listing.id);

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white group">
      <Link href={`/listing/${listing.id}`}>
        <div className="aspect-[4/3] bg-neutral-100 relative flex items-center justify-center">
          <svg className="w-12 h-12 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/listing/${listing.id}`} className="min-w-0">
            <h3 className="text-sm font-semibold text-neutral-900 truncate group-hover:text-blue-600 transition-colors">
              {listing.title}
            </h3>
          </Link>
          <button
            onClick={(e) => { e.preventDefault(); toggleFavorite(listing.id); }}
            className="shrink-0 p-1 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Toggle favorite"
          >
            <svg className={`w-5 h-5 ${fav ? "text-red-500 fill-red-500" : "text-neutral-400"}`} viewBox="0 0 24 24" fill={fav ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 mb-2">
          {listing.isFree ? (
            <span className="text-lg font-bold text-emerald-600"><T>Free</T></span>
          ) : (
            <span className="text-lg font-bold text-neutral-900">
              <Currency currency={listing.currency}>{listing.price}</Currency>
            </span>
          )}
          {listing.negotiable && (
            <span className="text-xs text-neutral-400"><T>Negotiable</T></span>
          )}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <ConditionBadge condition={listing.condition} />
        </div>
        <T>
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span><Var>{listing.location}</Var></span>
            <span><DateTime>{new Date(listing.postedAt)}</DateTime></span>
          </div>
          <div className="text-xs text-neutral-400 mt-1">
            <Num>{listing.views}</Num> views
          </div>
        </T>
      </div>
    </div>
  );
}
