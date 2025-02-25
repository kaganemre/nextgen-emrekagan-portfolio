import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const AboutMe = () => {
  const { aboutMe } = useContext(PortfolioContext);

  return (
    <section className="flex gap-10 mt-16 items-center justify-center">
      <div className="flex flex-col gap-10 hero-left">
        <div className="flex justify-start items-center gap-2">
          <hr
            className="separator-line text-eighth-color dark:border-dark-primary-color w-[5rem] border-t-1"
            style={{ margin: "0" }}
          />
          <span className="text-eighth-color dark:text-dark-seventh-color font-medium">
            Emre Kağan Erde
          </span>
        </div>
        <p className="text-6xl text-ninth-color dark:text-dark-twelfth-color font-bold">
          {aboutMe.header}
        </p>
        <p className="text-wrap text-tertiary-color dark:text-dark-sixth-color w-[553px] text-lg">
          {aboutMe.text}
        </p>
        <div className="flex gap-2 about-buttons">
          <button className="bg-primary-color dark:bg-dark-eighth-color text-white dark:text-dark-ninth-color rounded py-2 px-6 hover:bg-secondary-color  transition duration-300 ease-in-out">
            Contact
          </button>
          <button className="border border-primary-color dark:bg-dark-tenth-color dark:border-dark-eleventh-color text-primary-color dark:text-dark-eleventh-color rounded py-2 px-4 hover:bg-primary-color hover:text-white transition duration-300 ease-in-out">
            <i className="fab fa-github fa-xl mr-1 dark:text-dark-primary-color hover:secondary-color"></i>
            Github
          </button>
          <button className="border border-primary-color dark:bg-dark-tenth-color dark:border-dark-eleventh-color text-primary-color dark:text-dark-eleventh-color rounded py-2 px-4 hover:bg-primary-color hover:text-white transition duration-300 ease-in-out">
            <i class="fab fa-linkedin-in fa-xl mr-1 dark:text-dark-primary-color hover:secondary-color"></i>
            LinkedIn
          </button>
        </div>
      </div>
      <img
        src="/images/emre-kagan.png"
        alt=""
        className="w-[476px] h-[375px] object-cover rounded-2xl"
      />
    </section>
  );
};

export default AboutMe;
