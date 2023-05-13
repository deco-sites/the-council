import Markdown from "deco-sites/the-council/components/ui/Markdown.tsx";
import Container from "deco-sites/the-council/components/ui/Container.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface TextGridProps {
  listText?: {
    title: string;
    description: HTML;
  }[];
}

export default function TextGrid({ listText }: TextGridProps) {
  return (
    <Container>
      <div
        class={"w-full lg:px-0 sm:max-w-[70%] mx-auto mb-[calc(30vmax / 10)] mb-16 :sm:px-0 px-6"}
      >
        {listText?.map((text) => (
          <div class="flex md:flex-row flex-col justify-between items-start  pb-10 last:border-none last:mb-0 border-b-gray-800 border-b w-full mb-10 ">
            <h3
              class={"font-bold md:text-[40px] text-3xl md:leading-[52px] md:mb-0 mb-8"}
            >
              {text.title}
            </h3>
            <Markdown
              className="md:w-[50%] flex flex-col text-2xl font-light"
              text={text.description}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
