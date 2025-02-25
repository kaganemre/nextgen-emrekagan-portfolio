import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const storedLanguage = localStorage.getItem("language") || "en";
  const storedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

  const [language, setLanguage] = useState(storedLanguage);
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    axios
      .get("/portfolio.json")
      .then((response) => {
        setPortfolioData(response.data);
      })
      .catch((error) => {
        console.error("Hata oluştu:", error.message);
        toast.error(
          "Veriler alınırken bir hata oluştu. Lütfen tekrar deneyin."
        );
      });
  }, []);

  const handleLanguage = (e) => {
    e.preventDefault();
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  if (!portfolioData) {
    return;
  }

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
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
