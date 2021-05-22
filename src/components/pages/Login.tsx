import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/UserAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const { login, loading } = useAuth();
  const onClickLogin = () => {
    login(userId);
  };
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="sm" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Input
            value={userId}
            onChange={onChangeUserId}
            placeholder="ユーザーID"
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
