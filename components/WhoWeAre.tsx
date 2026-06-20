import bg_item_1 from "@/app/assets/background_items/whoweare/1.svg";
import bg_item_2 from "@/app/assets/background_items/whoweare/2.svg";
import bg_item_3 from "@/app/assets/background_items/whoweare/3.svg";
import bg_item_4 from "@/app/assets/background_items/whoweare/4.svg";
import BgImage from "./BgImage";
import AnimatedText from "./TitleAnimatedText";
import AnimateIn from "./AnimateIn";

const WhoWeAre = () => {
  return (
    <div className="relative min-h-screen grid grid-cols-2 p-5 pb-64">
      <BgImage
        src={bg_item_1}
        duration={2}
        direction={"right"}
        width={448}
        height={779}
        className="absolute top-0 left-0 w-90 h-156 -z-10 brightness-[.2]"
      />
      <BgImage
        src={bg_item_2}
        duration={2}
        direction={"right"}
        width={123}
        height={123}
        className="absolute top-180 left-44 w-25 h-25 -z-10 brightness-[.2]"
      />
      <BgImage
        src={bg_item_4}
        duration={2}
        direction={"left"}
        width={57}
        height={190}
        className="absolute top-19 right-0 w-11 h-38 -z-10 brightness-[.2]"
      />
      <BgImage
        src={bg_item_3}
        duration={2}
        direction={"up"}
        width={504}
        height={931}
        className="absolute -bottom-35 left-60 w-115 h-186 -z-10 brightness-[.2]"
      />
      <div className="flex justify-start items-start col-span-1">
        <AnimatedText
          animateBorder
          variant={"reveal"}
          className="py-3.5 w-124 text-center text-6xl text-[64px]"
        >
          WHO WE ARE
        </AnimatedText>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <AnimateIn className="text-lg">
          Y Media is an independent publishing house shaped by vision, curation,
          writing, design, and the craft of making books.
        </AnimateIn>
        <AnimateIn className="text-2xl mt-4">
          We are{" "}
          <span className="font-medium">
            visionaries, curators, editors, writers, designers, art directors,
            researchers, and makers
          </span>{" "}
          — working together to transform ideas, images, archives, and
          narratives into publications with presence.
        </AnimateIn>
        <AnimateIn className="text-lg indent-36 mt-4">
          Founded by Yasser Rizky, Y Media was created for books that require
          more than production. We work with stories that need direction,
          subjects that need perception, and visual culture that deserves to
          exist beyond temporary attention.
        </AnimateIn>
        <AnimateIn className="text-lg indent-36">
          Our work moves across design, typography, art, branding, visual
          culture, biographies, catalogues, cultural documentation, and
          commissioned publications. Each project is shaped from multiple points
          of view: the eye of a designer, the structure of an editor, the
          sensitivity of a curator, the clarity of a writer, and the discipline
          of production craft.
        </AnimateIn>
        <AnimateIn className="text-4xl mt-7">
          For us, publishing is not a linear process. It is a conversation
          between idea and form.
        </AnimateIn>
        <AnimateIn className="text-lg indent-36 mt-4">
          We think through the concept, the narrative, the image. The sequence,
          the paper, the typesetting, the rhythm, and the way the final object
          is held. Every decision matters because every decision changes how a
          story is understood.
        </AnimateIn>
        <AnimateIn className="text-2xl mt-4">
          A publication should not only contain meaning. It should become
          meaningful in itself.
        </AnimateIn>
        <AnimateIn className="text-lg mt-4">
          Y Media creates books and printed works for ideas that are ready to
          take form.
        </AnimateIn>
      </div>
    </div>
  );
};

export default WhoWeAre;
