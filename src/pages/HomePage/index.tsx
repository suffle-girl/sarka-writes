import { Link } from "react-router-dom";
import styles from "./style.module.less";
import clsx from "clsx";

export const HomePage = (): JSX.Element => {
  return (
    <div>
      <Link to="/cs">
        <div className={clsx(styles.bubble, styles.bubbleCs)}>CS</div>
      </Link>
      <Link to="/en">
        <div className={clsx(styles.bubble, styles.bubbleEn)}>EN</div>
      </Link>
      <Link className={clsx(styles.bubble, styles.bubbleCv)} to="/cv">
        <div>Šárka Flídrová</div>
        <div className={styles.bubbleCvSubheader}>
          Writer | Translator | Localizer
        </div>
      </Link>
      <div className={clsx(styles.bubble, styles.bubblePicture)}>
        here goes the profile picture
      </div>
    </div>
  );
};
