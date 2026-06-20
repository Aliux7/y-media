import bg_item_1 from "@/app/assets/background_items/hero/1.svg";
import bg_item_2 from "@/app/assets/background_items/hero/2.svg";
import bg_item_3 from "@/app/assets/background_items/hero/3.svg";
import AnimatedText from "./TitleAnimatedText";
import BgImage from "./BgImage";
import AnimateIn from "./AnimateIn";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-start p-5 pt-30 pb-12 gap-8">
      <BgImage
        src={bg_item_1}
        width={364}
        height={481}
        duration={2}
        className="absolute top-20 right-30 -z-10 brightness-[.2]"
      />
      <BgImage
        src={bg_item_3}
        duration={2}
        width={315}
        height={187}
        className="absolute bottom-15 left-100 -z-10 brightness-[.2]"
      />
      <BgImage
        src={bg_item_2}
        duration={2}
        direction="left"
        width={396}
        height={364}
        className="absolute left-69 bottom-30 -z-10 brightness-[.2]"
      />
      <AnimatedText
        as="h1"
        mode="mirror"
        duration={2}
        variant="reveal"
        className="text-[140px] text-white uppercase leading-none"
      >
        Beyond
      </AnimatedText>
      <AnimatedText
        as="h1"
        delay={0.5}
        mode="mirror"
        duration={2}
        variant="reveal"
        className="text-[140px] text-white uppercase ml-81 font-medium leading-none"
      >
        Visibility
      </AnimatedText>
      <div className="w-full h-fit flex justify-between items-center pl-10">
        <AnimatedText
          as="h1"
          delay={1}
          mode="mirror"
          duration={2}
          variant="reveal"
          className="text-[140px] text-white uppercase leading-none"
        >
          Into
        </AnimatedText>
        <AnimatedText
          as="h1"
          delay={1.5}
          mode="mirror"
          duration={2}
          variant="reveal"
          className="text-[140px] text-white uppercase font-black leading-none"
        >
          Presence
        </AnimatedText>
      </div>
      <AnimateIn duration={2} delay={2} className="w-[700] ml-auto gap-4 mt-5">
        <p className="text-white text-xl uppercase mb-4 pr-20 ">
          Y Media is a publishing atelier that transforms visual culture into
          printed works — where ideas become physical, stories become objects,
          and culture enters the world with presence.
        </p>
        <p className="text-white text-lg pr-10">
          We create bespoke publications for art, design, culture, brands,
          archives, and personal narratives through editorial thinking, refined
          design, paper exploration, folding, binding, printing, and production
          craft.
        </p>
      </AnimateIn>
    </section>
  );
};

export default Hero;
