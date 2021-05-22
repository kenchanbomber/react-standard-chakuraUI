import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickSetting: () => void;
  onClickHome: () => void;
  onClickUserManagiment: () => void;
};

export const MenuDrawer: VFC<Props> = (props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickSetting,
    onClickUserManagiment
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button onClick={onClickHome} w="100%">
              Top
            </Button>
            <Button onClick={onClickUserManagiment} w="100%">
              ユーザー一覧
            </Button>
            <Button onClick={onClickSetting} w="100%">
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
