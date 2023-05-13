import { marky } from "https://deno.land/x/marky@v1.1.6/mod.ts";

export type Props = {
  text: string;
  className?: string;
};

function Markdown({ text, className }: Props) {
  const body = marky(text).replace(/<p><p>/g, "<p>").replace(
    /<\/p><\/p>/g,
    "</p>",
  );

  return (
    <div
      class={`${className}`}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}

export default Markdown;
