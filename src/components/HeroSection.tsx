import github_png from "../assets/github.png";
import linkedin_png from "../assets/linkedin.png";

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center text-gray-100 relative">
            <div className="container px-4 mx-auto">
                <div className="text-center space-y-8 max-w-4xl mx-auto">

                    <div data-aos="fade-up" className="space-y-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-600 animate-gradient">Saquib</span></h1>
                        <p className="text-light/80 text-xl md:text-2xl font-medium">Full-Stack MERN Developer</p>
                        <p className="text-lg text-light/60 max-w-3xl mx-auto">Passionate Full-Stack Developer with 3+ years of experience in building web applications using React.js and Node.js, along with payment gateway integrations for e-commerce solutions.</p>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
                        <a href="#portfolio" className="min-w-40 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                            Portfolio
                        </a>
                        <a href="#contact" className="min-w-40 border-2 border-light/40 px-8 py-3 text-light font-semibold rounded-full hover:border-primary transition-all duration-300 transform hover:scale-105">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center items-center gap-6 mt-8" data-aos="fade-up" data-aos-delay="400">
                        <a href="https://github.com/saquibshaikh14" target="_blank" className="p-2 rounded-full bg-light/20 hover:bg-light/35 transition-all duration-300 transform hover:scale-105">
                            <img src={github_png} alt="github-icon" className="h-10 w-10" />
                        </a>
                        <a href="https://linkedin.com/in/saquibshaikh14" target="_blank" className="p-2 rounded-full bg-light/20 hover:bg-light/35 transition-all duration-300 transform hover:scale-105">
                            <img src={linkedin_png} alt="github-icon" className="h-10 w-10" />
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 !mt-12 text-light/60" data-aos="fade-up" data-aos-delay="500" data-aos-offset="10">
                        <span className="rounded-full bg-light/10 px-4 py-2">Node</span>
                        <span className="rounded-full bg-light/10 px-4 py-2">Express</span>
                        <span className="rounded-full bg-light/10 px-4 py-2">React</span>
                        <span className="rounded-full bg-light/10 px-4 py-2">Redux</span>
                        <span className="rounded-full bg-light/10 px-4 py-2">MongoDB</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection;
