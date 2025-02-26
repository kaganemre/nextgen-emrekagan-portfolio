import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const Footer = () => {
  const { collaboration } = useContext(PortfolioContext);

  return (
    <footer className="flex flex-col px-[100px] md:px-[297px] bg-[#F9F9F9] dark:bg-[#141414] justify-center h-[409px] mt-52">
      <section className="flex flex-col items-center text-center md:block md:text-start">
        <p className="w-[400px] h-[106px] text-4xl text-ninth-color dark:text-dark-twelfth-color font-semibold whitespace-pre-line">
          {collaboration}
        </p>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between links mt-16">
          <span>
            👉
            <a
              href="mailto:emrekgan@gmail.com"
              className="text-twelfth-color dark:text-dark-seventh-color underline ml-2"
            >
              emrekgan@gmail.com
            </a>
          </span>
          <div className="flex gap-5 web-sites">
            <a
              href="#"
              className="text-[#0A0A14] dark:text-dark-eighth-color text-lg font-medium"
            >
              Personal Blog
            </a>
            <a
              href="https://github.com/kaganemre"
              className="text-[#00AB6B] text-lg font-medium"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/emrekaganerde"
              className="text-[#0077B5] text-lg font-medium"
            >
              Linkedin
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
