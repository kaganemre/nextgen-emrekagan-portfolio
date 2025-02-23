const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-end mt-6">
        <label for="toggle-dark-mode" className="mr-2 text-gray-700">
          DARK MODE
        </label>
        <input
          type="checkbox"
          id="toggle-dark-mode"
          className="toggle-checkbox hidden"
        />
        <div className="toggle-slot">
          <div className="w-[60px] h-[22px] flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out">
            <div className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
          </div>
        </div>
        <a href="#" className="ml-4 text-blue-500">
          TÜRKÇE'YE GEÇ
        </a>
      </div>
      <nav className="flex justify-between mt-5">
        <span className="bg-[#EEEBFF] text-[#3730A3] rounded-full h-[50px] w-[50px] flex items-center justify-center transform rotate-[29.34deg]">
          E
        </span>
        <nav className="flex items-center space-x-4 gap-10">
          <a href="#skills" className="text-gray-800 hover:text-gray-600">
            Skills
          </a>
          <a href="#projects" className="text-gray-800 hover:text-gray-600">
            Projects
          </a>
          <button className="border border-blue-500 text-blue-500 rounded py-2 px-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            Contact
          </button>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
