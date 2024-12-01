import { Link } from "react-router-dom";
import styles from "./style.module.less";
import clsx from "clsx";
import { Content } from "../../components/Content";
import { RightOutlined } from "@ant-design/icons";

export const HomePage = (): JSX.Element => {
  return (
    <Content
      mainContent={
        <>
          <Link
            className={clsx(styles.homePageBubble, styles.homePageBubbleCv)}
            to="/cv"
          >
            <div>
              Šárka
              <br /> Flídrová
            </div>
            <div className={styles.homePageBubbleSubheader}>
              <RightOutlined /> Writer | Translator | Localizer
            </div>
          </Link>
        </>
      }
    ></Content>
  );
};
