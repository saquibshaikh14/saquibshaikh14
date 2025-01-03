/* eslint-disable @typescript-eslint/no-unused-vars */

interface ProjectCardProps {
    title: string;
    description?: string;
    imageSrc?: string | null;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, ...rest }) => {
    return (
        <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700" data-aos="fade-up">
            <img src="./vscode-extension.png" alt="VS Code Extension" className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
                {description && <p className="text-gray-300 mb-4">{description}</p>}
                <div className="flex gap-4">
                    <a href="https://github.com/saquibshaikh14/vscode-add-signature-extension"
                        className="px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors">
                        GitHub
                    </a>
                    <a href="https://marketplace.visualstudio.com/items?itemName=saquibshaikh.vscode-add-signature"
                        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        Marketplace
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;