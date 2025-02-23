import workintech from "../assets/images/workintech.png";
import randomJokes from "../assets/images/random-jokes.png";
import journey from "../assets/images/journey.png";

const Projects = () => {
  return (
    <>
      <hr className="my-12 text-eleventh-color" />
      <section className="flex flex-col gap-5 projects-list">
        <p className="text-5xl text-ninth-color font-semibold mb-3">Projects</p>
        <div className="flex gap-28">
          <div className="flex flex-col w-[310px] h-[449px] project">
            <img src={workintech} alt="" className="w-[300px] h-[180]" />
            <p className="text-3xl text-eighth-color font-medium mb-6 mt-5">
              Workintech
            </p>
            <p className="text-sm text-tertiary-color w-[18.75rem]">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="flex gap-1 mt-7 mb-3">
              <button className="border border-primary-color w-[68px] h-[30px] text-sm font-medium text-primary-color rounded px-4">
                react
              </button>
              <button className="border border-primary-color text-sm font-medium text-primary-color rounded px-4">
                redux
              </button>
              <button className="border border-primary-color text-sm font-medium text-primary-color rounded px-4">
                axios
              </button>
            </div>
            <div className="flex justify-between mt-2 project-link">
              <a
                href="#"
                className="underline text-primary-color text-base font-medium"
              >
                Github
              </a>
              <a
                href="#"
                className="underline text-primary-color text-base font-medium"
              >
                View Site
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[310px] h-[449px] project">
            <img src={randomJokes} alt="" className="w-[300px] h-[180]" />
            <p className="text-3xl text-eighth-color font-medium mb-6 mt-5">
              Random Jokes
            </p>
            <p className="text-sm text-tertiary-color w-[18.75rem]">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="flex gap-1 mt-7 mb-3">
              <button className="border border-primary-color w-[68px] h-[30px] text-sm font-medium text-primary-color rounded px-4">
                react
              </button>
              <button className="border border-primary-color text-sm font-medium text-primary-color rounded px-4">
                redux
              </button>
              <button className="border border-primary-color text-sm font-medium text-primary-color rounded px-4">
                axios
              </button>
            </div>
            <div className="flex justify-between mt-2 project-link">
              <a
                href="#"
                className="underline text-primary-color text-base font-medium"
              >
                Github
              </a>
              <a
                href="#"
                className="underline text-primary-color text-base font-medium"
              >
                View Site
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[310px] h-[449px] project">
            <img src={journey} alt="" className="w-[300px] h-[180]" />
            <p className="text-3xl text-eighth-color font-medium mb-6 mt-5">
              Journey
            </p>
            <p className="text-sm text-tertiary-color w-[18.75rem]">
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="flex gap-1 mt-7 mb-3">
              <button className="border border-primary-color w-[68px] h-[30px] text-sm font-medium text-primary-color rounded px-4">
                react
              </button>
              <button className="border border-primary-color text-sm font-medium text-primary-color rounded px-4">
                redux
              </button>
              <button className="border border-primary-color text-sm font-medium text-primary-color rounded px-4">
                axios
              </button>
            </div>
            <div className="flex justify-between mt-2 project-link">
              <a
                href="#"
                className="underline text-primary-color text-base font-medium"
              >
                Github
              </a>
              <a
                href="#"
                className="underline text-primary-color text-base font-medium"
              >
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
