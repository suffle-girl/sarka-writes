import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.less";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;
  const homePagePath = "/";

  const isHomePage = currentPath === homePagePath;

  return (
    <div
      className={clsx(styles.layout, { [styles.layoutOverflow]: !isHomePage })}
    >
      <div className={styles.langBubbles}>
        <Link to="/cs">
          <div className={clsx(styles.layoutBubble, styles.layoutBubbleCs)}>
            CS
          </div>
        </Link>
        <Link to="/en">
          <div className={clsx(styles.layoutBubble, styles.layoutBubbleEn)}>
            EN
          </div>
        </Link>
      </div>

      <div className={styles.contentBubbles}>{children}</div>
    </div>
  );
};
