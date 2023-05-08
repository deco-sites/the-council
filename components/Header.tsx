/** @format */
import { asset } from "$fresh/runtime.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface HeaderProps {
  logo: LiveImage;
}

function Header({ logo }: HeaderProps) {
  return (
    <header
      class={"text-beige-100 max-w-[1400px] w-full mx-auto flex justify-between items-center pt-[25px]"}
    >
      <img class={"h-[50px]"} src={logo} />
    </header>
  );
}

export default Header;
