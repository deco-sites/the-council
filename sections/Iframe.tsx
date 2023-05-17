import RenderIframe from "../components/RenderIframe/index.tsx";

export interface IframeProps {
  iframe: string;
}

export default function Iframe({ iframe }: IframeProps) {
  return (
    <RenderIframe
      iframe={iframe}
      className="md:py-6vwMax py-[10vmax] md:px-4vw px-6vw max-w-[1400px] h-[500px] mx-auto"
    />
  );
}
