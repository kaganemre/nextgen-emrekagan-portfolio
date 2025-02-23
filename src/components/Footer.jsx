const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#F9F9F9] justify-center full-width h-[409px] mt-52">
      <section className="">
        <p className="w-[540] h-[106] text-4xl text-ninth-color font-semibold">
          Let’s work together on <br /> your next product.
        </p>
        <div className="flex justify-between links mt-16">
          <span>
            👉
            <a
              href="mailto:emrekgan@gmail.com"
              className="text-twelfth-color underline ml-2"
            >
              emrekgan@gmail.com
            </a>
          </span>
          <div className="flex gap-5 web-sites">
            <a
              href="https://yourpersonalblog.com"
              className="text-[#0A0A14] text-lg font-medium"
            >
              Personal Blog
            </a>
            <a
              href="https://github.com/yourusername"
              className="text-[#00AB6B] text-lg font-medium"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
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
