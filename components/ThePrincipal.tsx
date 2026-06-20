import pp from "@/app/assets/the_principal/pp.jpg";
import bg_item_1 from "@/app/assets/background_items/theprincipal/1.svg";
import bg_item_2 from "@/app/assets/background_items/theprincipal/2.svg";
import BgImage from "./BgImage";
import AnimateIn from "./AnimateIn";
import AnimatedText from "./TitleAnimatedText";

const ThePrincipal = () => {
  return (
    <div className="relative grid grid-cols-2 p-5 pb-43">
      <BgImage
        src={bg_item_1}
        duration={2}
        direction={"right"}
        width={165}
        height={165}
        className="absolute left-27 bottom-22.5 w-41 h-41 object-cover brightness-[.2] -z-10"
      />
      <BgImage
        src={bg_item_2}
        duration={2}
        direction={"up"}
        width={264}
        height={896}
        className="absolute left-116 -bottom-20 w-66 h-224 object-cover brightness-[.2] -z-10"
      />
      <div className="col-span-1 pt-25 flex flex-col gap-16 max-w-113">
        <BgImage
          src={pp}
          duration={2}
          direction={"right"}
          width={453}
          height={491}
          className="w-113.25 h-122.75 object-cover object-[50%_10%]"
        />
        <div className="flex flex-col justify-start items-start gap-10">
          <AnimateIn
            direction="right"
            duration={2}
            className="uppercase font-raleway font-semibold text-lg"
          >
            “In a world obsessed with visibility, I am interested in what
            remains — ideas that become physical, stories that gain structure,
            and culture that finds a body.”
          </AnimateIn>
          <AnimateIn
            direction="right"
            duration={2}
            className="uppercase font-raleway font-semibold text-lg"
          >
            — Yasser Rizky
          </AnimateIn>
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-start items-start gap-3">
        <div className="flex justify-center items-center h-fit">
          <AnimatedText className="text-6xl text-[58px]">THE</AnimatedText>
          <AnimatedText
            animateBorder
            variant={"reveal"}
            delay={0.5}
            className="-ml-2 w-90 text-6xl text-[58px] text-center py-4"
          >
            PRINCIPAL
          </AnimatedText>
        </div>
        <AnimateIn className="text-lg indent-36">
          Yasser Rizky is a graphic designer, creative director, and founder of
          Yasser Rizky Inc., a Jakarta-based design and branding practice
          working across identity, visual culture, typography, publication
          design, and strategic communication.
        </AnimateIn>
        <AnimateIn className="text-lg indent-36 mt-4">
          His work is rooted in the belief that design is not only a matter of
          appearance, but a way of shaping how ideas are understood, remembered,
          and experienced. Across his practice, Yasser has worked with brands,
          institutions, cultural figures, artists, and private clients to
          develop visual systems, narratives, publications, and communication
          objects with clarity, character, and cultural sensitivity.
        </AnimateIn>
        <AnimateIn className="text-2xl w-full mt-4">
          Y Media was founded as an extension
          <br />
          <span className="ml-[55%]">of this practice.</span>
        </AnimateIn>
        <AnimateIn className="text-lg indent-36 mt-4">
          After years of working with identity, storytelling, paper, typography,
          books, catalogues, and cultural materials, Yasser saw the need for a
          publishing platform that treats books not merely as products, but as
          designed objects of thought. A platform where editorial direction,
          visual intelligence, material experimentation, and production craft
          can come together in one complete publishing process.
        </AnimateIn>
        <AnimateIn className="text-2xl flex flex-col w-full mt-4">
          For Yasser, publishing is a way to give form
          <br />
          <span className="ml-auto underline decoration-1 mr-5">
            to what should not disappear.
          </span>
        </AnimateIn>
        <AnimateIn className="text-lg indent-36 mt-4">
          It is where ideas become physical, stories become structured, and
          visual culture gains a presence beyond the temporary speed of the
          screen.
        </AnimateIn>
        <AnimateIn className="text-lg indent-36 mt-4">
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
