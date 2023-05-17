export interface FooterProps {
  nav?: {
    label: string;
    url?: string;
  }[];
  email?: string;
}

function Footer({ nav, email }: FooterProps) {
  return (
    <footer
      class={"h-[151px] w-full mb-14 py-7 lg:px-0 px-3vwMax"}
    >
      <div
        class={"flex items-center justify-center w-full flex-wrap gap-3 mb-8 lg:px-0 px-[17px]"}
      >
        {nav?.map((item) => {
          return (
            <a
              class={`flex text-sm leading-6 font-poppins text-gray-800 tracking-[0.8px] font-medium ${
                item.url ? "underline" : ""
              } group`}
              href={item.url}
            >
              <p class={"mr-3 group-first:hidden"}>|</p>
              {item.label}
            </a>
          );
        })}
      </div>
      <p
        class={"font-poppins text-base leading-7 text-gray-800 tracking-[0.8px] mx-auto text-center block"}
      >
        <strong class={"font-bold"}>Questions?</strong> {email && email}
      </p>
    </footer>
  );
}

export default Footer;
