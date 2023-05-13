export interface NavProps {
  text: string;
  children?: {
    url: string;
    label: string;
    openNewTab?: boolean;
  }[];
}

export interface HeaderNavProps {
  nav: NavProps[];
}

export default function HeaderNav({ nav }: HeaderNavProps) {
  return (
    <div className={"flex gap-4"}>
      {nav.map((item) => {
        return (
          <div class={"group relative hover:cursor-pointer"}>
            <p class="font-poppins text-base leading-7 text-gray-800 font-medium">
              {item.text}
            </p>
            {item.children && (
              <div
                class={"bg-beige-100 p-2 absolute right-0 left-auto top-[calc(100% - 20px)] opacity-0  transition group-hover:opacity-100 pointer-events-none  group-hover:pointer-events-auto flex flex-col text-right"}
              >
                {item.children.map((children) => (
                  <a
                    class={"font-poppins text-base leading-7 text-gray-800 font-medium whitespace-nowrap"}
                    target={children.openNewTab ? "_blank" : ""}
                    href={children.url}
                  >
                    {children.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
