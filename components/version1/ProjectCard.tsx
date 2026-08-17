import Image from 'next/image';

interface ProjectLink {
  label: string;
  url: string;
  isPrimary?: boolean;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  links: ProjectLink[];
  aosDelay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  links,
  aosDelay = 0,
}) => {
  return (
    <div
      className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div>
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="p-6 pt-0 flex gap-4">
        {links.map((link) => (
          <a
            key={link.url}
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
            className={
              link.isPrimary
                ? 'px-4 py-2 bg-primary/30 text-light border border-primary/40 rounded-lg hover:bg-primary/40 transition-colors text-sm font-medium'
                : 'px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium'
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
