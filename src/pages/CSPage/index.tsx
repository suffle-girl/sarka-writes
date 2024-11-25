import { Content } from "../../components/Content";
import { PortfolioTexts } from "../../components/PortfolioTexts";
import { csTexts } from "../../resources/csTexts";

export const CSPage = (): JSX.Element => {
  return (
    <Content
      mainContent={
        <div>
          {csTexts.map((text, index) => (
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
