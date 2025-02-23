const Projects = () => {
  return (
    <>
      <hr className="my-12" />
      <section className="flex flex-col gap-5 projects-list">
        <p className="text-5xl mb-3">Projects</p>
        <div className="flex gap-28">
          <div className="flex flex-col w-[300px] h-[449px] project">
            <img
              src="src\assets\images\workintech.png"
              alt=""
              className="w-[300px] h-[180]"
            />
            <p className="text-3xl mb-6 mt-5">Workintech</p>
            <p>
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="flex gap-5 mt-5">
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                react
              </button>
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                redux
              </button>
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                axios
              </button>
            </div>
            <div className="flex justify-between mt-2 project-link">
              <a href="#" className="underline">
                Github
              </a>
              <a href="#" className="underline">
                View Site
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[300px] h-[449px] project">
            <img
              src="src\assets\images\workintech.png"
              alt=""
              className="w-[300px] h-[180]"
            />
            <p className="text-3xl mb-6 mt-5">Workintech</p>
            <p>
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div class="flex gap-5 mt-5">
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                react
              </button>
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                redux
              </button>
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                axios
              </button>
            </div>
            <div className="flex justify-between mt-2 project-link">
              <a href="#" className="underline">
                Github
              </a>
              <a href="#" className="underline">
                View Site
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[300px] h-[449px] project">
            <img
              src="src\assets\images\workintech.png"
              alt=""
              className="w-[300px] h-[180]"
            />
            <p className="text-3xl mb-6 mt-5">Workintech</p>
            <p>
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div class="flex gap-5 mt-5">
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                react
              </button>
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                redux
              </button>
              <button className="border border-purple-500 text-purple-500 rounded px-4">
                axios
              </button>
            </div>
            <div className="flex justify-between mt-2 project-link">
              <a href="#" className="underline">
                Github
              </a>
              <a href="#" className="underline">
                View Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
