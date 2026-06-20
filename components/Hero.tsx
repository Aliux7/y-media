import bg_item_1 from "@/app/assets/background_items/hero/1.svg";
import bg_item_2 from "@/app/assets/background_items/hero/2.svg";
import bg_item_3 from "@/app/assets/background_items/hero/3.svg";
import AnimatedText from "./TitleAnimatedText";
import BgImage from "./BgImage";
import AnimateIn from "./AnimateIn";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-start p-5 pt-24 lg:pt-30 pb-12 gap-2 sm:gap-4 md:gap-6 xl:gap-8">
      <BgImage
        src={bg_item_1}
        width={364}
        height={481}
        duration={2}
        className="absolute -z-10 brightness-[.2] top-1/3 sm:top-[100px] right-[50px] sm:right-[62px] md:right-[77px] lg:right-[96px] xl:right-30 w-[134px] sm:w-[168px] md:w-[210px] lg:w-[262px] xl:w-[328px] 2xl:w-[364px] h-[178px] sm:h-[222px] md:h-[277px] lg:h-[346px] xl:h-[433px] 2xl:h-[481px]"
      />
      <BgImage
        src={bg_item_3}
        duration={2}
        width={315}
        height={187}
        className="absolute -z-10 brightness-[.2] bottom-[24px] sm:bottom-[30px] md:bottom-[38px] lg:bottom-[48px] xl:bottom-15 left-[164px] lg:left-[320px] xl:left-100 w-[117px] sm:w-[146px] md:w-[182px] lg:w-[227px] xl:w-[284px] 2xl:w-[315px] h-[69px] sm:h-[86px] md:h-[107px] lg:h-[134px] xl:h-[168px] 2xl:h-[187px]"
      />
      <div className="absolute -z-10 opacity-50 left-[114px] lg:left-[221px] xl:left-69 bottom-[50px] sm:bottom-[62px] md:bottom-[77px] lg:bottom-[96px] xl:bottom-30 w-[146px] sm:w-[182px] md:w-[228px] lg:w-[285px] xl:w-[356px] 2xl:w-[396px] h-[134px] sm:h-[168px] md:h-[210px] lg:h-[262px] xl:h-[328px] 2xl:h-[364px]">
        <BgImage
          src={bg_item_2}
          duration={2}
          direction="left"
          width={396}
          height={364}
          className="inset-0 brightness-[.2]"
        />
      </div>
      <AnimatedText
        as="h1"
        mode="mirror"
        duration={2}
        variant="reveal"
        className="text-6xl text-[66px] md:text-7xl md:text-[80px] lg:text-8xl lg:text-[110px] xl:text-[140px] text-white uppercase leading-none"
      >
        Beyond
      </AnimatedText>
      <div className="ml-auto sm:ml-40 lg:ml-60 xl:ml-81">
        <AnimatedText
          as="h1"
          delay={0.5}
          mode="mirror"
          duration={2}
          variant="reveal"
          className="text-6xl text-[66px] md:text-7xl md:text-[80px] lg:text-8xl lg:text-[110px] xl:text-[140px] text-white uppercase font-medium leading-none"
        >
          Visibility
        </AnimatedText>
      </div>
      <div className="w-full h-fit flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 md:pl-5 xl:pl-10">
        <AnimatedText
          as="h1"
          delay={1}
          mode="mirror"
          duration={2}
          variant="reveal"
          className="text-6xl text-[66px] md:text-7xl md:text-[80px] lg:text-8xl lg:text-[110px] xl:text-[140px] text-white uppercase leading-none"
        >
          Into
        </AnimatedText>
        <div className="ml-auto sm:ml-0">
          <AnimatedText
            as="h1"
            delay={1.5}
            mode="mirror"
            duration={2}
            variant="reveal"
            className="text-6xl text-[66px] md:text-7xl md:text-[80px] lg:text-8xl lg:text-[110px] xl:text-[140px] text-white uppercase font-black leading-none"
          >
            Presence
          </AnimatedText>
        </div>
      </div>
      <AnimateIn
        duration={2}
        delay={2.5}
        className="lg:w-[700] sm:ml-44 lg:ml-auto gap-4 mt-2 md:mt-5"
      >
        <p className="text-white md:text-lg xl:text-xl uppercase mb-4 xl:pr-10 2xl:pr-20 ">
          Y Media is a publishing atelier that transforms visual culture into
          printed works — where ideas become physical, stories become objects,
          and culture enters the world with presence.
        </p>
        <p className="text-white text-sm md:text-base xl:text-lg pr-10">
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
