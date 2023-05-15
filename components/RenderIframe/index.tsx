interface RenderIframeProps {
  iframe: string;
  style?: string;
}

export default function RenderIframe({ iframe, style }: RenderIframeProps) {
  return (
    <iframe
      class={`w-full h-full ${style && style}`}
      allow="autoplay; fullscreen"
      src={iframe}
    >
    </iframe>
  );
}
