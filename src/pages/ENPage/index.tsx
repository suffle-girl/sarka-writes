import { Content } from "../../components/Content";
import { PortfolioTexts } from "../../components/PortfolioTexts";
import { enTexts } from "../../resources/enTexts";

export const ENPage = (): JSX.Element => {
  return (
    <Content
      mainContent={
        <div>
          {enTexts.map((text, index) => (
            <PortfolioTexts
              index={index}
              title={text.title}
              subtitle={text.origin}
              content={text.content}
            />
          ))}
        </div>
      }
    ></Content>
  );
};
