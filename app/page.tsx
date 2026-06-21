import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThePrincipal from "@/components/ThePrincipal";
import WhatWeLove from "@/components/WhatWeLove";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <section id="our-books" className="scroll-mt-24"><Book /></section>
      <WhatWeLove />
      <section id="book-principal" className="scroll-mt-24"><ThePrincipal /></section>
      <section id="who-we-are" className="scroll-mt-24"><WhoWeAre /></section>
      <Footer />
    </div>
  );
}
