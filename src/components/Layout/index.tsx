import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.less";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.layout}>
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
