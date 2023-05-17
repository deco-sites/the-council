interface ButtonDrawerProps {
  type: "open" | "close";
  onClick: () => void;
}

export default function ButtonDrawer({
  type = "open",
  onClick,
}: ButtonDrawerProps) {
  return (
    <div
      onClick={onClick}
      class={`md:hidden w-[35px] cursor-pointer ${
        type === "close" ? "absolute right-12 top-12" : "relative"
      }`}
    >
      {type === "open" && (
        <>
          <div class={"w-full h-[1px] bg-gray-800 mb-[10px]"}></div>
          <div class={"w-full h-[1px] bg-gray-800"}></div>
        </>
      )}
      {type === "close" && (
        <>
          <div
            class={`w-full h-[1px]  ${
              type === "close" ? "bg-white" : "bg-gray-800"
            } rotate-[135deg]`}
          >
          </div>
          <div
            class={`w-full h-[1px] ${
              type === "close" ? "bg-white" : "bg-gray-800"
            } rotate-[-135deg] absolute left-0 top-0`}
          >
            
          </div>
        </>
      )}
    </div>
  );
}
