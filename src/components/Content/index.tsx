import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
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
      <div className={styles.navbar}>
        <div>
          {!isHomePage ? (
            <Link to="/">
              <HomeOutlined className={styles.icons} />
            </Link>
          ) : null}
        </div>
        <div className={styles.iconsSocial}>
          <a href="https://www.instagram.com/wickedcottageinthewoods/">
            <InstagramOutlined className={styles.icons} />
          </a>
          <a href="https://www.linkedin.com/in/sarka-flidrova/">
            <LinkedinOutlined className={styles.icons} />
          </a>
        </div>
      </div>

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
