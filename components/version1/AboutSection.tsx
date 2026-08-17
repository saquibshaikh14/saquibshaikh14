import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center text-gray-100 relative before:content-[''] before:absolute before:inset-[10%] before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:blur-3xl before:opacity-10 py-20 md:py-0"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-md md:text-lg lg:text-xl mb-2 text-primary">
            Know More
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About Me
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="order-last md:order-first space-y-6"
            data-aos="fade-right"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m a Senior Software Engineer with a passion for building
              reliable, high-performance distributed systems. Over the past 4.8+
              years, I&apos;ve engineered cloud-native APIs, secure payment
              integrations, and high-throughput microservices across enterprise
              environments. Currently, I focus on developing serverless tool
              APIs, real-time agent workflows, and AI solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4 className="text-primary font-semibold text-xl mb-2">
                  Education
                </h4>
                <p className="text-gray-300">B.Tech</p>
                <p className="text-gray-400">
                  Computer Science &amp; Engineering
                </p>
              </div>
              <div
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h4 className="text-primary font-semibold text-xl mb-2">
                  Experience
                </h4>
                <p className="text-gray-300">4.8+ Years</p>
                <p className="text-gray-400">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div
            className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full border-4 border-gray-800/50 shadow-2xl overflow-hidden relative"
            data-aos="fade-left"
          >
            <Image
              src="/assets/b.jpg"
              alt="Mohammad Saquib - Senior Software Engineer"
              fill
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 384px"
              priority
              className="rounded-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
