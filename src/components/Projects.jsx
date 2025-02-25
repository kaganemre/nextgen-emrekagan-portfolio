import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const Projects = () => {
  const { projects, projectsDetail } = useContext(PortfolioContext);

  return (
    <>
      <hr className="my-12 text-eleventh-color dark:border-dark-primary-color" />
      <section className="flex flex-col gap-5 projects-list">
        <p className="text-5xl text-ninth-color dark:text-dark-twelfth-color font-semibold mb-3">
          {projects.title}
        </p>
        <div className="flex mt-3 gap-[6.3rem]">
          {projects.list.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-[310px] h-[449px] project"
            >
              <img
                src={projectsDetail.images[index]}
                alt=""
                className="w-[300px] h-[180]"
              />
              <p className="text-3xl text-eighth-color dark:text-dark-thirteenth-color font-medium mb-6 mt-5">
                {project.title}
              </p>
              <p className="text-sm text-tertiary-color dark:text-dark-sixth-color w-[18.75rem]">
                {project.description}
              </p>
              <div className="flex gap-1 mt-7 mb-3">
                {projectsDetail.tech.map((t, i) => (
                  <button
                    key={i}
                    className="border border-primary-color dark:border-[#8F88FF] dark:text-[#8F88FF] dark:bg-[#383838] w-[68px] h-[30px] text-sm font-medium text-primary-color rounded px-4"
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-2 project-link">
                {projectsDetail.links.map((l, i) => (
                  <a
                    key={i}
                    href="#"
                    className="underline text-primary-color dark:text-dark-eighth-color text-base font-medium"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
