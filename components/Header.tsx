"use client";

import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import LogoName from "@/app/assets/logo_name.svg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links: { label: string; href: string; external?: boolean; extraClass?: string }[] = [
  { label: "OUR BOOKS", href: "#our-books" },
  { label: "BOOK PRINCIPAL", href: "#book-principal" },
  { label: "WHO WE ARE", href: "#who-we-are" },
  { label: "CONTACT", href: "mailto:info@yasserrizky.com", external: true, extraClass: "font-['YRFLAUNT']" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = open
    ? "backdrop-blur-md bg-black/70"
    : atTop
      ? "bg-black/0"
      : "backdrop-blur-xs bg-black/10";

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    external?: boolean,
  ) => {
    if (external) return;
    e.preventDefault();

    setOpen(false);
    const id = href.slice(1);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 350);
  };

  return (
    <header
      className={`${bgClass} transition-[backdrop-filter,background-color] duration-300 z-50 fixed top-0 left-0 right-0`}
    >
      <div className="flex items-center justify-between p-5">
        <div className="flex justify-center items-center gap-4">
          <Image
            src={Logo}
            alt="Logo"
            width={43}
            height={61}
            className="w-[34px] h-[49px] lg:w-[43px] lg:h-[61px]"
          />
          <Image
            src={LogoName}
            alt="Logo Name"
            width={92}
            height={16}
            className="w-[74px] h-[13px] lg:w-[92px] lg:h-[16px]"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-15 ">
          {links.map(({ label, href, external, extraClass }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNav(e, href, external)}
              className={`text-white text-sm tracking-wide hover:opacity-70 transition-opacity ${extraClass ?? ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px bg-white transition-transform duration-300 origin-center"
            style={{
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-px bg-white transition-opacity duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px bg-white transition-transform duration-300 origin-center"
            style={{
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden flex flex-col gap-6 px-5 pb-6 "
          >
            {links.map(({ label, href, external, extraClass }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={(e) => handleNav(e, href, external)}
                className={`text-white text-sm tracking-wide hover:opacity-70 transition-opacity ${extraClass ?? ""}`}
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
