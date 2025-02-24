import { createContext, useState } from "react";
import portfolioData from "../portfolio.json";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const handleLanguage = (e) => {
    e.preventDefault();
    setLanguage((prevLang) => (prevLang === "en" ? "tr" : "en"));
  };

  const data = {
    menu: portfolioData.menu[language],
    aboutMe: portfolioData.aboutMe[language],
    skills: portfolioData.skills[language],
    profile: portfolioData.profile[language],
    projects: portfolioData.projects[language],
    projectsDetail: portfolioData.projectsDetail,
    collaboration: portfolioData.collaboration[language],
  };

  return (
    <PortfolioContext.Provider
      value={{
        menu: data.menu,
        aboutMe: data.aboutMe,
        skills: data.skills,
        profile: data.profile,
        projects: data.projects,
        projectsDetail: data.projectsDetail,
        collaboration: data.collaboration,
        language,
        handleLanguage,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
