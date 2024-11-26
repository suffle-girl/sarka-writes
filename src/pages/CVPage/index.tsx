import { Content } from "../../components/Content";
import {
  mainSection,
  workExperience,
  education,
  languages,
  tools,
  hobbies,
} from "../../resources/cv";

export const CVPage = (): JSX.Element => {
  return (
    <Content
      mainContent={
        <div>
          <div className="mainSection">
            <div>{mainSection.sectionName}</div>
            <div>{mainSection.description}</div>
          </div>

          <div className="workExperience">
            <div>{workExperience.sectionName}</div>
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
            <div>{education.sectionName}</div>
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
            <div>{languages.sectionName}</div>
            {languages.languages?.map((item, index) => (
              <div key={index}>
                {item.subject} – {item.description}
              </div>
            ))}
          </div>

          <div className="tools">
            <div>{tools.sectionName}</div>
            {tools.tools?.map((item, index) => (
              <div key={index}>
                {item.subject} – {item.description}
              </div>
            ))}
          </div>

          <div className="hobbies">
            <div>{hobbies.sectionName}</div>
            {hobbies.hobbies?.map((item, index) => (
              <div key={index}>
                {item.subject} – {item.description}
              </div>
            ))}
          </div>
        </div>
      }
    ></Content>
  );
};
