import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { PortfolioContext } from "./contexts/PortfolioContext";

function App() {
  const { darkMode } = useContext(PortfolioContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="container-lg dark:bg-[#252128]">
      <article className="container w-[1300px] mx-auto dark:bg-[#252128]">
        <Header />
        <AboutMe />
        <Skills />
        <Profile />
        <Projects />
      </article>
      <Footer />
    </main>
  );
}

export default App;
