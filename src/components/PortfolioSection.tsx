
const PortfolioSection = () => {
    return (
        <section id="portfolio" className="min-h-screen flex justify-center items-center text-gray-100 relative nter before:content-[''] before:absolute before:inset-[10%] before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:blur-3xl before:opacity-10 py-20 md:py-0">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-md mb-2 text-primary md:text-lg lg:text-xl">Browse My</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Portfolio</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700" data-aos="fade-up">
                        <img src="./vscode-extension.png" alt="VS Code Add Signature Extension" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-primary">VS Code Extension</h3>
                            <p className="text-gray-300 mb-4 min-h-40">
                                A custom-built VS Code extension designed to enhance productivity by enabling users to add customizable signatures to files effortlessly. The extension supports various file types and offers a seamless way to personalize your codebase with pre-configured templates or manual inputs.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://github.com/saquibshaikh14/vscode-add-signature-extension"
                                    className="px-4 py-2 bg-primary/40 text-light rounded-lg hover:bg-primary/30 transition-colors">
                                    GitHub
                                </a>
                                <a href="https://marketplace.visualstudio.com/items?itemName=saquibshaikh.vscode-add-signature"
                                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                                    Marketplace
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700" data-aos="fade-up" data-aos-delay="200">
                        <img src="./2fa-authentication.jpg" alt="Node.js 2FA Implementation" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-primary">Node.js 2FA Implementation</h3>
                            <p className="text-gray-300 mb-4 md:min-h-40">
                                A practical project demonstrating how to integrate Two-Factor Authentication (2FA) in a Node.js application using <strong>Speakeasy</strong> and <strong>Google Authenticator</strong>. It emphasizes secure login mechanisms and provides a step-by-step workflow to generate and verify OTPs.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://github.com/saquibshaikh14/nodejs-2fa-implementation"
                                    className="px-4 py-2 bg-primary/40 text-light rounded-lg hover:bg-primary/30 transition-colors">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PortfolioSection;