import { useCallback, useState } from "react";
import { User } from "../types/api/user";
type Props = {
  id: number;
  users: User[];
};

export const useSelectedUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const selectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id) ?? null;
    setSelectedUser(targetUser);
  }, []);
  return { selectUser, selectedUser };
};
