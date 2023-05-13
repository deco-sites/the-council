import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import Markdown from "./Markdown.tsx";

export interface Person {
  image: LiveImage;
  name: string;
  description: string;
  skill?: string;
  linkDescription?: {
    url: string;
    label: string;
  };
}

function CardPerson(
  { image, name, description, skill, linkDescription }: Person,
) {
  return (
    <div class={"lg:max-w-[25%] max-w-none w-full relative"}>
      <div class={"relative sm:w-[75%] md:w-auto"}>
        <img class={"rounded-full w-full"} src={image} alt={name} />
      </div>

      <div
        class={"px-2 md:max-w-[200px] sm:w-[25%] md:relative z-1 -translate-y-5 md:translate-y-0 sm:-translate-y-5 md:w-full lg:h-auto sm:absolute h-full flex flex-col justify-center right-0 top-0 lg:block"}
      >
        <h3 className="text-base m-0 text-gray-800 font-poppins font-medium bottom-0 left-0 tracking-wider mb-2 md:-translate-y-5 sm:-translate-x-24 sm:whitespace-nowrap md:whitespace-normal md:translate-x-0 ">
          <p class={"bg-beige-100 inline px-1"}>
            {name}
          </p>
        </h3>
        <p class="text-sm leading-[26px] m-0 text-gray-800 font-poppins font-medium ">
          {description}
          {linkDescription?.url && (
            <a target={"_blank"} href={linkDescription.url}>
              {linkDescription.label}
            </a>
          )}
        </p>

        <p class="text-sm leading-[26px]text-gray-800 font-poppins font-medium mt-4">
          {skill}
        </p>
      </div>
    </div>
  );
}

export default CardPerson;
