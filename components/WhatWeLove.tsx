import LargeLogo from "@/app/assets/large_logo.svg";
import Image from "next/image";
import bg_item_1 from "@/app/assets/background_items/whatwelove/1.svg";
import bg_item_3 from "@/app/assets/background_items/whatwelove/3.svg";
import bg_item_4 from "@/app/assets/background_items/whatwelove/4.svg";
import bg_item_5 from "@/app/assets/background_items/whatwelove/5.svg";
import bg_item_6 from "@/app/assets/background_items/whatwelove/6.svg";
import bg_item_7 from "@/app/assets/background_items/whatwelove/7.svg";

const WhatWeLove = () => {
  return (
    <div className="relative min-h-screen p-5 py-17.5 text-white">
      <Image
        src={bg_item_1}
        alt=""
        width={150}
        height={100}
        className="absolute -top-32 left-0 -z-10 brightness-[.2]"
      />
      <Image
        src={bg_item_7}
        alt=""
        width={240}
        height={335}
        className="absolute -bottom-52 right-0 -z-10 brightness-[.2]"
      />
      <div className="relative w-full flex items-stretch justify-start">
        <div className="relative z-10 w-1/2">
          <div className="absolute top-115 right-0 -z-10 h-px w-84 bg-white/50 -rotate-20" />
          <h1 className="uppercase text-6xl">WHAT</h1>
          <div className="flex justify-center items-center gap-12.5 pl-52">
            <h1 className="uppercase text-6xl">WE</h1>
            <h1 className="border-y w-84 py-3.5 text-center text-6xl">LOVE</h1>
          </div>
          <div className="max-w-175 flex flex-col justify-start items-start mt-10 gap-7">
            <p className="text-2xl text-balance">
              Y Media is a publishing atelier founded by Yasser Rizky, graphic
              designer, creative director, and founder of Yasser Rizky Inc.,
              from a simple conviction: meaningful ideas deserve thoughtful
              publication.
            </p>
            <p className="text-lg indent-28">
              In a time where everything can be seen, but not everything becomes
              real, Y Media exists for stories, images, and ideas that deserve
              more than temporary visibility.
            </p>
            <div className="flex flex-col items-start gap-1 text-lg">
              <p className="font-medium text-2xl indent-7">Images circulate.</p>
              <p className="ml-24 text-2xl underline decoration-3 underline-offset-4">
                Stories pass.
              </p>
              <p className="ml-36 text-2xl">
                <span className="underline decoration-1 decoration-[#BFBFBF] underline-offset-4">
                  Culture appears,
                </span>{" "}
                performs, and disappears into the speed of the screen.
              </p>
            </div>
            <p className="text-2xl">
              Y Media moves visual culture beyond this condition — into physical
              presence.
            </p>
            <p className="text-lg indent-24">
              The company publishes books on design, typography, art, branding,
              visual culture, biographies, catalogues, and other subjects where
              ideas, images, and narratives intersect. Its focus is not simply
              on producing books, but on creating publications that give lasting
              form to knowledge, practice, memory, and cultural discourse.
            </p>
          </div>
        </div>
        <div className="relative w-1/2 flex justify-center items-start mt-52 flex-1">
          <Image src={LargeLogo} alt="" width={"297"} height={"308"} />
          <Image
            src={bg_item_3}
            alt=""
            width={185}
            height={215}
            className="absolute -left-24 bottom-0 -z-10 brightness-[.2]"
          />
          <Image
            src={bg_item_4}
            alt=""
            width={360}
            height={280}
            className="absolute right-0 -bottom-32 -z-10 brightness-[.2]"
          />
        </div>
      </div>
      <div className="relative w-full grid grid-cols-4 items-stretch justify-start gap-5 mt-10">
        <Image
          src={bg_item_5}
          alt=""
          width={92}
          height={92}
          className="absolute top-14 right-1/2 -translate-x-1/2 -z-10 brightness-[.2]"
        />
        <Image
          src={bg_item_6}
          alt=""
          width={585}
          height={817}
          className="absolute top-37.5 left-37.5 -z-10 brightness-[.2]"
        />
        <div className="col-span-1 space-y-7">
          <p className="text-2xl">
            At Y Media, a book is understood as more than a vessel for content.
          </p>
          <p className="text-lg indent-8">
            Its paper stock, typography, binding, format, folding, finishing,
            and method of production are not treated as technical afterthoughts,
            but as decisions that shape how a work is experienced, understood,
            and remembered.
          </p>
        </div>
        <div className="col-span-1 text-2xl text-balance">
          A publication is where an idea becomes matter. Where a story becomes
          structure. Where images find rhythm, weight, texture, and permanence.
        </div>
        <div className="col-span-2">
          <p className="text-lg indent-32">
            This approach stems from the belief that books about culture, art,
            design, branding, and human experience should embody the same level
            of care, intention, and craft as the subjects they document.
          </p>
          <p className="text-4xl mt-7">
            Form and content are developed together, each informing the other
            throughout the publishing process.
          </p>
          <p className="text-lg mt-12 indent-32">
            Every publication is approached as both an editorial project and a
            designed object — made to be read, studied, collected, and revisited
            over time.
          </p>
          <p className="text-lg mt-8 indent-32">
            Through publishing, editorial direction, design, paper exploration,
            folding, binding, printing, and craft, Y Media gives ideas a body,
            stories a form, and culture a place in the world.
          </p>
          <div className="mt-12">
            <p className="text-2xl underline decoration-3 underline-offset-5">
              Not just seen.
            </p>
            <p className="text-2xl underline decoration-3 underline-offset-5">
              Made present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeLove;
