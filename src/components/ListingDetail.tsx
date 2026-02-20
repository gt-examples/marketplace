"use client";

import { useState } from "react";
import { T, Currency, DateTime, Branch, Num, Plural } from "gt-next";
import { useGT } from "gt-next/client";
import Link from "next/link";
import { Listing, getSimilarListings } from "@/data/listings";
import { Seller } from "@/data/sellers";
import { useFavorites } from "@/context/FavoritesContext";
import { ConditionBadge } from "@/components/ListingCard";
import ListingCard from "@/components/ListingCard";

export default function ListingDetail({ listing, seller }: { listing: Listing; seller: Seller }) {
  const t = useGT();
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(listing.id);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const similar = getSimilarListings(listing, 4);
  // Simulate multiple images
  const images = [1, 2, 3, 4];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-neutral-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-neutral-600 transition-colors">{t("Home")}</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-neutral-600 transition-colors">{t("Categories")}</Link>
        <span>/</span>
        <span className="text-neutral-600"><T>{listing.title}</T></span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Images */}
        <div className="lg:col-span-3">
          {/* Main image */}
          <div
            className="aspect-[4/3] bg-neutral-100 rounded-lg flex items-center justify-center relative cursor-pointer mb-3"
            onClick={() => setFullscreen(true)}
          >
            <svg className="w-16 h-16 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {imgIndex + 1} / {images.length}
            </div>
            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i - 1 + images.length) % images.length); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors shadow"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i + 1) % images.length); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors shadow"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === imgIndex ? "bg-blue-600" : "bg-neutral-300"}`}
              />
            ))}
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">{t("Description")}</h2>
            <p className="text-neutral-600 text-sm leading-relaxed"><T>{listing.description}</T></p>
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2"><T>{listing.title}</T></h1>
            <div className="flex items-center gap-3 mb-3">
              {listing.isFree ? (
                <span className="text-3xl font-bold text-emerald-600"><T>Free</T></span>
              ) : (
                <span className="text-3xl font-bold text-neutral-900">
                  <Currency currency={listing.currency}>{listing.price}</Currency>
                </span>
              )}
              {listing.negotiable && (
                <span className="text-sm text-neutral-400"><T>Negotiable</T></span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-3">
              <ConditionBadge condition={listing.condition} />
            </div>
            <T>
              <div className="text-sm text-neutral-500 space-y-1">
                <p>{listing.location}</p>
                <p>Listed <DateTime>{new Date(listing.postedAt)}</DateTime></p>
                <p><Num>{listing.views}</Num> views</p>
              </div>
            </T>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowMessage(true)}
              className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {t("Message Seller")}
            </button>
            <button
              onClick={() => toggleFavorite(listing.id)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                fav ? "border-red-200 text-red-600 bg-red-50" : "border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {fav ? t("Saved") : t("Save")}
            </button>
          </div>

          {/* Seller card */}
          <div className="border border-neutral-200 rounded-lg p-4">
            <T>
              <h3 className="text-sm font-semibold text-neutral-900 mb-3">Seller</h3>
            </T>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                {seller.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">{seller.name}</p>
                <T>
                  <p className="text-xs text-neutral-400">
                    Member since <DateTime>{new Date(seller.memberSince)}</DateTime>
                  </p>
                </T>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-neutral-50 rounded p-2">
                <p className="font-semibold text-neutral-900">{seller.rating}</p>
                <p className="text-neutral-400">{t("Rating")}</p>
              </div>
              <div className="bg-neutral-50 rounded p-2">
                <T>
                  <p className="font-semibold text-neutral-900">
                    <Branch branch={seller.responseTime} withinHour="< 1hr" withinDay="< 24hr" />
                  </p>
                  <p className="text-neutral-400">Response</p>
                </T>
              </div>
              <div className="bg-neutral-50 rounded p-2">
                <p className="font-semibold text-neutral-900"><Num>{seller.listingCount}</Num></p>
                <Plural n={seller.listingCount}
                  singular={<p className="text-neutral-400"><T>Listing</T></p>}
                  plural={<p className="text-neutral-400"><T>Listings</T></p>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar listings */}
      {similar.length > 0 && (
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">{t("Similar Listings")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {similar.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      )}

      {/* Message modal */}
      {showMessage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowMessage(false)}>
          <div className="bg-white rounded-lg max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            {messageSent ? (
              <T>
                <div className="text-center py-4">
                  <p className="text-lg font-semibold text-neutral-900 mb-2">Message Sent</p>
                  <p className="text-sm text-neutral-500">The seller will get back to you soon.</p>
                  <button
                    onClick={() => { setShowMessage(false); setMessageSent(false); setMessageText(""); }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </T>
            ) : (
              <>
                <T>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">Message Seller</h3>
                  <p className="text-sm text-neutral-500 mb-4">Send a message to {seller.name}</p>
                </T>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={t("Hi, is this still available?")}
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none h-28"
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setShowMessage(false)}
                    className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {t("Cancel")}
                  </button>
                  <button
                    onClick={() => setMessageSent(true)}
                    disabled={!messageText.trim()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-40"
                  >
                    {t("Send")}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Fullscreen image modal */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center" onClick={() => setFullscreen(false)}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={() => setFullscreen(false)}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="w-full max-w-3xl aspect-[4/3] bg-neutral-800 rounded-lg flex items-center justify-center mx-4">
            <svg className="w-24 h-24 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i - 1 + images.length) % images.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setImgIndex((i) => (i + 1) % images.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="absolute bottom-4 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setImgIndex(i); }} className={`w-3 h-3 rounded-full ${i === imgIndex ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
