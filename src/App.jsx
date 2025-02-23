import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container mx-auto" style={{ width: "1440px" }}>
      <article className="container mx-auto" style={{ width: "1300px" }}>
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
