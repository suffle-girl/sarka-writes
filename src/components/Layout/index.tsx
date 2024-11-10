import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      Zde bude obsah.
      <div>{children}</div>
    </div>
  );
};
