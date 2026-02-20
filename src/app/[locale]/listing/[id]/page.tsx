import { notFound } from "next/navigation";
import { getListingById } from "@/data/listings";
import { getSellerById } from "@/data/sellers";
import ListingDetail from "@/components/ListingDetail";

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) notFound();
  const seller = getSellerById(listing.sellerId);
  if (!seller) notFound();
  return <ListingDetail listing={listing} seller={seller} />;
}
