import { Hero, PopularProducts } from "@/components/Sections";
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
        Super quality
      </section>

      <section className="padding-x py-10">
        Services
      </section>

      <section className="padding">
        Special offers
      </section>

      <section className="bg-pale-blue">
        Customer Reviews
      </section>

      <section className="padding-x py-16 sm:py-32 w-full">
        Subscribe
      </section>

      {/* Footer */}
      <footer className="bg-black padding-x padding-t pb-8">

      </footer>
    </main>
  );
}
