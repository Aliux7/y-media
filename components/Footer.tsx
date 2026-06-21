import Logo from "@/app/assets/vertical_logo.svg";
import BgImage from "./BgImage";
import AnimateIn from "./AnimateIn";

const Footer = () => {
  return (
    <div className="relative p-5 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between lg:justify-start gap-8 md:gap-12 lg:gap-[15%] items-start md:items-stretch pb-21.5">
      <BgImage
        src={Logo}
        duration={2}
        direction="up"
        width={117}
        height={205}
        className="w-11.75 sm:w-14.75 md:w-18.5 lg:w-23.25 xl:w-29 h-21 sm:h-26.25 md:h-32.75 lg:h-40.75 xl:h-51"
      />

      <AnimateIn
        duration={2}
        className="w-1/2 lg:w-auto flex flex-col justify-between gap-3 md:gap-0"
      >
        <a
          href="#"
          className="text-sm md:text-base xl:text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          OUR BOOKS
        </a>
        <a
          href="#"
          className="text-sm md:text-base xl:text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          BOOK PRINCIPAL
        </a>
        <a
          href="#"
          className="text-sm md:text-base xl:text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          WHO WE ARE
        </a>
        <a
          href="#"
          className="text-sm md:text-base xl:text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          CONTACT
        </a>
      </AnimateIn>

      <div className="w-full lg:w-auto flex flex-col justify-between gap-3 xl:gap-0">
        <AnimateIn duration={2} className="text-xs sm:text-sm md:text-base">
          Publishing books on design, typography, art,
          <br /> branding, and visual culture.
        </AnimateIn>
        <AnimateIn duration={2} className="text-xs sm:text-sm md:text-base">
          Thoughtfully edited. Carefully designed. Made to last.
        </AnimateIn>

        <div />

        <div className="flex justify-between items-end gap-8 sm:gap-12 xl:gap-20">
          <AnimateIn duration={2} className="text-sm md:text-base xl:text-lg">
            info@yasserrizky.com
          </AnimateIn>
          <div className="text-left text-sm md:text-base xl:text-lg">
            <AnimateIn duration={2}>© 2026 Y MEDIA</AnimateIn>
            <AnimateIn duration={2}>JAKARTA, INDONESIA</AnimateIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
