import { Content } from "../../components/Content";
import {
  mainSection,
  workExperience,
  education,
  languages,
  tools,
  hobbies,
} from "../../resources/cv";
import styles from "./style.module.less";

export const CVPage = (): JSX.Element => {
  return (
    <Content
      mainContent={
        <div className={styles.container}>
          <div className="mainSection">
            <div className={styles.title}>{mainSection.sectionName}</div>
            <div>{mainSection.description}</div>
          </div>

          <div className="workExperience">
            <div className={styles.sectionTitle}>
              {workExperience.sectionName}
            </div>
            {workExperience.workExperience?.map((item, index) => (
              <div key={index}>
                <div className={styles.expTime}>{item.timePeriod}</div>
                <div className={styles.expTitle}>{item.title}</div>
                <div>{item.company}</div>
                <ul>
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="education">
            <div className={styles.sectionTitle}>{education.sectionName}</div>
            {education.education?.map((item, index) => (
              <div key={index} className={styles.eduContainer}>
                <div className={styles.eduField}>{item.field}</div>
                <div>
                  <span className={styles.eduTime}>{item.timePeriod}</span>{" "}
                  {item.school}
                </div>
                <div>{item.descrition}</div>
              </div>
            ))}
          </div>

          <div className="languages">
            <div className={styles.sectionTitle}>{languages.sectionName}</div>
            {languages.languages?.map((item, index) => (
              <div key={index}>
                <span className={styles.highlight}>{item.subject}</span> –{" "}
                {item.description}
              </div>
            ))}
          </div>

          <div className="tools">
            <div className={styles.sectionTitle}>{tools.sectionName}</div>
            <div>
              <ul>
                {tools.tools?.map((item, index) => (
                  <li key={index}>
                    <span className={styles.highlight}>{item.subject}</span> –{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hobbies">
            <div className={styles.sectionTitle}>{hobbies.sectionName}</div>
            <div>
              <ul>
                {hobbies.hobbies?.map((item, index) => (
                  <li key={index}>{item.subject}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      }
    ></Content>
  );
};
