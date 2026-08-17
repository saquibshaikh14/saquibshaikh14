import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'VS Code Extension',
    description:
      'A custom-built VS Code extension designed to enhance productivity by enabling users to add customizable signatures to files effortlessly. The extension supports various file types and offers a seamless way to personalize your codebase with pre-configured templates or manual inputs.',
    imageSrc: '/vscode-extension.png',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/saquibshaikh14/vscode-add-signature-extension',
        isPrimary: true,
      },
      {
        label: 'Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=saquibshaikh.vscode-add-signature',
      },
    ],
    aosDelay: 0,
  },
  {
    title: 'Node.js 2FA Implementation',
    description:
      'A practical project demonstrating how to integrate Two-Factor Authentication (2FA) in a Node.js application using Speakeasy and Google Authenticator. It emphasizes secure login mechanisms and provides a step-by-step workflow to generate and verify OTPs.',
    imageSrc: '/2fa-authentication.jpg',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/saquibshaikh14/nodejs-2fa-implementation',
        isPrimary: true,
      },
    ],
    aosDelay: 200,
  },
  {
    title: 'Offline Notes',
    description:
      'A private, offline-first notes workspace that stores your writing locally in the browser. It features a clean, distraction-free environment for drafting and project writing, storing all your notes locally in your browser storage without any server sync.',
    imageSrc: '/offline-notes.png',
    links: [
      {
        label: 'Live Link',
        url: 'https://notes.msaquib.com',
        isPrimary: true,
      },
    ],
    aosDelay: 400,
  },
];

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex justify-center items-center text-gray-100 relative before:content-[''] before:absolute before:inset-[10%] before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:blur-3xl before:opacity-10 py-20 md:py-0"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-md mb-2 text-primary md:text-lg lg:text-xl">Browse My</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Portfolio</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              links={project.links}
              aosDelay={project.aosDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
