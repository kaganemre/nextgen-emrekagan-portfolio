const AboutMe = () => {
  return (
    <section className="flex gap-10 mt-16 items-center justify-center">
      <div className="flex flex-col gap-10 hero-left">
        <div className="flex justify-start items-center gap-2">
          <hr
            className="separator-line text-eighth-color w-[5rem] border-t-1"
            style={{ borderColor: "#3730A3", margin: "0" }}
          />
          <span className="text-eighth-color font-medium">Emre Kağan Erde</span>
        </div>
        <p className="text-6xl">Creative thinker Minimalism lover</p>
        <p className="text-wrap">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>
        <div className="flex gap-2 about-buttons">
          <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out">
            Contact me
          </button>
          <button className="border border-blue-500 text-blue-500 rounded py-2 px-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            <i className="fab fa-github fa-xl mr-1 primary-color"></i> Github
          </button>
          <button className="border border-blue-500 text-blue-500 rounded py-2 px-4 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            <i class="fab fa-linkedin-in fa-xl mr-1"></i> LinkedIn
          </button>
        </div>
      </div>
      <img
        src="src\assets\images\emre-kagan.png"
        alt=""
        className="w-[476px] h-[375px] object-cover rounded-2xl"
      />
    </section>
  );
};

export default AboutMe;
