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
    id: card._id,
    name: card.name,
    tagline: card.tagline,
    quote: card.quote,
    image: urlFor(card.image)?.url(),
    signature: urlFor(card.signature)?.url(),
    background: urlFor(card.background)?.url(),
  }));

  return (
    <main className="min-h-screen p-8 flex items-center justify-center relative overflow-hidden">
      {/* Background skew */}
      <div className="dg:min-w-[900px] min-w-[2000px] h-[542px] bg-dg-red absolute z-0 -skew-x-12 dg:top-auto top-[412px]"></div>
      <Carousel cards={safeCards} />
    </main>
  );
}
