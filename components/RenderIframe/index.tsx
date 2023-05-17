interface RenderIframeProps {
  iframe: string;
  className?: string;
}

export default function RenderIframe({ iframe, className }: RenderIframeProps) {
  return (
    <iframe
      class={`w-full ${className && className}`}
      allow="autoplay; fullscreen"
      src={iframe}
    >
    </iframe>
  );
}
