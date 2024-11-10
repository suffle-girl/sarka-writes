import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};
