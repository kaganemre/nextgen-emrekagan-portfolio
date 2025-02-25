import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useContext } from "react";
import { PortfolioContext } from "./contexts/PortfolioContext";

function App() {
  const { darkMode } = useContext(PortfolioContext);

  return (
    <main
      className={`container mx-auto ${darkMode ? "dark" : ""}`}
      style={{ maxWidth: "1440px" }}
    >
      <article
        className="mx-auto dark:bg-[#252128]"
        style={{ width: "1300px" }}
      >
        <Header />
        <AboutMe />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </article>
    </main>
  );
}

export default App;
