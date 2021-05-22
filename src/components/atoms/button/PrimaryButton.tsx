import { Button } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      disabled={disabled}
      isLoading={loading}
    >
      {children}
    </Button>
  );
};
