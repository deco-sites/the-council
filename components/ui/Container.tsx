import { JSX } from "preact";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: string;
}

function Container({ children, style }: ContainerProps) {
  return (
    <div
      class={`sm:py-[calc(30vmax / 10)] max-w-[1400px] px-4vw mx-auto w-full box-content ${
        style && style
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
