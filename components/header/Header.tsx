/** @format */
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import HeaderNav, {
  NavProps,
} from "deco-sites/the-council/components/header/HeaderNav.tsx";
import ButtonLink from "deco-sites/the-council/components/header/ButtonLink.tsx";
import Drawer from "../../islands/Drawer.tsx";

export interface FooterProps {
  logo: LiveImage;
  nav?: NavProps[];
}

function Header({ logo, nav }: FooterProps) {
  return (
    <header
      class={"h-[82px] md:h-[151px] w-full mb-5 md:mb-14 z-10 relative"}
    >
      <div
        class={"w-full fixed md:py-2vw md:px-4vw p-6vw left-0 top-0 bg-beige-100"}
      >
        <div
          class={"text-beige-100 max-w-[1400px] w-full mx-auto flex justify-between items-center"}
        >
          <a href={"/"}>
            <img class={"h-[30px] sm:h-[50px]"} src={logo} />
          </a>

          <Drawer nav={nav ?? []} />
          <div class={"hidden md:flex items-center gap-7"}>
            {nav?.length && <HeaderNav nav={nav} />}
            <ButtonLink text="Invest in The Council" url="/lp-interest" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
