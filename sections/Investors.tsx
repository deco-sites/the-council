import Title from "../components/investors/Title.tsx";
import RenderIframe from "../components/RenderIframe/index.tsx";

export interface InvestorsProps {
  title: string;
  footerText: string;
  linkButton: {
    openNewTab?: boolean;
    url: string;
    text: string;
  };
}

export default function Investors(
  { title, footerText, linkButton }: InvestorsProps,
) {
  return (
    <div class={"bg-gray-800 py-6vwMax px-4vw mb-8 mx-auto"}>
      <div class={"flex flex-col"}>
        <Title text={title} />
        <div class="pb-[66.625%] relative w-full">
          <RenderIframe
            className="absolute left-0 top-0 w-full h-full"
            iframe="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fairtable.com%2Fembed%2FshrJez0GLjxAUfgCy&display_name=Airtable&url=https%3A%2F%2Fairtable.com%2FshrJez0GLjxAUfgCy&image=https%3A%2F%2Fstatic.airtable.com%2Fimages%2Foembed%2Fairtable.png&key=61d05c9d54e8455ea7a9677c366be814&type=text%2Fhtml&schema=airtable&wmode=opaque"
          />
        </div>

        <p
          class={"leading-7 font-medium my-4 text-base text-white font-poppins mb-6vwMax"}
        >
          {footerText}
        </p>

        <button
          class={`lg:w-[477px] lg:h-[108px] max-w-[calc(100% - 50px)] md:max-w-full md:w-[300px] md:h-[80px] w-full h-16 flex justify-center items-center bg-orange-200 hover:opacity-80 transition mt-[16vh] md:mt-6vwMax mx-auto`}
        >
          <a
            class={`text-white font-medium font-poppins text-base`}
            target={linkButton?.openNewTab ? "_blank" : ""}
            href={linkButton?.url}
          >
            {linkButton?.text}
          </a>
        </button>
      </div>
    </div>
  );
}
