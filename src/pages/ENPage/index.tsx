import { Content } from "../../components/Content";
import { enTexts } from "../../resources/enTexts";
import styles from "./style.module.less";

export const ENPage = (): JSX.Element => {
  return (
    <Content
      mainContent={
        <div>
          {enTexts.map((text, index) => (
            <div key={index} className={styles.text}>
              <h2 className={styles.title}>{text.title}</h2>
              <h3 className={styles.subtitle}>{text.origin}</h3>
              <div>{text.content}</div>
            </div>
          ))}
        </div>
      }
    ></Content>
  );
};
