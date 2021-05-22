import { memo, ReactNode, VFC } from "react";

import { Header } from "../organizms/Header";

type Props = {
  children: ReactNode;
};

export const HeaderOnly: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
