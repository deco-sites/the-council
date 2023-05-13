/** @format */
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import HeaderNav, {
  NavProps,
} from "deco-sites/the-council/components/header/HeaderNav.tsx";
import ButtonLink from "deco-sites/the-council/components/header/ButtonLink.tsx";

export interface FooterProps {
  logo: LiveImage;
  nav?: NavProps[];
}

function Header({ logo, nav }: FooterProps) {
  return (
    <header
      class={"h-[151px] w-full mb-14 z-10 relative"}
    >
      <div
        class={"w-full fixed py-[2.5vw] px-[4vw] left-0 top-0 bg-beige-100"}
      >
        <div
          class={"text-beige-100 max-w-[1400px] w-full mx-auto flex justify-between items-center "}
        >
          <img class={"h-[50px]"} src={logo} />
          <div class={"flex items-center gap-7"}>
            {nav?.length && <HeaderNav nav={nav} />}
            <ButtonLink text="Invest in The Council" url="/lp-interest" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
