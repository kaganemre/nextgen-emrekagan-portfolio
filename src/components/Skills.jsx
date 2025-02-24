import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section className="mt-40">
      <p className="text-5xl text-ninth-color font-semibold">{skills.title}</p>
      <div className="flex justify-between skills-list mt-10">
        {skills.list.map((skill, index) => (
          <div key={index} className="skill">
            <p className="text-3xl text-eighth-color font-medium mb-6">
              {skill.name}
            </p>
            <p className="text-xs text-tertiary-color break-words w-60">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
