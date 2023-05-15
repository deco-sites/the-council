export interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <h2
      class={"text-[44px] leading-[54px] mb-[34px] text-white font-sans text-center font-light"}
    >
      {text}
    </h2>
  );
}
