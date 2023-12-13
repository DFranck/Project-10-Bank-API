import { useSelector } from "react-redux";

export const UserName = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return `${user?.firstName} ${user?.lastName}`;
};
