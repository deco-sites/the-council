export interface ButtonLinkProps {
  text: string;
  url?: string;
  openNewTab?: boolean;
  className?: string;
  fontSize?: string;
}

function ButtonLink(
  { text, url, openNewTab, className, fontSize = "text-sm" }: ButtonLinkProps,
) {
  return (
    <button
      class={`w-[213px] h-[55px] flex justify-center items-center bg-orange-200 hover:opacity-80 transition ${className}`}
    >
      <a
        class={`${fontSize} text-white font-medium font-poppins`}
        target={openNewTab ? "_blank" : ""}
        href={url}
      >
        {text}
      </a>
    </button>
  );
}

export default ButtonLink;
