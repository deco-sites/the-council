import Markdown from "deco-sites/the-council/components/ui/Markdown.tsx";
import Container from "deco-sites/the-council/components/ui/Container.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface TextAreaProps {
  textTitle: HTML;
  listText?: HTML[];
}

export default function TextArea({ textTitle, listText }: TextAreaProps) {
  return (
    <Container>
      <div
        class={"w-full lg:px-0 sm:max-w-[70%] mx-auto mb-[calc(30vmax / 10)] mb-16 "}
      >
        <Markdown
          className="mx-0 w-full markdown-body text-gray-800 font-sans text-3xl lg:text-[2.5rem] leading-[37px] lg:leading-[3rem] tracking-normal mt-0 m-8 font-bold "
          text={textTitle}
        />
        {listText?.length && listText.map((text) => {
          return (
            <Markdown
              className="mx-0 w-full markdown-body text-gray-800 lg:text-[1.6rem] text-[21px] leading-7 lg:leading-8 m-8 font-sans font-light"
              text={text}
            />
          );
        })}
      </div>
    </Container>
  );
}
