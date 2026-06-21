import LargeLogo from "@/app/assets/large_logo.svg";
import bg_item_1 from "@/app/assets/background_items/whatwelove/1.svg";
import bg_item_3 from "@/app/assets/background_items/whatwelove/3.svg";
import bg_item_4 from "@/app/assets/background_items/whatwelove/4.svg";
import bg_item_5 from "@/app/assets/background_items/whatwelove/5.svg";
import bg_item_6 from "@/app/assets/background_items/whatwelove/6.svg";
import bg_item_7 from "@/app/assets/background_items/whatwelove/7.svg";
import AnimatedText from "./TitleAnimatedText";
import AnimateIn from "./AnimateIn";
import BgImage from "./BgImage";

const WhatWeLove = () => {
  return (
    <div className="relative min-h-screen p-5 py-17.5 text-white">
      <BgImage
        src={bg_item_1}
        direction="right"
        duration={2}
        width={150}
        height={100}
        className="absolute -z-10 brightness-[.2] -top-[53px] sm:-top-[66px] md:-top-[82px] lg:-top-[102px] xl:-top-32 left-0 w-[62px] sm:w-[77px] md:w-[96px] lg:w-[120px] xl:w-[150px] h-[41px] sm:h-[51px] md:h-[64px] lg:h-[80px] xl:h-[100px]"
      />
      <BgImage
        src={bg_item_7}
        direction="left"
        duration={2}
        width={240}
        height={335}
        className="absolute -z-10 brightness-[.2] -bottom-[85px] sm:-bottom-[106px] md:-bottom-[133px] lg:-bottom-[166px] xl:-bottom-52 right-0 w-[98px] sm:w-[123px] md:w-[154px] lg:w-[192px] xl:w-[240px] h-[137px] sm:h-[171px] md:h-[214px] lg:h-[268px] xl:h-[335px]"
      />
      <div className="relative w-full flex flex-col xl:flex-row items-stretch justify-start">
        <div className="relative z-10 w-full xl:w-1/2">
          <div className="absolute top-115 right-0 -z-10 h-px w-84 bg-white/50 -rotate-20" />
          <AnimatedText variant="reveal" className="uppercase text-4xl sm:text-5xl xl:text-6xl">
            WHAT
          </AnimatedText>
          <div className="flex ml-[22.5%] xl:justify-center items-center gap-4 sm:gap-8 lg:gap-12.5 xl:pl-52">
            <AnimatedText
              delay={0.5}
              variant="reveal"
              className="uppercase text-4xl sm:text-5xl xl:text-6xl"
            >
              WE
            </AnimatedText>
            <AnimatedText
              delay={1}
              variant={"reveal"}
              animateBorder
              className="w-44 sm:w-56 md:w-72 xl:w-84 py-3.5 text-center text-4xl sm:text-5xl xl:text-6xl"
            >
              LOVE
            </AnimatedText>
          </div>
          <div className="xl:max-w-175 flex flex-col justify-start items-start mt-10 gap-4 lg:gap-7">
            <AnimateIn className="text-lg sm:text-xl xl:text-2xl text-balance">
              Y Media is a publishing atelier founded by Yasser Rizky, graphic
              designer, creative director, and founder of Yasser Rizky Inc.,
              from a simple conviction: meaningful ideas deserve thoughtful
              publication.
            </AnimateIn>
            <AnimateIn className="text-sm md:text-base xl:text-lg indent-28">
              In a time where everything can be seen, but not everything becomes
              real, Y Media exists for stories, images, and ideas that deserve
              more than temporary visibility.
            </AnimateIn>
            <div className="flex flex-col items-start gap-1">
              <AnimateIn className="font-medium text-lg sm:text-xl xl:text-2xl indent-7">
                Images circulate.
              </AnimateIn>
              <AnimateIn className="ml-12 sm:ml-16 xl:ml-24 text-lg sm:text-xl xl:text-2xl underline decoration-3 underline-offset-4">
                Stories pass.
              </AnimateIn>
              <AnimateIn className="ml-16 sm:ml-24 xl:ml-36 text-lg sm:text-xl xl:text-2xl">
                <span className="underline decoration-1 decoration-[#BFBFBF] underline-offset-4">
                  Culture appears,
                </span>{" "}
                performs, and disappears into the speed of the screen.
              </AnimateIn>
            </div>
            <AnimateIn className="text-lg sm:text-xl xl:text-2xl">
              Y Media moves visual culture beyond this condition — into physical
              presence.
            </AnimateIn>
            <AnimateIn className="text-sm md:text-base xl:text-lg indent-24">
              The company publishes books on design, typography, art, branding,
              visual culture, biographies, catalogues, and other subjects where
              ideas, images, and narratives intersect. Its focus is not simply
              on producing books, but on creating publications that give lasting
              form to knowledge, practice, memory, and cultural discourse.
            </AnimateIn>
          </div>
        </div>
        <div className="relative w-full xl:w-1/2 flex justify-center items-start my-10 md:my-20 xl:mb-0 xl:mt-52 flex-1">
          <BgImage
            src={LargeLogo}
            direction="up"
            duration={2}
            width={297}
            height={308}
            className="w-[198px] sm:w-[297px] h-[206px] sm:h-[308px]"
          />
          <BgImage
            src={bg_item_3}
            direction="down"
            duration={2}
            width={185}
            height={215}
            className="absolute -z-10 brightness-[.2] -left-[40px] sm:-left-[50px] md:-left-[62px] lg:-left-[77px] xl:-left-24 bottom-0 w-[75px] sm:w-[94px] md:w-[118px] lg:w-[148px] xl:w-[185px] h-[88px] sm:h-[110px] md:h-[138px] lg:h-[172px] xl:h-[215px]"
          />
          <BgImage
            src={bg_item_4}
            direction="up"
            duration={2}
            width={360}
            height={280}
            className="absolute -z-10 brightness-[.2] right-0 -bottom-[53px] sm:-bottom-[66px] md:-bottom-[82px] lg:-bottom-[102px] xl:-bottom-32 w-[147px] sm:w-[184px] md:w-[230px] lg:w-[288px] xl:w-[360px] h-[114px] sm:h-[143px] md:h-[179px] lg:h-[224px] xl:h-[280px]"
          />
        </div>
      </div>
      <div className="relative w-full grid sm:grid-cols-2 xl:grid-cols-4 items-stretch justify-start gap-6 lg:gap-10 xl:gap-5 xl:mt-10">
        <BgImage
          src={bg_item_5}
          direction="up"
          duration={2}
          width={92}
          height={92}
          className="absolute -z-10 brightness-[.2] top-[23px] sm:top-[29px] md:top-[36px] lg:top-[45px] xl:top-14 right-1/2 -translate-x-1/2 w-[38px] sm:w-[47px] md:w-[59px] lg:w-[74px] xl:w-[92px] h-[38px] sm:h-[47px] md:h-[59px] lg:h-[74px] xl:h-[92px]"
        />
        <BgImage
          src={bg_item_6}
          direction="up"
          duration={2}
          width={585}
          height={817}
          className="absolute -z-10 brightness-[.2] top-[62px] sm:top-[77px] md:top-[96px] lg:top-[120px] xl:top-37.5 left-[62px] sm:left-[77px] md:left-[96px] lg:left-[120px] xl:left-37.5 w-[239px] sm:w-[299px] md:w-[374px] lg:w-[468px] xl:w-[585px] h-[335px] sm:h-[419px] md:h-[523px] lg:h-[654px] xl:h-[817px]"
        />
        <div className="col-span-1 space-y-4 lg:space-y-7">
          <AnimateIn className="text-lg sm:text-xl xl:text-2xl">
            At Y Media, a book is understood as more than a vessel for content.
          </AnimateIn>
          <AnimateIn className="text-sm md:text-base xl:text-lg indent-8">
            Its paper stock, typography, binding, format, folding, finishing,
            and method of production are not treated as technical afterthoughts,
            but as decisions that shape how a work is experienced, understood,
            and remembered.
          </AnimateIn>
        </div>
        <AnimateIn className="col-span-1 text-lg sm:text-xl xl:text-2xl text-balance">
          A publication is where an idea becomes matter. Where a story becomes
          structure. Where images find rhythm, weight, texture, and permanence.
        </AnimateIn>
        <div className="sm:col-span-2">
          <AnimateIn className="text-sm md:text-base xl:text-lg indent-32">
            This approach stems from the belief that books about culture, art,
            design, branding, and human experience should embody the same level
            of care, intention, and craft as the subjects they document.
          </AnimateIn>
          <AnimateIn className="text-2xl sm:text-3xl xl:text-4xl mt-4 lg:mt-7">
            Form and content are developed together, each informing the other
            throughout the publishing process.
          </AnimateIn>
          <AnimateIn className="text-sm md:text-base xl:text-lg mt-6 lg:mt-12 indent-32">
            Every publication is approached as both an editorial project and a
            designed object — made to be read, studied, collected, and revisited
            over time.
          </AnimateIn>
          <AnimateIn className="text-sm md:text-base xl:text-lg mt-5 lg:mt-8 indent-32">
            Through publishing, editorial direction, design, paper exploration,
            folding, binding, printing, and craft, Y Media gives ideas a body,
            stories a form, and culture a place in the world.
          </AnimateIn>
          <div className="mt-6 lg:mt-12">
            <AnimateIn className="text-lg sm:text-xl xl:text-2xl underline decoration-3 underline-offset-5">
              Not just seen.
            </AnimateIn>
            <AnimateIn className="text-lg sm:text-xl xl:text-2xl underline decoration-3 underline-offset-5">
              Made present
            </AnimateIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeLove;
