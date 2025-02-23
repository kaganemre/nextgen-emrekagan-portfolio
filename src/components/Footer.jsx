const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#F9F9F9] justify-center full-width h-[409px] mt-52">
      <section className="">
        <p className="w-[540] h-[106] text-4xl font-semibold">
          Let’s work together on <br /> your next product.
        </p>
        <div className="flex justify-between links mt-16">
          <span>
            👉
            <a
              href="mailto:emrekgan@gmail.com"
              className="text-red-500 underline"
            >
              emrekgan@gmail.com
            </a>
          </span>
          <div className="flex gap-5 web-sites">
            <a href="https://yourpersonalblog.com">Personal Blog</a>
            <a href="https://github.com/yourusername">Github</a>
            <a href="https://linkedin.com/in/yourusername">Linkedin</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
