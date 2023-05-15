import User, { UserProps } from "../components/ListUser/User.tsx";
import UserCarousel from "../components/ListUser/Carousel.tsx";

export interface ListUserProps {
  Users: UserProps[];
}

export default function ListUser({ Users }: ListUserProps) {
  return (
    <div class={"flex items-start  mb-[10vmax]"}>
      <UserCarousel users={Users} />
    </div>
  );
}
