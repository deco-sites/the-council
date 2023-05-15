import Title from "../components/investors/Title.tsx";
import RenderIframe from "../components/RenderIframe/index.tsx";

export interface InvestorsProps {
  title: string;
  footerText: string;
}

export default function Investors({ title, footerText }: InvestorsProps) {
  return (
    <div class={"bg-gray-800 py-[6.6vmax] px-[4vw] mb-8"}>
      <div>
        <Title text={title} />
        <div class="pb-[66.625%] relative w-full">
          <RenderIframe
            style="absolute left-0 top-0"
            iframe="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fairtable.com%2Fembed%2FshrJez0GLjxAUfgCy&display_name=Airtable&url=https%3A%2F%2Fairtable.com%2FshrJez0GLjxAUfgCy&image=https%3A%2F%2Fstatic.airtable.com%2Fimages%2Foembed%2Fairtable.png&key=61d05c9d54e8455ea7a9677c366be814&type=text%2Fhtml&schema=airtable&wmode=opaque"
          />
        </div>

        <p
          class={"leading-7 font-medium my-4 text-base text-white font-poppins"}
        >
          {footerText}
        </p>
      </div>
    </div>
  );
}
