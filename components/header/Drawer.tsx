import ButtonDrawer from "./ButtonDrawer.tsx";
import { useUI } from "../../sdk/useUI.ts";
import Modal from "../ui/Modal.tsx";
import { NavProps } from "./HeaderNav.tsx";
import Arrow from "./Arrow.tsx";

interface DrawerProps {
  nav: NavProps[];
}

export default function Drawer({ nav }: DrawerProps) {
  const { displayDrawer, displayMenu } = useUI();

  const handleCloseDrawer = () => {
    displayDrawer.value = false;
    displayMenu.value = "initial";
  };

  const handleOpenDrawer = () => {
    displayDrawer.value = true;
  };

  const handleMenu = (menu: string) => {
    displayMenu.value = menu;
  };

  console.log(displayMenu.value);

  return (
    <>
      <ButtonDrawer
        onClick={!displayDrawer.value ? handleOpenDrawer : handleCloseDrawer}
        type={!displayDrawer.value ? "open" : "close"}
      />
      <Modal
        onClose={handleCloseDrawer}
        open={displayDrawer.value}
        mode="center"
      >
        <div
          class={"h-full w-full bg-gray-800 animate-menu pt-[121.094px] overflow-hidden"}
        >
          <ButtonDrawer
            onClick={handleCloseDrawer}
            type={!displayDrawer.value ? "open" : "close"}
          />
          <div class={"h-full w-full relative animate-in-between"}>
            <div
              class={`h-full  w-full overflow-y-scroll flex flex-col items-center justify-between transition duration-1000 ${
                displayMenu.value !== "initial" &&
                "transform translate-x-[-100%]"
              }`}
            >
              <div
                class={"h-full  w-full flex flex-col items-center justify-center"}
              >
                {nav.map((item) => {
                  return (
                    <div
                      onClick={() => handleMenu(item.text)}
                      class={"text-[6.6vmin] text-white font-medium font-poppins mt-[3vw] mx-[5vw] cursor-pointer flex items-center"}
                    >
                      {item.text}

                      <Arrow className="w-[35px] h-[35px] fill-white  ml-[2px]" />
                    </div>
                  );
                })}
              </div>
              <button
                class={`max-w-[284px] w-full min-h-[75px] mb-[6vw] flex justify-center items-center bg-orange-200 hover:opacity-80 transition outline-none`}
              >
                <a
                  class={`text-white font-medium font-poppins text-xl`}
                  href={"/lp-interes"}
                >
                  Invest in The Council
                </a>
              </button>
            </div>
            {nav.map((item) => {
              return (
                <div
                  class={`transition duration-1000 w-full h-full overflow-y-scroll flex flex-col items-center absolute top-0 z-1 bg-gray-800 justify-center ${
                    displayMenu.value === item.text
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                >
                  <div
                    onClick={() => handleMenu("initial")}
                    class={`text-[6.6vmin] text-gray-600 font-medium font-poppins mt-[3vw] mx-[5vw] cursor-pointer flex items-center`}
                  >
                    <Arrow
                      className="w-[35px] h-[35px] fill-gray-600 mr-[2px]"
                      type="left"
                    />
                    Back
                  </div>
                  {item?.children?.map((child) => (
                    <a
                      class={"text-[6.6vmin] text-white font-medium font-poppins mt-[3vw] mx-[5vw]"}
                      target={child.openNewTab ? "_blank" : ""}
                      href={child.url}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}
