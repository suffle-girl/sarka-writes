import { Switch } from "antd";
import styles from "./styles.module.less";

export const App = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <h1>Webová aplikace - React + TypeScript</h1>
      <Switch />
    </div>
  );
};
