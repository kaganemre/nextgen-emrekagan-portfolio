import React from "react";

const Skills = () => {
  return (
    <section className="mt-20">
      <p className="text-5xl">Skills</p>
      <div className="flex justify-between skills-list mt-10">
        <div className="skill">
          <p className="text-3xl mb-6">JavaScript</p>
          <p className="text-xs break-words w-60">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="skill">
          <p className="text-3xl mb-6">React</p>
          <p className="text-xs break-words w-60">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="skill">
          <p className="text-3xl mb-6">ASP.NET Core</p>
          <p className="text-xs break-words w-60">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
