import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThePrincipal from "@/components/ThePrincipal";
import WhatWeLove from "@/components/WhatWeLove";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Book />
      <WhatWeLove />
      <ThePrincipal />
      <WhoWeAre />
      <Footer />
    </>
  );
}
