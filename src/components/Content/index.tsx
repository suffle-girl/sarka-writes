import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import styles from "./style.module.less";
import clsx from "clsx";

interface Props {
  mainContent?: ReactNode;
  secondaryContent?: ReactNode;
}

export const Content = ({
  mainContent,
  secondaryContent,
}: Props): JSX.Element => {
  return (
    <>
      <Link to="/">
        <HomeOutlined className={styles.homeOutlined} />
      </Link>
      <>
        <div className={clsx(styles.bubble, styles.bubbleCv)}>
          <div className={styles.content}>{mainContent}</div>
        </div>
        <div className={clsx(styles.bubble, styles.bubblePicture)}>
          {secondaryContent}
        </div>
      </>
    </>
  );
};
