import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClickUser: (id: number) => void;
};

export const UserCard: VFC<Props> = (props) => {
  const { id, imageUrl, userName, fullName, onClickUser } = props;
  return (
    <Box
      height="260px"
      width="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ opacity: 0.8, cursor: "pointer" }}
      onClick={() => onClickUser(id)}
    >
      <Stack textAlign="center">
        <Image
          alt={userName}
          margin="auto"
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
};
