interface WorkExperience {
  timePeriod: string;
  title: string;
  company: string;
  responsibilities: string[];
}

interface Education {
  field: string;
  timePeriod: string;
  school: string;
  descrition?: string;
}

interface List {
  subject: string;
  description?: string;
}

interface Section {
  sectionName: string;
  description?: string;
  workExperience?: WorkExperience[];
  education?: Education[];
  languages?: List[];
  tools?: List[];
  hobbies?: List[];
}

export const mainSection: Section = {
  sectionName: "Bc. Šárka Flídrová",
  description: `
I have almost five years of experience with localization, content editing, and content management in Wargaming Prague and a bachelor’s degree in journalism from Charles University. I worked for two years as an Editor/Writer for ABC (ábíčko), a famous Czech magazine for kids.
Excellent language and communication skills in both Czech and English. Great work discipline.
Professional experience with Jira & Confluence, Notion & Slack, CMS for World of Tanks, SmartCat, and many more.
  `,
};

export const workExperience: Section = {
  sectionName: "Work Experience",
  workExperience: [
    {
      timePeriod: "2019 – 2024",
      title: "Localization QA Specialist, CS",
      company: "Wargaming Prague s.r.o",
      responsibilities: [
        "Content management – WoT CMS – adding missing assets, supervision of their quality (practical use of HTML)",
        "Translation – portal articles and other in-game texts and materials (from English to Czech)",
        "Editing – in-game texts, bundles, and other assets provided by external vendors",
        "Testing of game localization – World of Tanks & World of Tanks Blitz, web landing pages, World of Warships’ Armory",
        "Occasional help with coordination of the tasks to ensure a smooth workflow",
      ],
    },
    {
      timePeriod: "2017 – 2019",
      title: "Administrative Clerk, HR",
      company: "Radio Free Europe/Radio Liberty",
      responsibilities: [
        "General administrative support to the whole Prague HR team",
        "Handling documents and databases, organizing, storing, and disposing of the documents",
        "Improvement of HR processes in the company",
        "Translation of official HR in-house communiqués",
      ],
    },
    {
      timePeriod: "2016 – 2018",
      title: "Editor, magazine ABC",
      company: "Czech News Center a.s.",
      responsibilities: [
        "Preparing the Culture and Trends sections for the magazine",
        "Researching topics suitable for our readers",
        "Providing visual materials ",
        "Translation of official HR in-house communiqués",
        "Ensuring good relationships with partner companies and agencies",
      ],
    },
  ],
};

export const education: Section = {
  sectionName: "Education",
  education: [
    {
      field: "Bc. in Journalism",
      timePeriod: "2014 – 2017",
      school: "Faculty of Social Sciences, Charles University, Prague",
      descrition: "Focus on written journalism and photojournalism.",
    },
    {
      field: "Social and Cultural Ecology",
      timePeriod: "2017 – 2019",
      school: "Faculty of Humanities, Charles University, Prague",
    },
  ],
};

export const languages: Section = {
  sectionName: "Language Skills",
  languages: [
    {
      subject: "Czech",
      description: "native speaker, Bachelor's degree in journalism",
    },
    {
      subject: "English",
      description:
        "C2 Level, 5 years of professional experience as a translator",
    },
  ],
};

export const tools: Section = {
  sectionName: "Apps & Tools",
  tools: [
    {
      subject: "Jira, Notion, Confluence",
      description: "creating and managing tasks, documentation",
    },
    {
      subject: "Teams, Slack, Outlook ",
      description: "efficient team communication, meeting management",
    },
    {
      subject: "SmartCat, Sisulizer",
      description: "localization tools for translating and editing",
    },
    {
      subject: "Adobe LightRoom",
      description: "photo editing and management",
    },
    {
      subject: "VSCode",
      description: "web development",
    },
    {
      subject: "Git, GitHub",
      description: "code reviews, versioning",
    },
    {
      subject: "TestRail",
      description: "resolving tests & test cases",
    },
    {
      subject: "Figma",
      description: "preparing UX/UI designs for the Beey App",
    },
  ],
};

export const hobbies: Section = {
  sectionName: "When I’m not working, I am probably…",
  hobbies: [
    {
      subject: "… writing my book (or at least thinking about it, plotting).",
    },
    {
      subject: "… on a day trip somewhere in Bohemia, taking many pictures.",
    },
    {
      subject:
        "… learning to program in TypeScript and React, and working on my projects.",
    },
  ],
};
