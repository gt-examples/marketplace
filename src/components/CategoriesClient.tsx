"use client";

import { useState } from "react";
import { T, Num, Plural, Var } from "gt-next";
import { useGT } from "gt-next/client";
import Link from "next/link";
import { categories, Category } from "@/data/categories";

export default function CategoriesClient() {
  const gt = useGT();
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-neutral-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-neutral-600 transition-colors">{gt("Home")}</Link>
        <span>/</span>
        {selected ? (
          <>
            <button onClick={() => setSelected(null)} className="hover:text-neutral-600 transition-colors">{gt("Categories")}</button>
            <span>/</span>
            <span className="text-neutral-600">{selected.name}</span>
          </>
        ) : (
          <span className="text-neutral-600">{gt("Categories")}</span>
        )}
      </nav>

      <h1 className="text-2xl font-bold text-neutral-900 mb-8">
        {selected ? selected.name : gt("Browse by Category")}
      </h1>

      {!selected ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const total = cat.subcategories.reduce((sum, s) => sum + s.count, 0);
            return (
              <button
                key={cat.slug}
                onClick={() => setSelected(cat)}
                className="border border-neutral-200 rounded-lg p-6 text-center hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">{cat.name}</h3>
                <p className="text-xs text-neutral-400">
                  <T>
                    <Plural n={total}
                      singular={<><Num>{total}</Num> listing</>}
                      plural={<><Num>{total}</Num> listings</>}
                    />
                  </T>
                </p>
              </button>
            );
          })}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelected(null)}
            className="text-sm text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            {gt("All Categories")}
          </button>
          <div className="space-y-2">
            {selected.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href="/"
                className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:shadow-sm hover:border-blue-200 transition-all"
              >
                <span className="text-sm font-medium text-neutral-900">{sub.name}</span>
                <span className="text-sm text-neutral-400">
                  <T>
                    <Plural n={sub.count}
                      singular={<><Num>{sub.count}</Num> listing</>}
                      plural={<><Num>{sub.count}</Num> listings</>}
                    />
                  </T>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
