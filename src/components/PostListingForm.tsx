"use client";

import { useState } from "react";
import { T, Currency, Branch } from "gt-next";
import { useGT } from "gt-next/client";
import { categories } from "@/data/categories";
import { ConditionBadge } from "@/components/ListingCard";
import { Condition } from "@/data/listings";

const STEPS = ["Photos", "Details", "Pricing", "Review"];
const CONDITIONS: { value: Condition; label: string }[] = [
  { value: "new", label: "New" },
  { value: "likeNew", label: "Like New" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
];

export default function PostListingForm() {
  const t = useGT();
  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState<string[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [condition, setCondition] = useState<Condition>("good");
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [negotiable, setNegotiable] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedCat = categories.find((c) => c.slug === category);

  const errors: Record<number, string[]> = {
    0: photos.length === 0 ? [t("Add at least one photo")] : [],
    1: [
      ...(!title.trim() ? [t("Title is required")] : []),
      ...(!category ? [t("Select a category")] : []),
    ],
    2: [],
    3: [],
  };

  function addPlaceholderPhoto() {
    if (photos.length < 8) {
      setPhotos([...photos, `photo-${photos.length + 1}`]);
    }
  }

  function removePhoto(index: number) {
    setPhotos(photos.filter((_, i) => i !== index));
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <T>
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Listing Posted</h2>
          <p className="text-neutral-500 mb-6">Your listing is now live and visible to buyers in your area.</p>
        </T>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">{t("Post a Listing")}</h1>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1.5 rounded-full transition-colors ${i <= step ? "bg-blue-600" : "bg-neutral-200"}`} />
            <p className={`text-xs mt-1 ${i <= step ? "text-blue-600 font-medium" : "text-neutral-400"}`}>
              {t(s)}
            </p>
          </div>
        ))}
      </div>

      {/* Step 0: Photos */}
      {step === 0 && (
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">{t("Add Photos")}</h2>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
              dragOver ? "border-blue-400 bg-blue-50" : "border-neutral-300 hover:border-neutral-400"
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); addPlaceholderPhoto(); }}
            onClick={addPlaceholderPhoto}
          >
            <T>
              <svg className="w-10 h-10 text-neutral-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <p className="text-sm text-neutral-600 font-medium">Drag and drop photos here</p>
              <p className="text-xs text-neutral-400 mt-1">or click to browse (up to 8 photos)</p>
            </T>
          </div>
          {photos.length > 0 && (
            <div className="grid grid-cols-4 gap-3 mt-4">
              {photos.map((p, i) => (
                <div key={i} className="relative aspect-square bg-neutral-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <button
                    onClick={() => removePhoto(i)}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-black/80"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 1: Details */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">{t("Listing Details")}</h2>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">{t("Title")}</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t("What are you selling?")}
              className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">{t("Description")}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("Describe your item in detail...")}
              className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none h-32"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{t("Category")}</label>
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value); setSubcategory(""); }}
                className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">{t("Select category")}</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{t("Subcategory")}</label>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                disabled={!selectedCat}
                className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50"
              >
                <option value="">{t("Select subcategory")}</option>
                {selectedCat?.subcategories.map((sc) => (
                  <option key={sc.slug} value={sc.slug}>{sc.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Condition & Price */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">{t("Condition & Price")}</h2>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">{t("Condition")}</label>
            <div className="grid grid-cols-2 gap-2">
              {CONDITIONS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCondition(c.value)}
                  className={`border rounded-lg px-4 py-3 text-sm text-left transition-colors ${
                    condition === c.value
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-neutral-200 hover:border-neutral-300 text-neutral-700"
                  }`}
                >
                  {t(c.label)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={isFree}
                  onChange={(e) => { setIsFree(e.target.checked); if (e.target.checked) setPrice(""); }}
                  className="rounded border-neutral-300 text-blue-600 focus:ring-blue-200"
                />
                {t("This item is free")}
              </label>
            </div>
            {!isFree && (
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{t("Price (USD)")}</label>
                <input
                  type="number"
                  min={0}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <label className="flex items-center gap-2 text-sm mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={negotiable}
                    onChange={(e) => setNegotiable(e.target.checked)}
                    className="rounded border-neutral-300 text-blue-600 focus:ring-blue-200"
                  />
                  {t("Price is negotiable")}
                </label>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">{t("Review Your Listing")}</h2>
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <div className="aspect-[16/9] bg-neutral-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900">{title || t("Untitled")}</h3>
              <div className="flex items-center gap-2 mt-2">
                {isFree ? (
                  <span className="text-xl font-bold text-emerald-600"><T>Free</T></span>
                ) : (
                  <span className="text-xl font-bold text-neutral-900">
                    <Currency currency="USD">{Number(price) || 0}</Currency>
                  </span>
                )}
                {negotiable && <span className="text-xs text-neutral-400"><T>Negotiable</T></span>}
              </div>
              <div className="mt-2">
                <ConditionBadge condition={condition} />
              </div>
              {description && (
                <p className="text-sm text-neutral-600 mt-3">{description}</p>
              )}
              <T>
                <p className="text-xs text-neutral-400 mt-2">
                  {selectedCat?.name || "No category"}{subcategory && ` > ${selectedCat?.subcategories.find((s) => s.slug === subcategory)?.name || subcategory}`}
                </p>
                <p className="text-xs text-neutral-400">{photos.length} photo(s)</p>
              </T>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className="px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors disabled:opacity-40"
        >
          {t("Back")}
        </button>
        {step < 3 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {t("Next")}
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {t("Post Listing")}
          </button>
        )}
      </div>
    </div>
  );
}
