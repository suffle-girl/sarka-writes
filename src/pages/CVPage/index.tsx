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
                <div>{item.timePeriod}</div>
                <div>{item.title}</div>
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
              <div key={index}>
                <div>{item.field}</div>
                <div>
                  {item.timePeriod} {item.school}
                </div>
                <div>{item.descrition}</div>
              </div>
            ))}
          </div>

          <div className="languages">
            <div className={styles.sectionTitle}>{languages.sectionName}</div>
            {languages.languages?.map((item, index) => (
              <div key={index}>
                {item.subject} – {item.description}
              </div>
            ))}
          </div>

          <div className="tools">
            <div className={styles.sectionTitle}>{tools.sectionName}</div>
            <div>
              <ul>
                {tools.tools?.map((item, index) => (
                  <li key={index}>
                    {item.subject} – {item.description}
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
