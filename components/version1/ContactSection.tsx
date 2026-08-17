import Image from 'next/image';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center text-gray-100 relative before:content-[''] before:absolute before:inset-[10%] before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:blur-3xl before:opacity-10 py-20 md:py-0"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-md mb-2 text-primary md:text-lg lg:text-xl">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact Me</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
            <a
              href="mailto:saquibmd82@gmail.com"
              className="flex justify-center items-center gap-4 px-7 py-4 bg-gray-800/50 rounded-full border border-gray-600 hover:border-primary transition-colors"
            >
              <Image
                src="https://img.icons8.com/?size=100&id=eKlyMs0XteXZ&format=png"
                alt="Email icon"
                width={24}
                height={24}
                className="w-6 h-6"
                unoptimized
              />
              <span>saquibmd82@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/saquibshaikh14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-4 px-7 py-4 bg-gray-800/50 rounded-full border border-gray-600 hover:border-primary transition-colors"
            >
              <Image
                src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png"
                alt="LinkedIn icon"
                width={24}
                height={24}
                className="w-6 h-6"
                unoptimized
              />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/saquibshaikh14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-4 px-7 py-4 bg-gray-800/50 rounded-full border border-gray-600 hover:border-primary transition-colors"
            >
              <Image
                src="/assets/github.png"
                alt="GitHub icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
