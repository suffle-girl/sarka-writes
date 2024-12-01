import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import sarka from "./img/profile-picture.png";
import styles from "./style.module.less";
import clsx from "clsx";

interface Props {
  mainContent?: ReactNode;
}

export const Content = ({ mainContent }: Props): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;
  const homePagePath = "/";

  const isHomePage = currentPath === homePagePath;

  return (
    <>
      {!isHomePage ? (
        <Link to="/">
          <HomeOutlined className={styles.homeOutlined} />
        </Link>
      ) : null}

      <div className={clsx(styles.bubble, styles.bubbleMain)}>
        <div className={clsx({ [styles.content]: !isHomePage })}>
          {mainContent}
        </div>
      </div>
      <div className={clsx(styles.bubble, styles.bubbleSecondary)}>
        <img src={sarka} alt="profile picture" />
      </div>
    </>
  );
};
