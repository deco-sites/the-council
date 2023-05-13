import User, { UserProps } from "../components/ListUser/User.tsx";

export interface ListUserProps {
  Users: UserProps[];
}

export default function ListUser({ Users }: ListUserProps) {
  return (
    <div class={"flex items-start"}>
      {Users.map((user) => <User {...user} />)}
    </div>
  );
}
