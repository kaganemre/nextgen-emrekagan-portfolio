import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";

const Header = () => {
  const { menu, language, handleLanguage, darkMode, setDarkMode } =
    useContext(PortfolioContext);

  return (
    <header className="">
      <div className="flex items-center justify-end mr-3 gap-x-4 h-20">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          className="toggle-checkbox hidden"
        />
        <div
          className="toggle-slot cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div
            className={`w-[48px] h-[22px] flex items-center rounded-full p-1 duration-300 ease-in-out
                    bg-secondary-color dark:bg-[#3A3A3A]`}
          >
            <div
              className={`toggle-dot w-3.5 h-3.5 rounded-full transform duration-300 ease-in-out 
                       shadow-md ${
                         darkMode
                           ? "translate-x-0 custom-shadow"
                           : "translate-x-[25px] shadow-none bg-[#FFE86E]"
                       }`}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <label
            htmlFor="toggle-dark-mode"
            className="text-tertiary-color dark:text-[#D9D9D9] text-sm font-semibold text-gray-700"
          >
            <span className="inline-block w-[110px] text-center">
              {darkMode
                ? `${language === "en" ? "DARK MODE" : "KARANLIK MOD"}`
                : `${language === "en" ? "LIGHT MODE" : "AYDINLIK MOD"}`}
            </span>
            <span className="ml-2">|</span>
          </label>
        </div>

        <a
          href="#"
          className="text-secondary-color mr-5 dark:text-dark-primary-color text-sm font-bold w-[120px] text-center whitespace-nowrap"
          onClick={handleLanguage}
        >
          {language === "en" ? (
            <span>
              TÜRKÇE
              <span className="text-tertiary-color dark:text-dark-secondary-color">
                'YE GEÇ
              </span>
            </span>
          ) : (
            <span>
              SWITCH
              <span className="text-tertiary-color dark:text-dark-secondary-color">
                {" "}
                TO ENGLISH
              </span>
            </span>
          )}
        </a>
      </div>

      <nav className="flex justify-between mt-8">
        <span className="bg-sixth-color dark:bg-dark-fourth-color text-lg text-seventh-color dark:text-dark-tertiary-color font-bold rounded-full h-[62px] w-[63.68px] flex items-center justify-center transform rotate-[29.34deg]">
          E
        </span>
        <nav className="flex items-center text-tertiary-color dark:text-dark-fifth-color font-[450] text-lg gap-10">
          <a href="#skills" className="hover:text-gray-600 mr-4">
            {menu.skills}
          </a>
          <a href="#projects" className="hover:text-gray-600 mr-2">
            {menu.projects}
          </a>
          <a
            href="mailto:emrekgan@gmail.com"
            className="border border-primary-color dark:bg-dark-sixth-color text-primary-color rounded-md py-3 px-6 hover:bg-primary-color hover:text-white hover:dark:text-secondary-color transition duration-300 ease-in-out min-w-[125px] py-3 text-center block"
          >
            {menu.contact}
          </a>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
