import styles from "./style.module.less";

interface Props {
  index: number;
  title: string;
  subtitle: string;
  content: string;
}

export const PortfolioTexts = ({
  index,
  title,
  subtitle,
  content,
}: Props): JSX.Element => {
  return (
    <div key={index} className={styles.text}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <div>{content}</div>
    </div>
  );
};
