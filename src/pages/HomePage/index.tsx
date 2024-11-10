import { Link } from "react-router-dom";
import styles from "./style.module.less";
import clsx from "clsx";
import sarka from "./img/profile-picture.png";

export const HomePage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.langBubbles}>
        <Link to="/cs">
          <div className={clsx(styles.bubble, styles.bubbleCs)}>CS</div>
        </Link>
        <Link to="/en">
          <div className={clsx(styles.bubble, styles.bubbleEn)}>EN</div>
        </Link>
      </div>

      <div className={styles.contentBubbles}>
        <Link className={clsx(styles.bubble, styles.bubbleCv)} to="/cv">
          <div>
            Šárka
            <br /> Flídrová
          </div>
          <div className={styles.bubbleCvSubheader}>
            Writer | Translator | Localizer
          </div>
        </Link>
        <div className={clsx(styles.bubble, styles.bubblePicture)}>
          <img src={sarka} alt="profile picture" />
        </div>
      </div>
    </div>
  );
};
