export interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <h2
      class={"text-[34px] md:text-[44px] px-[17px] md:px-0 leading-10 h-full md:leading-[54px] mb-[30px] md:mb-[34px] text-white font-sans text-center font-light"}
    >
      {text}
    </h2>
  );
}
