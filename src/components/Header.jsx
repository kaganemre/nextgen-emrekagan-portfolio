const Header = () => {
  return (
    <header className="mt-10">
      <div className="flex items-center justify-end mt-6 mr-3">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          className="toggle-checkbox hidden"
        />
        <div className="toggle-slot">
          <div className="w-[48px] h-[22px] flex items-center bg-secondary-color rounded-full p-1 duration-300 ease-in-out">
            <div className="toggle-dot w-3.5 h-3.5 bg-fifth-color rounded-full shadow-md transform translate-x-[25px] duration-300 ease-in-out"></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <label
            for="toggle-dark-mode"
            className="text-tertiary-color text-sm font-semibold mr-2 ml-2 text-gray-700"
          >
            DARK MODE <span className="ml-2">|</span>
          </label>
        </div>
        <a
          href="#"
          className="text-secondary-color text-sm font-bold ml-4 text-blue-500"
        >
          TÜRKÇE<span className="text-tertiary-color">'YE GEÇ</span>
        </a>
      </div>

      <nav className="flex justify-between mt-8">
        <span className="bg-sixth-color text-lg text-seventh-color font-bold rounded-full h-[62px] w-[63.68px] flex items-center justify-center transform rotate-[29.34deg]">
          E
        </span>
        <nav className="flex items-center text-tertiary-color font-[450] text-lg gap-10">
          <a href="#skills" className="hover:text-gray-600 mr-4">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-600 mr-2">
            Projects
          </a>
          <button className="border border-primary-color text-primary-color rounded py-2 px-6 hover:bg-primary-color hover:text-white transition duration-300 ease-in-out">
            Contact
          </button>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
