import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organizms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organizms/user/UserDetailModal";
import { useSelectedUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagiment: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  useEffect(() => getUsers(), [getUsers]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectUser, selectedUser } = useSelectedUser();
  const { loginUser } = useLoginUser();

  const onClickUser = useCallback(
    (id: number) => {
      selectUser({ id, users });
      onOpen();
    },
    [users, onOpen, selectUser]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/ramdom"
                fullName={user.name}
                userName={user.username}
                onClickUser={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
