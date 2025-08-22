import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";
import Carousel from "@/components/Carousel";

const CARDS_QUERY = `*[_type == "card"]|order(publishedAt asc)[0...12]{
  _id, name, image, tagline, quote, signature, background
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const cards = await client.fetch<SanityDocument[]>(CARDS_QUERY, {}, options);

  // Convert image refs into URLs before sending to client
  const safeCards = cards.map((card) => ({
    ...card,
    image: urlFor(card.image)?.url(),
    signature: urlFor(card.signature)?.url(),
    background: urlFor(card.background)?.url(),
  }));

  return (
    <main className="container mx-auto min-h-screen p-8 flex items-center justify-center relative overflow-hidden">
      {/* Background skew */}
      <div className="min-w-[900px] h-[542px] bg-dg-red absolute z-0 -skew-x-12"></div>
      <Carousel cards={safeCards} />
    </main>
  );
}
