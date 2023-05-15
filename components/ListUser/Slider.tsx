import { Children } from "preact/compat";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["ul"] & {
  snap?: string;
  slidePerView?: number;
};

function Slider({
  children,
  snap = "snap-start",
  class: _class = "scrollbar-none",
  slidePerView = 1,
  ...props
}: Props) {
  return (
    <ul
      data-slider
      class={`flex items-start overflow-x-auto snap-x snap-mandatory cursor-grap ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li
          className={`min-w-full sm:min-w-[50%] lg:min-w-[33.33%]`}
          data-slider-item={index}
          class={snap}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

export default Slider;
