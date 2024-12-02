import { Content } from "../../components/Content";
import styles from "./style.module.less";

export const ErrorPage = (): JSX.Element => {
  return (
    <Content
      mainContent={
        <div className={styles.text}>There is nothing to see here...</div>
      }
    />
  );
};
