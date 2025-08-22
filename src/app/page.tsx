import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";
import CardItem from "@/components/CardItem";
import Image from "next/image";

const CARDS_QUERY = `*[
  _type == "card"
]|order(publishedAt asc)[0...12]{ _id, name, image, tagline, quote, signature, background }`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const cards = await client.fetch<SanityDocument[]>(CARDS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex items-center justify-center relative">
      <div className="min-w-[1000px] h-[542px] bg-dg-red absolute z-0 -skew-x-12"></div>
      <div className="min-w-[1133px] flex justify-between absolute z-20">
        <button className="cursor-pointer hover:opacity-5 transition-all ease-in-out">
          <Image src="/Larrow.svg" alt="Sports" width={24} height={42} />
        </button>
        <button className="cursor-pointer hover:opacity-5 transition-all ease-in-out">
          <Image src="/Rarrow.svg" alt="Sports" width={24} height={42} />
        </button>
      </div>
      {/* <CardItem
        key={cards[2]?._id}
        name={cards[2]?.name}
        tagline={cards[2]?.tagline}
        quote={cards[2]?.quote}
        image={urlFor(cards[2].image)?.url()}
        signature={urlFor(cards[2].signature)?.url()}
        background={urlFor(cards[2].background)?.url()}
      /> */}
      {cards.map((card) => (
        <CardItem
          key={card?._id}
          name={card?.name}
          tagline={card?.tagline}
          quote={card?.quote}
          image={urlFor(card.image)?.url()}
          signature={urlFor(card.signature)?.url()}
          background={urlFor(card.background)?.url()}
        />
      ))}
    </main>
  );
}
