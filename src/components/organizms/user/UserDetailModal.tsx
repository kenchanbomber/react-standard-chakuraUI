import { ChangeEvent, useEffect, useState } from "react";
import { memo, VFC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isAdmin?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;
  const onClickUpdate = () => alert();
  const [userName, setUserName] = useState("");
  const [userFullName, setUserfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setUserName(user?.username ?? "");
    setUserfullName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserfullName(e.target.value);
  const onChangeMail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={userName}
                  isReadOnly={!isAdmin}
                  onChange={onChangeName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={userFullName}
                  isReadOnly={!isAdmin}
                  onChange={onChangeFullName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input
                  value={email}
                  isReadOnly={!isAdmin}
                  onChange={onChangeMail}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  isReadOnly={!isAdmin}
                  onChange={onChangePhone}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
