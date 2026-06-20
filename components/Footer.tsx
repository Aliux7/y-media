import Image from "next/image";
import Logo from "@/app/assets/vertical_logo.svg";

const Footer = () => {
  return (
    <div className="relative p-5 flex justify-start gap-[20%] items-stretch pb-21.5">
      <Image src={Logo} alt="" width={117} height={205} className="w-29 h-51" />

      <div className="flex flex-col justify-between">
        <a
          href="#"
          className="text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          OUR BOOKS
        </a>
        <a
          href="#"
          className="text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          BOOK PRINCIPAL
        </a>
        <a
          href="#"
          className="text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          WHO WE ARE
        </a>
        <a
          href="#"
          className="text-lg tracking-wide uppercase hover:opacity-70 transition-opacity"
        >
          CONTACT
        </a>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-base">
          Publishing books on design, typography, art,
          <br /> branding, and visual culture.
        </p>
        <p className="text-base">
          Thoughtfully edited. Carefully designed. Made to last.
        </p>

        <div />

        <div className="flex justify-between items-end gap-20">
          <p className="text-lg">info@yasserrizky.com</p>
          <div className="text-left text-lg">
            <p>© 2026 Y MEDIA</p>
            <p>JAKARTA, INDONESIA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
