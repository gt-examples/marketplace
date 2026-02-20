"use client";

import { useState, useMemo } from "react";
import { T, Plural, Num } from "gt-next";
import { useGT } from "gt-next/client";
import ListingCard from "@/components/ListingCard";
import { listings, Listing, Condition } from "@/data/listings";
import { categories } from "@/data/categories";

const CONDITIONS: Condition[] = ["new", "likeNew", "good", "fair"];
const CONDITION_LABELS: Record<Condition, string> = {
  new: "New",
  likeNew: "Like New",
  good: "Good",
  fair: "Fair",
};
const SORT_OPTIONS = ["newest", "priceLow", "priceHigh", "mostViewed"] as const;
type SortOption = (typeof SORT_OPTIONS)[number];

const PAGE_SIZE = 9;

export default function HomeClient() {
  const t = useGT();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [conditions, setConditions] = useState<Set<Condition>>(new Set());
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(20000);
  const [sort, setSort] = useState<SortOption>("newest");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allTitles = useMemo(() => listings.map((l) => l.title), []);

  function handleSearch(val: string) {
    setSearch(val);
    setPage(1);
    if (val.length > 1) {
      const lower = val.toLowerCase();
      setSuggestions(allTitles.filter((t) => t.toLowerCase().includes(lower)).slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }

  function toggleCondition(c: Condition) {
    setConditions((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
    setPage(1);
  }

  const filtered = useMemo(() => {
    let result = [...listings];
    if (search) {
      const lower = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.title.toLowerCase().includes(lower) ||
          l.description.toLowerCase().includes(lower)
      );
    }
    if (category) result = result.filter((l) => l.category === category);
    if (conditions.size > 0) result = result.filter((l) => conditions.has(l.condition));
    result = result.filter((l) => l.price >= priceMin && l.price <= priceMax);

    switch (sort) {
      case "newest":
        result.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
        break;
      case "priceLow":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        result.sort((a, b) => b.price - a.price);
        break;
      case "mostViewed":
        result.sort((a, b) => b.views - a.views);
        break;
    }
    return result;
  }, [search, category, conditions, priceMin, priceMax, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <T>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Find great deals near you</h1>
            <p className="text-blue-100 mb-6">Buy and sell locally with people in your community</p>
          </T>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => search.length > 1 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder={t("Search listings...")}
              className="w-full px-4 py-3 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-neutral-200 z-10">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 first:rounded-t-lg last:rounded-b-lg"
                    onMouseDown={() => { setSearch(s); setShowSuggestions(false); setPage(1); }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Controls bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="text-sm text-neutral-500">
            <Plural n={filtered.length}
              singular={<T><Num>{filtered.length}</Num> result</T>}
              plural={<T><Num>{filtered.length}</Num> results</T>}
            />
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              {t(showFilters ? "Hide Filters" : "Show Filters")}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm border border-neutral-200 rounded-lg px-3 py-2 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="newest">{t("Newest First")}</option>
              <option value="priceLow">{t("Price: Low to High")}</option>
              <option value="priceHigh">{t("Price: High to Low")}</option>
              <option value="mostViewed">{t("Most Viewed")}</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-56 shrink-0`}>
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">{t("Category")}</h3>
                <select
                  value={category}
                  onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                  className="w-full text-sm border border-neutral-200 rounded-lg px-3 py-2 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">{t("All Categories")}</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">{t("Price Range")}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      value={priceMin}
                      onChange={(e) => { setPriceMin(Number(e.target.value)); setPage(1); }}
                      className="w-full text-sm border border-neutral-200 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder={t("Min")}
                    />
                    <span className="text-neutral-400">-</span>
                    <input
                      type="number"
                      min={0}
                      value={priceMax}
                      onChange={(e) => { setPriceMax(Number(e.target.value)); setPage(1); }}
                      className="w-full text-sm border border-neutral-200 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder={t("Max")}
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    step={100}
                    value={priceMax}
                    onChange={(e) => { setPriceMax(Number(e.target.value)); setPage(1); }}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>

              {/* Condition */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">{t("Condition")}</h3>
                <div className="space-y-1.5">
                  {CONDITIONS.map((c) => (
                    <label key={c} className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={conditions.has(c)}
                        onChange={() => toggleCondition(c)}
                        className="rounded border-neutral-300 text-blue-600 focus:ring-blue-200"
                      />
                      {t(CONDITION_LABELS[c])}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Listing grid */}
          <div className="flex-1">
            {paged.length === 0 ? (
              <div className="text-center py-16">
                <T>
                  <p className="text-neutral-400 text-lg mb-2">No listings found</p>
                  <p className="text-neutral-400 text-sm">Try adjusting your filters or search terms</p>
                </T>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {paged.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-3 py-1.5 text-sm border border-neutral-200 rounded-lg disabled:opacity-40 hover:bg-neutral-50 transition-colors"
                    >
                      {t("Previous")}
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                          p === page
                            ? "bg-blue-600 text-white"
                            : "border border-neutral-200 hover:bg-neutral-50"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="px-3 py-1.5 text-sm border border-neutral-200 rounded-lg disabled:opacity-40 hover:bg-neutral-50 transition-colors"
                    >
                      {t("Next")}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
