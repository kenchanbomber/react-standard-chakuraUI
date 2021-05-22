import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { Link, useHistory } from "react-router-dom";

import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const histroy = useHistory();
  const onClickHome = useCallback(() => histroy.push("/home"), []);
  const onClickUserManagiment = useCallback(
    () => histroy.push("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => histroy.push("/home/setting"), []);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
      >
        <Flex
          align="center"
          mr={8}
          as="a"
          _hover={{ opacity: 0.8, cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            padding={{ base: 3, md: 5 }}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr="4">
            <Link onClick={onClickUserManagiment}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClickHome={onClickHome}
        onClickUserManagiment={onClickUserManagiment}
        onClickSetting={onClickSetting}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
});
