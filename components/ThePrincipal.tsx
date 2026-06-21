import pp from "@/app/assets/the_principal/pp.jpg";
import bg_item_1 from "@/app/assets/background_items/theprincipal/1.svg";
import bg_item_2 from "@/app/assets/background_items/theprincipal/2.svg";
import BgImage from "./BgImage";
import AnimateIn from "./AnimateIn";
import AnimatedText from "./TitleAnimatedText";

const ThePrincipal = () => {
  return (
    <div className="relative flex justify-between items-start gap-20 xl:gap-0 p-5 pb-43">
      <BgImage
        src={bg_item_1}
        duration={2}
        direction={"right"}
        width={165}
        height={165}
        className="absolute -z-10 brightness-[.2] object-cover w-[67px] sm:w-[84px] md:w-[105px] lg:w-[131px] xl:w-41 h-[67px] sm:h-[84px] md:h-[105px] lg:h-[131px] xl:h-41 left-[44px] sm:left-[55px] md:left-[69px] lg:left-[86px] xl:left-27 bottom-[37px] sm:bottom-[46px] md:bottom-[58px] lg:bottom-[72px] xl:bottom-22.5"
      />
      <BgImage
        src={bg_item_2}
        duration={2}
        direction={"up"}
        width={264}
        height={896}
        className="absolute -z-10 brightness-[.2] object-cover w-[108px] sm:w-[135px] md:w-[169px] lg:w-[211px] xl:w-66 h-[367px] sm:h-[459px] md:h-[574px] lg:h-[717px] xl:h-224 left-[190px] sm:left-[238px] md:left-[297px] lg:left-[371px] xl:left-116 -bottom-[33px] sm:-bottom-[41px] md:-bottom-[51px] lg:-bottom-[64px] xl:-bottom-20"
      />
      <div className="w-full hidden xl:w-1/2 pt-25 lg:flex flex-col gap-8 xl:gap-16 max-w-80 xl:max-w-113">
        <BgImage
          src={pp}
          duration={2}
          direction={"right"}
          width={453}
          height={491}
          className="w-[186px] sm:w-[232px] md:w-[290px] lg:w-[362px] xl:w-113.25 h-[201px] sm:h-[251px] md:h-[314px] lg:h-[353px] xl:h-122.75 object-cover object-[50%_10%]"
        />
        <div className="flex flex-col justify-start items-start gap-5 xl:gap-10">
          <AnimateIn
            direction="right"
            duration={2}
            className="uppercase font-raleway font-semibold text-sm md:text-base xl:text-lg"
          >
            “In a world obsessed with visibility, I am interested in what
            remains — ideas that become physical, stories that gain structure,
            and culture that finds a body.
          </AnimateIn>
          <AnimateIn
            direction="right"
            duration={2}
            className="uppercase font-raleway font-semibold text-sm md:text-base xl:text-lg"
          >
            — Yasser Rizky
          </AnimateIn>
        </div>
      </div>
      <div className="w-full lg:w-2/3 xl:w-1/2 flex flex-col justify-start items-start gap-3">
        <div className="flex justify-center gap-2 xl:gap-0 items-center h-fit">
          <AnimatedText className="text-3xl sm:text-4xl md:text-5xl xl:text-[58px]">
            THE
          </AnimatedText>
          <AnimatedText
            animateBorder
            variant={"reveal"}
            delay={0.5}
            className="xl:-ml-2 w-44 sm:w-60 md:w-72 xl:w-90 text-3xl sm:text-4xl md:text-5xl xl:text-[58px] text-center py-2 sm:py-3 xl:py-4"
          >
            PRINCIPAL
          </AnimatedText>
        </div>
        <div className="w-full flex justify-center items-center xl:w-1/2 pt-8 lg:pt-25 mb-8 lg:mb-0 lg:hidden flex-col gap-8 xl:gap-16 lg:max-w-80 xl:max-w-113">
          <BgImage
            src={pp}
            duration={2}
            direction={"right"}
            width={453}
            height={491}
            className="w-full sm:w-[384px] lg:w-[362px] xl:w-113.25 h-[380px] sm:h-[400px] lg:h-[353px] xl:h-122.75 object-cover object-[50%_10%]"
          />
          <div className="max-w-sm lg:max-w-none flex flex-col justify-start items-start gap-5 xl:gap-10">
            <AnimateIn
              direction="right"
              duration={2}
              className="uppercase font-raleway font-semibold text-sm md:text-base xl:text-lg"
            >
              “In a world obsessed with visibility, I am interested in what
              remains — ideas that become physical, stories that gain structure,
              and culture that finds a body.
            </AnimateIn>
            <AnimateIn
              direction="right"
              duration={2}
              className="uppercase font-raleway font-semibold text-sm md:text-base xl:text-lg"
            >
              — Yasser Rizky
            </AnimateIn>
          </div>
        </div>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36">
          Yasser Rizky is a graphic designer, creative director, and founder of
          Yasser Rizky Inc., a Jakarta-based design and branding practice
          working across identity, visual culture, typography, publication
          design, and strategic communication.
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36 mt-4">
          His work is rooted in the belief that design is not only a matter of
          appearance, but a way of shaping how ideas are understood, remembered,
          and experienced. Across his practice, Yasser has worked with brands,
          institutions, cultural figures, artists, and private clients to
          develop visual systems, narratives, publications, and communication
          objects with clarity, character, and cultural sensitivity.
        </AnimateIn>
        <AnimateIn className="text-lg sm:text-xl xl:text-2xl w-full mt-2 xl:mt-4">
          Y Media was founded as an extension
          <br />
          <span className="ml-[45%] lg:ml-[55%]">of this practice.</span>
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36 mt-2 xl:mt-4">
          After years of working with identity, storytelling, paper, typography,
          books, catalogues, and cultural materials, Yasser saw the need for a
          publishing platform that treats books not merely as products, but as
          designed objects of thought. A platform where editorial direction,
          visual intelligence, material experimentation, and production craft
          can come together in one complete publishing process.
        </AnimateIn>
        <AnimateIn className="text-lg sm:text-xl xl:text-2xl flex flex-col w-full mt-2 xl:mt-4">
          For Yasser, publishing is a way to give form
          <br />
          <span className="ml-auto underline decoration-1 mr-5">
            to what should not disappear.
          </span>
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36 mt-2 xl:mt-4">
          It is where ideas become physical, stories become structured, and
          visual culture gains a presence beyond the temporary speed of the
          screen.
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36 mt-2 xl:mt-4">
          Through Y Media, he brings together his background in graphic design,
          branding, art direction, typography, and cultural storytelling to
          create publications that are made to be read, studied, collected, and
          revisited over time.
        </AnimateIn>
      </div>
    </div>
  );
};

export default ThePrincipal;
