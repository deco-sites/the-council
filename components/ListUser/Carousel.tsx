import Slider from "./Slider.tsx";
import SliderControllerJS from "deco-sites/the-council/islands/SliderJs.tsx";
import User, { UserProps } from "./User.tsx";

export interface Props {
  users: UserProps[];
}

function Controls() {
  return (
    <div class="sm:absolute inset-0 flex items-center gap-[10px] sm:gap-0 pt-5 sm:pt-0 justify-center sm:justify-between px-1.5 pointer-events-none h-user w-full ">
      <button
        class="sm:w-[60px] sm:h-[60px] w-10 h-10 bg-orange-200 opacity-70 hover:opacity-100 transition-all rounded-full pointer-events-auto flex justify-center items-center"
        data-slide="prev"
        aria-label="Previous item"
      >
        <svg
          class={"w-5 h-5 sm:w-[36px] sm:h-[37px]"}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <g clip-path="url(#clip0_1_103)">
            <path
              d="M8.10531 24.9628L1.73627 18.5937L8.10532 12.2246"
              stroke="white"
              stroke-width="1.63636"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35.07 18.5981H2.7644"
              stroke="white"
              stroke-width="1.63636"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_103">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="translate(0 0.449951)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <button
        class="sm:w-[60px] sm:h-[60px] w-10 h-10 bg-orange-200 opacity-70 hover:opacity-100 transition-all rounded-full pointer-events-auto flex justify-center items-center"
        data-slide="next"
        aria-label="Next item"
      >
        <svg
          class={"w-5 h-5 sm:w-[36px] sm:h-[37px]"}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <g clip-path="url(#clip0_1_109)">
            <path
              d="M27.939 12.2146L34.3081 18.5837L27.939 24.9527"
              stroke="white"
              stroke-width="1.63636"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.974365 18.5789H33.28"
              stroke="white"
              stroke-width="1.63636"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_109">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="translate(0 0.439941)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

function UserCarousel({ users }: Props) {
  return (
    <div
      id={"user-carousel"}
      class="w-full px-4vw cursor-grab"
    >
      <div class={"relative"}>
        <Slider
          slidePerView={3}
          class="col-span-full row-span-full scrollbar-none gap-5"
        >
          {users?.map((user, index) => <User {...user} />)}
        </Slider>

        <Controls />
      </div>

      <SliderControllerJS
        rootId={"user-carousel"}
        behavior="smooth"
        // interval={interval && interval * 1e3}
      />
    </div>
  );
}

export default UserCarousel;
