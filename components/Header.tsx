import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import LogoName from "@/app/assets/logo_name.svg";

const Header = () => {
  return (
    <header className="backdrop-blur-xs bg-black/10 z-50 fixed top-0 left-0 right-0 flex items-center justify-between p-5">
      <div className="flex justify-center items-center gap-4">
        <Image src={Logo} alt="Logo" width={43} height={61} />
        <Image src={LogoName} alt="Logo Name" width={92} height={16} />
      </div>
      <nav className="flex items-center gap-15 font-raleway">
        <a
          href="#"
          className="text-white text-sm tracking-wide hover:opacity-70 transition-opacity"
        >
          OUR BOOKS
        </a>
        <a
          href="#"
          className="text-white text-sm tracking-wide hover:opacity-70 transition-opacity"
        >
          BOOK PRINCIPAL
        </a>
        <a
          href="#"
          className="text-white text-sm tracking-wide hover:opacity-70 transition-opacity"
        >
          WHO WE ARE
        </a>
        <a
          href="#"
          className="text-white text-sm tracking-wide hover:opacity-70 transition-opacity"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
