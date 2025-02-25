import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section className="mt-20 md:mt-40">
      <p className="text-5xl text-center md:text-start text-ninth-color dark:text-dark-twelfth-color font-semibold">
        {skills.title}
      </p>
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-0 md:items-start md:justify-between skills-list mt-10">
        {skills.list.map((skill, index) => (
          <div key={index} className="skill">
            <p className="text-3xl text-eighth-color dark:text-dark-seventh-color font-medium mb-6">
              {skill.name}
            </p>
            <p className="text-base md:text-xs text-tertiary-color dark:text-dark-sixth-color break-words w-60">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
