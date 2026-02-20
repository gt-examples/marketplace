export interface Subcategory {
  slug: string;
  name: string;
  count: number;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  {
    slug: "electronics",
    name: "Electronics",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    subcategories: [
      { slug: "phones", name: "Phones & Tablets", count: 42 },
      { slug: "computers", name: "Computers & Laptops", count: 38 },
      { slug: "audio", name: "Audio & Headphones", count: 27 },
      { slug: "cameras", name: "Cameras & Photography", count: 15 },
      { slug: "gaming", name: "Gaming", count: 31 },
    ],
  },
  {
    slug: "vehicles",
    name: "Vehicles",
    icon: "M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6",
    subcategories: [
      { slug: "cars", name: "Cars", count: 64 },
      { slug: "trucks", name: "Trucks & SUVs", count: 28 },
      { slug: "motorcycles", name: "Motorcycles", count: 19 },
      { slug: "parts", name: "Parts & Accessories", count: 45 },
    ],
  },
  {
    slug: "home",
    name: "Home & Garden",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    subcategories: [
      { slug: "furniture", name: "Furniture", count: 53 },
      { slug: "appliances", name: "Appliances", count: 34 },
      { slug: "garden", name: "Garden & Outdoor", count: 22 },
      { slug: "decor", name: "Home Decor", count: 41 },
      { slug: "tools", name: "Tools & Hardware", count: 29 },
    ],
  },
  {
    slug: "clothing",
    name: "Clothing & Accessories",
    icon: "M16 11V3a1 1 0 00-1-1H9a1 1 0 00-1 1v8M4 15h16M6 11h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z",
    subcategories: [
      { slug: "mens", name: "Men's Clothing", count: 37 },
      { slug: "womens", name: "Women's Clothing", count: 48 },
      { slug: "shoes", name: "Shoes", count: 33 },
      { slug: "accessories", name: "Bags & Accessories", count: 26 },
    ],
  },
  {
    slug: "sports",
    name: "Sports & Outdoors",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    subcategories: [
      { slug: "fitness", name: "Fitness Equipment", count: 24 },
      { slug: "cycling", name: "Cycling", count: 18 },
      { slug: "camping", name: "Camping & Hiking", count: 21 },
      { slug: "water", name: "Water Sports", count: 12 },
      { slug: "team", name: "Team Sports", count: 16 },
    ],
  },
  {
    slug: "books",
    name: "Books & Media",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    subcategories: [
      { slug: "textbooks", name: "Textbooks", count: 30 },
      { slug: "fiction", name: "Fiction & Literature", count: 44 },
      { slug: "movies", name: "Movies & TV", count: 19 },
      { slug: "vinyl", name: "Vinyl Records", count: 14 },
    ],
  },
  {
    slug: "toys",
    name: "Toys & Games",
    icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5",
    subcategories: [
      { slug: "board-games", name: "Board Games", count: 22 },
      { slug: "video-games", name: "Video Games", count: 35 },
      { slug: "kids", name: "Kids Toys", count: 28 },
      { slug: "collectibles", name: "Collectibles", count: 17 },
    ],
  },
  {
    slug: "music",
    name: "Musical Instruments",
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    subcategories: [
      { slug: "guitars", name: "Guitars", count: 26 },
      { slug: "keyboards", name: "Keyboards & Pianos", count: 14 },
      { slug: "drums", name: "Drums & Percussion", count: 11 },
      { slug: "brass", name: "Brass & Woodwind", count: 8 },
      { slug: "pro-audio", name: "Pro Audio & DJ", count: 13 },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllSubcategories(): Subcategory[] {
  return categories.flatMap((c) => c.subcategories);
}
