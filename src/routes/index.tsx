import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Founder } from "@/components/sections/Founder";
import { Categories } from "@/components/sections/Categories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CustomFurniture } from "@/components/sections/CustomFurniture";

import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eniola Furnitures — 30 Years of Craftsmanship" },
      {
        name: "description",
        content:
          "Premium bespoke furniture in Ajanla — sofas, wardrobes, doors, dining sets, kitchen cabinets, TV consoles. Custom built for over 30 years.",
      },
      { property: "og:title", content: "Eniola Furnitures — Where Experience Meets Excellence" },
      {
        property: "og:description",
        content:
          "Bespoke furniture for homes, offices, hotels and commercial spaces. Crafted in Ajanla for over 30 years.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Founder />
        <Categories />
        <WhyChooseUs />
        <CustomFurniture />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

