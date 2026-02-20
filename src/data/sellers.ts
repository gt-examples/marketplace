export interface Seller {
  id: string;
  name: string;
  avatar: string;
  memberSince: string;
  rating: number;
  responseTime: string;
  listingCount: number;
}

export const sellers: Seller[] = [
  { id: "s1", name: "Alex Morgan", avatar: "AM", memberSince: "2022-03-15", rating: 4.8, responseTime: "withinHour", listingCount: 23 },
  { id: "s2", name: "Jordan Lee", avatar: "JL", memberSince: "2021-09-08", rating: 4.9, responseTime: "withinHour", listingCount: 45 },
  { id: "s3", name: "Sam Patel", avatar: "SP", memberSince: "2023-01-20", rating: 4.5, responseTime: "withinDay", listingCount: 12 },
  { id: "s4", name: "Taylor Kim", avatar: "TK", memberSince: "2020-11-02", rating: 4.7, responseTime: "withinHour", listingCount: 67 },
  { id: "s5", name: "Casey Rivera", avatar: "CR", memberSince: "2023-06-14", rating: 4.3, responseTime: "withinDay", listingCount: 8 },
  { id: "s6", name: "Quinn Davis", avatar: "QD", memberSince: "2022-08-30", rating: 4.6, responseTime: "withinHour", listingCount: 31 },
  { id: "s7", name: "Morgan Chen", avatar: "MC", memberSince: "2021-04-11", rating: 4.9, responseTime: "withinHour", listingCount: 52 },
  { id: "s8", name: "Riley Brooks", avatar: "RB", memberSince: "2023-10-05", rating: 4.4, responseTime: "withinDay", listingCount: 5 },
  { id: "s9", name: "Jamie Wilson", avatar: "JW", memberSince: "2022-12-19", rating: 4.7, responseTime: "withinHour", listingCount: 19 },
  { id: "s10", name: "Drew Anderson", avatar: "DA", memberSince: "2021-07-25", rating: 4.8, responseTime: "withinHour", listingCount: 38 },
];

export function getSellerById(id: string): Seller | undefined {
  return sellers.find((s) => s.id === id);
}
