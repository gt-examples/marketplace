export type Condition = "new" | "likeNew" | "good" | "fair";

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  condition: Condition;
  category: string;
  subcategory: string;
  location: string;
  postedAt: string;
  sellerId: string;
  images: string[];
  views: number;
  isFree: boolean;
  negotiable: boolean;
}

export const listings: Listing[] = [
  {
    id: "1", title: "iPhone 15 Pro Max 256GB", description: "Barely used iPhone 15 Pro Max in Natural Titanium. Comes with original box, charger, and Apple Care+ until 2025. Screen protector installed since day one. No scratches or dents.",
    price: 899, currency: "USD", condition: "likeNew", category: "electronics", subcategory: "phones",
    location: "San Francisco, CA", postedAt: "2025-02-16T10:30:00Z", sellerId: "s1", images: ["/placeholder.svg"], views: 234, isFree: false, negotiable: true,
  },
  {
    id: "2", title: "Herman Miller Aeron Chair", description: "Size B fully loaded Herman Miller Aeron chair. PostureFit SL, adjustable arms, tilt limiter. Purchased new in 2023 from authorized dealer. Original receipt available.",
    price: 650, currency: "USD", condition: "good", category: "home", subcategory: "furniture",
    location: "Portland, OR", postedAt: "2025-02-15T14:20:00Z", sellerId: "s2", images: ["/placeholder.svg"], views: 189, isFree: false, negotiable: true,
  },
  {
    id: "3", title: "2019 Toyota Camry SE", description: "Well-maintained 2019 Camry SE with 45,000 miles. Single owner, clean title. Regular oil changes and tire rotations. New brakes installed last month. Excellent fuel economy.",
    price: 18500, currency: "USD", condition: "good", category: "vehicles", subcategory: "cars",
    location: "Austin, TX", postedAt: "2025-02-14T09:00:00Z", sellerId: "s4", images: ["/placeholder.svg"], views: 412, isFree: false, negotiable: true,
  },
  {
    id: "4", title: "Sony WH-1000XM5 Headphones", description: "Industry-leading noise cancelling headphones. Black colorway. Includes carrying case, charging cable, and audio cable. Battery life still holds 30+ hours.",
    price: 220, currency: "USD", condition: "likeNew", category: "electronics", subcategory: "audio",
    location: "Seattle, WA", postedAt: "2025-02-17T16:45:00Z", sellerId: "s3", images: ["/placeholder.svg"], views: 156, isFree: false, negotiable: false,
  },
  {
    id: "5", title: "Vintage Leather Jacket", description: "Genuine leather bomber jacket from the 1980s. Size Medium. Beautiful patina with no tears or damage. Fully lined interior. A true statement piece.",
    price: 175, currency: "USD", condition: "good", category: "clothing", subcategory: "mens",
    location: "Brooklyn, NY", postedAt: "2025-02-13T11:15:00Z", sellerId: "s6", images: ["/placeholder.svg"], views: 98, isFree: false, negotiable: true,
  },
  {
    id: "6", title: "Trek Fuel EX 8 Mountain Bike", description: "2023 Trek Fuel EX 8, size Large. Fox 36 fork, SRAM GX Eagle drivetrain. Just had a full tune-up. Ready to shred trails immediately.",
    price: 2800, currency: "USD", condition: "good", category: "sports", subcategory: "cycling",
    location: "Denver, CO", postedAt: "2025-02-12T08:30:00Z", sellerId: "s7", images: ["/placeholder.svg"], views: 267, isFree: false, negotiable: true,
  },
  {
    id: "7", title: "Fender Stratocaster American Professional II", description: "Mint condition American Professional II Strat in Olympic White. Alder body, maple neck. Comes with Fender hardshell case. Pickups are untouched and sound incredible.",
    price: 1350, currency: "USD", condition: "likeNew", category: "music", subcategory: "guitars",
    location: "Nashville, TN", postedAt: "2025-02-11T13:00:00Z", sellerId: "s9", images: ["/placeholder.svg"], views: 321, isFree: false, negotiable: false,
  },
  {
    id: "8", title: "Calculus Textbook Bundle", description: "Complete set of calculus textbooks: Stewart's Calculus 8th Edition, solutions manual, and study guide. Minimal highlighting, all pages intact. Perfect for college students.",
    price: 45, currency: "USD", condition: "good", category: "books", subcategory: "textbooks",
    location: "Boston, MA", postedAt: "2025-02-10T17:20:00Z", sellerId: "s5", images: ["/placeholder.svg"], views: 87, isFree: false, negotiable: false,
  },
  {
    id: "9", title: "PlayStation 5 Console Bundle", description: "PS5 disc edition with two DualSense controllers, charging dock, and 5 games including Spider-Man 2, God of War, and Horizon. All in perfect working order.",
    price: 420, currency: "USD", condition: "good", category: "toys", subcategory: "video-games",
    location: "Chicago, IL", postedAt: "2025-02-09T12:00:00Z", sellerId: "s10", images: ["/placeholder.svg"], views: 534, isFree: false, negotiable: true,
  },
  {
    id: "10", title: "Dyson V15 Detect Vacuum", description: "Dyson V15 Detect cordless vacuum with laser dust detection. Includes all original attachments and wall mount. Battery replaced under warranty 3 months ago.",
    price: 380, currency: "USD", condition: "good", category: "home", subcategory: "appliances",
    location: "Miami, FL", postedAt: "2025-02-08T15:30:00Z", sellerId: "s1", images: ["/placeholder.svg"], views: 145, isFree: false, negotiable: true,
  },
  {
    id: "11", title: "MacBook Pro 14\" M3 Pro", description: "2024 MacBook Pro 14-inch with M3 Pro chip, 18GB RAM, 512GB SSD. Space Black. AppleCare+ until 2027. Battery cycle count: 42. Includes original charger and box.",
    price: 1650, currency: "USD", condition: "likeNew", category: "electronics", subcategory: "computers",
    location: "San Jose, CA", postedAt: "2025-02-18T09:15:00Z", sellerId: "s2", images: ["/placeholder.svg"], views: 378, isFree: false, negotiable: true,
  },
  {
    id: "12", title: "Free Moving Boxes", description: "About 30 medium and large moving boxes, clean and in good shape. Some bubble wrap and packing paper included. Must pick up by this weekend.",
    price: 0, currency: "USD", condition: "good", category: "home", subcategory: "tools",
    location: "Oakland, CA", postedAt: "2025-02-19T08:00:00Z", sellerId: "s8", images: ["/placeholder.svg"], views: 67, isFree: true, negotiable: false,
  },
  {
    id: "13", title: "Canon EOS R6 Mark II", description: "Professional mirrorless camera body with 24.2MP full-frame sensor. Includes two batteries, charger, and camera bag. Shutter count under 5,000. Excellent for photo and video.",
    price: 1800, currency: "USD", condition: "likeNew", category: "electronics", subcategory: "cameras",
    location: "Los Angeles, CA", postedAt: "2025-02-07T11:00:00Z", sellerId: "s7", images: ["/placeholder.svg"], views: 201, isFree: false, negotiable: true,
  },
  {
    id: "14", title: "Kayak with Paddle", description: "10-foot sit-in recreational kayak with adjustable padded seat and paddle. Great for lakes and calm rivers. A few cosmetic scratches on the hull but fully functional.",
    price: 350, currency: "USD", condition: "good", category: "sports", subcategory: "water",
    location: "Lake Tahoe, NV", postedAt: "2025-02-06T14:45:00Z", sellerId: "s4", images: ["/placeholder.svg"], views: 112, isFree: false, negotiable: true,
  },
  {
    id: "15", title: "Nike Air Jordan 1 Retro High", description: "Brand new in box, never worn. Size 10 US. Chicago colorway. Comes with extra laces. Purchased from Nike directly with receipt available for verification.",
    price: 280, currency: "USD", condition: "new", category: "clothing", subcategory: "shoes",
    location: "Philadelphia, PA", postedAt: "2025-02-05T10:30:00Z", sellerId: "s6", images: ["/placeholder.svg"], views: 445, isFree: false, negotiable: false,
  },
  {
    id: "16", title: "Settlers of Catan Complete Collection", description: "Base game plus all expansions: Seafarers, Cities & Knights, Traders & Barbarians, Explorers & Pirates. All pieces accounted for. Cards in great condition.",
    price: 85, currency: "USD", condition: "good", category: "toys", subcategory: "board-games",
    location: "Minneapolis, MN", postedAt: "2025-02-04T16:00:00Z", sellerId: "s3", images: ["/placeholder.svg"], views: 73, isFree: false, negotiable: true,
  },
  {
    id: "17", title: "Yamaha P-125 Digital Piano", description: "88-key weighted action digital piano with stand, bench, sustain pedal, and headphones. Built-in speakers sound great. Perfect for beginners and intermediate players.",
    price: 450, currency: "USD", condition: "good", category: "music", subcategory: "keyboards",
    location: "Atlanta, GA", postedAt: "2025-02-03T13:20:00Z", sellerId: "s9", images: ["/placeholder.svg"], views: 156, isFree: false, negotiable: true,
  },
  {
    id: "18", title: "North Face Tent - 4 Person", description: "North Face Wawona 4-person tent used twice. Full rainfly, footprint, and all stakes included. Sets up in under 10 minutes. Great for family camping trips.",
    price: 200, currency: "USD", condition: "likeNew", category: "sports", subcategory: "camping",
    location: "Salt Lake City, UT", postedAt: "2025-02-02T09:45:00Z", sellerId: "s5", images: ["/placeholder.svg"], views: 134, isFree: false, negotiable: false,
  },
  {
    id: "19", title: "Samsung 65\" OLED 4K TV", description: "2024 Samsung S95C 65-inch QD-OLED TV. Stunning picture quality with anti-glare screen. Wall mount included. Upgrading to a larger size, which is the only reason for selling.",
    price: 1200, currency: "USD", condition: "likeNew", category: "electronics", subcategory: "gaming",
    location: "Houston, TX", postedAt: "2025-02-01T12:00:00Z", sellerId: "s10", images: ["/placeholder.svg"], views: 289, isFree: false, negotiable: true,
  },
  {
    id: "20", title: "Harley-Davidson Sportster 883", description: "2018 Sportster 883 Iron with 8,200 miles. Vance & Hines exhaust, forward controls, detachable windshield. Garage kept, never dropped. Clean title.",
    price: 7500, currency: "USD", condition: "good", category: "vehicles", subcategory: "motorcycles",
    location: "Phoenix, AZ", postedAt: "2025-01-30T15:30:00Z", sellerId: "s4", images: ["/placeholder.svg"], views: 367, isFree: false, negotiable: true,
  },
  {
    id: "21", title: "Mid-Century Modern Coffee Table", description: "Solid walnut coffee table with tapered legs. 48 inches long, 24 inches wide. Some light scratches on surface but adds to the character. Sturdy construction.",
    price: 225, currency: "USD", condition: "good", category: "home", subcategory: "furniture",
    location: "Portland, OR", postedAt: "2025-01-29T10:00:00Z", sellerId: "s2", images: ["/placeholder.svg"], views: 178, isFree: false, negotiable: true,
  },
  {
    id: "22", title: "Designer Handbag - Coach Tabby", description: "Coach Tabby shoulder bag in black leather. Purchased last year, carried a handful of times. No signs of wear. Dust bag and authenticity card included.",
    price: 295, currency: "USD", condition: "likeNew", category: "clothing", subcategory: "accessories",
    location: "New York, NY", postedAt: "2025-01-28T14:15:00Z", sellerId: "s6", images: ["/placeholder.svg"], views: 203, isFree: false, negotiable: false,
  },
  {
    id: "23", title: "Vinyl Record Collection - Classic Rock", description: "Collection of 25 classic rock vinyl records including Led Zeppelin, Pink Floyd, The Beatles, Rolling Stones. All original pressings in VG+ to NM condition.",
    price: 500, currency: "USD", condition: "good", category: "books", subcategory: "vinyl",
    location: "Detroit, MI", postedAt: "2025-01-27T11:30:00Z", sellerId: "s9", images: ["/placeholder.svg"], views: 256, isFree: false, negotiable: true,
  },
  {
    id: "24", title: "Peloton Bike+", description: "Peloton Bike+ with rotating screen, auto-follow resistance, and Apple GymKit. Includes mat, shoes (size 42), weights, and heart rate monitor. Moving and cannot take it with me.",
    price: 950, currency: "USD", condition: "good", category: "sports", subcategory: "fitness",
    location: "San Diego, CA", postedAt: "2025-01-26T08:45:00Z", sellerId: "s1", images: ["/placeholder.svg"], views: 312, isFree: false, negotiable: true,
  },
  {
    id: "25", title: "LEGO Star Wars Millennium Falcon", description: "Brand new, sealed box. LEGO set #75192 Ultimate Collector Series Millennium Falcon. 7,541 pieces. The holy grail for LEGO and Star Wars collectors.",
    price: 850, currency: "USD", condition: "new", category: "toys", subcategory: "collectibles",
    location: "Dallas, TX", postedAt: "2025-01-25T16:00:00Z", sellerId: "s3", images: ["/placeholder.svg"], views: 489, isFree: false, negotiable: false,
  },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function getListingsBySeller(sellerId: string): Listing[] {
  return listings.filter((l) => l.sellerId === sellerId);
}

export function getListingsByCategory(category: string): Listing[] {
  return listings.filter((l) => l.category === category);
}

export function getSimilarListings(listing: Listing, count = 4): Listing[] {
  return listings
    .filter((l) => l.id !== listing.id && l.category === listing.category)
    .slice(0, count);
}
