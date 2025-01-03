
const ContactSection = () => {
    return (
        <section id="contact" className="min-h-screen flex justify-center items-center text-gray-100 relative nter before:content-[''] before:absolute before:inset-[10%] before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:blur-3xl before:opacity-10 py-20 md:py-0">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-md mb-2 text-primary md:text-lg lg:text-xl">Get in Touch</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact Me</h1>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8" data-aos="fade-up">
                        <a href="mailto:contact@msaquib.com" className="flex justify-center items-center gap-4 px-7 py-4 bg-gray-800/50 rounded-full border border-gray-600 hover:border-primary transition-colors">
                            <img src="https://img.icons8.com/?size=100&id=eKlyMs0XteXZ&format=png" alt="Email-icon" className="w-6 h-6" />
                            <span>contact@msaquib.com</span>
                        </a>
                        <a href="https://linkedin.com/in/saquibshaikh14" className="flex justify-center items-center gap-4 px-7 py-4 bg-gray-800/50 rounded-full border border-gray-600 hover:border-primary transition-colors">
                            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn-icon" className="w-6 h-6" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;