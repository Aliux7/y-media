import bg_item_1 from "@/app/assets/background_items/whoweare/1.svg";
import bg_item_2 from "@/app/assets/background_items/whoweare/2.svg";
import bg_item_3 from "@/app/assets/background_items/whoweare/3.svg";
import bg_item_4 from "@/app/assets/background_items/whoweare/4.svg";
import BgImage from "./BgImage";
import AnimatedText from "./TitleAnimatedText";
import AnimateIn from "./AnimateIn";

const WhoWeAre = () => {
  return (
    <div className="relative min-h-screen grid lg:grid-cols-2 p-5 pb-64 gap-8 lg:gap-0">
      <BgImage
        src={bg_item_1}
        duration={2}
        direction={"right"}
        width={448}
        height={779}
        className="absolute -z-10 brightness-[.2] top-0 left-0 w-[147px] sm:w-[184px] md:w-[230px] lg:w-[288px] xl:w-90 h-[255px] sm:h-[319px] md:h-[399px] lg:h-[499px] xl:h-156"
      />
      <BgImage
        src={bg_item_2}
        duration={2}
        direction={"right"}
        width={123}
        height={123}
        className="absolute -z-10 brightness-[.2] top-[295px] sm:top-[369px] md:top-[461px] lg:top-[576px] xl:top-180 left-[72px] sm:left-[90px] md:left-[113px] lg:left-[141px] xl:left-44 w-[41px] sm:w-[51px] md:w-[64px] lg:w-[80px] xl:w-25 h-[41px] sm:h-[51px] md:h-[64px] lg:h-[80px] xl:h-25"
      />
      <BgImage
        src={bg_item_4}
        duration={2}
        direction={"left"}
        width={57}
        height={190}
        className="absolute -z-10 brightness-[.2] top-[31px] sm:top-[39px] md:top-[49px] lg:top-[61px] xl:top-19 right-0 w-[18px] sm:w-[22px] md:w-[28px] lg:w-[35px] xl:w-11 h-[62px] sm:h-[78px] md:h-[98px] lg:h-[122px] xl:h-38"
      />
      <BgImage
        src={bg_item_3}
        duration={2}
        direction={"up"}
        width={504}
        height={931}
        className="absolute -z-10 brightness-[.2] -bottom-[58px] sm:-bottom-[72px] md:-bottom-[90px] lg:-bottom-[112px] xl:-bottom-35 left-[98px] sm:left-[123px] md:left-[154px] lg:left-[192px] xl:left-60 w-[188px] sm:w-[235px] md:w-[294px] lg:w-[368px] xl:w-115 h-[305px] sm:h-[381px] md:h-[476px] lg:h-[595px] xl:h-186"
      />
      <div className="flex justify-start items-start col-span-1">
        <AnimatedText
          animateBorder
          variant={"reveal"}
          className="text-nowrap px-5 sm:px-0 py-2 sm:py-3 xl:py-3.5 w-full sm:w-72 md:w-96 xl:w-124 text-center text-3xl sm:text-4xl md:text-5xl xl:text-[64px]"
        >
          WHO WE ARE
        </AnimatedText>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <AnimateIn className="text-sm md:text-base xl:text-lg">
          Y Media is an independent publishing house shaped by vision, curation,
          writing, design, and the craft of making books.
        </AnimateIn>
        <AnimateIn className="text-lg sm:text-xl xl:text-2xl mt-4">
          We are{" "}
          <span className="font-medium">
            visionaries, curators, editors, writers, designers, art directors,
            researchers, and makers
          </span>{" "}
          — working together to transform ideas, images, archives, and
          narratives into publications with presence.
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36 mt-4">
          Founded by Yasser Rizky, Y Media was created for books that require
          more than production. We work with stories that need direction,
          subjects that need perception, and visual culture that deserves to
          exist beyond temporary attention.
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36">
          Our work moves across design, typography, art, branding, visual
          culture, biographies, catalogues, cultural documentation, and
          commissioned publications. Each project is shaped from multiple points
          of view: the eye of a designer, the structure of an editor, the
          sensitivity of a curator, the clarity of a writer, and the discipline
          of production craft.
        </AnimateIn>
        <AnimateIn className="text-2xl sm:text-3xl xl:text-4xl mt-7">
          For us, publishing is not a linear process. It is a conversation
          between idea and form.
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg indent-12 sm:indent-20 xl:indent-36 mt-4">
          We think through the concept, the narrative, the image. The sequence,
          the paper, the typesetting, the rhythm, and the way the final object
          is held. Every decision matters because every decision changes how a
          story is understood.
        </AnimateIn>
        <AnimateIn className="text-lg sm:text-xl xl:text-2xl mt-4">
          A publication should not only contain meaning. It should become
          meaningful in itself.
        </AnimateIn>
        <AnimateIn className="text-sm md:text-base xl:text-lg mt-4">
          Y Media creates books and printed works for ideas that are ready to
          take form.
        </AnimateIn>
      </div>
    </div>
  );
};

export default WhoWeAre;
