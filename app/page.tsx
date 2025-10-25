import { CustomerReview, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "@/components/Sections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <section className="lg:pl-18 wide:pr-8">
        <Hero />
      </section>
      
      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        <Services />
      </section>

      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="bg-pale-blue">
        <CustomerReview />
      </section>

      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe />
      </section>
    </main>
  );
}
