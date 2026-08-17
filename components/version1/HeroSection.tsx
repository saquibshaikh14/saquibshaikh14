import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center text-gray-100 relative pt-16 md:pt-0">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div data-aos="fade-up" className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I&apos;m{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-600 animate-gradient">
                Mohammad Saquib
              </span>
            </h1>
            <p className="text-light/80 text-xl md:text-2xl font-medium">
              Senior Software Engineer <span className="text-primary/80 font-normal">| Full Stack</span>
            </p>
            <p className="text-lg text-light/60 max-w-3xl mx-auto">
              Senior Software Engineer with 4.8+ years of experience engineering scalable web applications, microservices, and AI solutions using Node.js, TypeScript, React, cloud services, and payment integrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
            <a
              href="#portfolio"
              className="min-w-40 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="min-w-40 border-2 border-light/40 px-8 py-3 text-light font-semibold rounded-full hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8" data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://github.com/saquibshaikh14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-light/20 hover:bg-light/35 transition-all duration-300 transform hover:scale-105"
              aria-label="Mohammad Saquib GitHub Profile"
            >
              <Image src="/assets/github.png" alt="GitHub icon" width={40} height={40} className="h-10 w-10" />
            </a>
            <a
              href="https://linkedin.com/in/saquibshaikh14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-light/20 hover:bg-light/35 transition-all duration-300 transform hover:scale-105"
              aria-label="Mohammad Saquib LinkedIn Profile"
            >
              <Image src="/assets/linkedin.png" alt="LinkedIn icon" width={40} height={40} className="h-10 w-10" />
            </a>
          </div>

          <div
            className="flex flex-wrap justify-center gap-3 !mt-12 text-light/60"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="10"
          >
            <span className="rounded-full bg-light/10 px-4 py-2">Node.js</span>
            <span className="rounded-full bg-light/10 px-4 py-2">TypeScript</span>
            <span className="rounded-full bg-light/10 px-4 py-2">React</span>
            <span className="rounded-full bg-light/10 px-4 py-2">AI Solutions</span>
            <span className="rounded-full bg-light/10 px-4 py-2">Express</span>
            <span className="rounded-full bg-light/10 px-4 py-2">Google Cloud</span>
            <span className="rounded-full bg-light/10 px-4 py-2">AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
