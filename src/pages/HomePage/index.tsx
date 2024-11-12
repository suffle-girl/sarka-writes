import { Link } from "react-router-dom";
import styles from "./style.module.less";
import clsx from "clsx";
import sarka from "./img/profile-picture.png";
import { Content } from "../../components/Content";

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
              Writer | Translator | Localizer
            </div>
          </Link>
        </>
      }
      secondaryContent={
        <>
          <img src={sarka} alt="profile picture" />
        </>
      }
    ></Content>
  );
};
