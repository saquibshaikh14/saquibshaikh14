import Image from 'next/image';

interface ExperienceCardProps {
  skillIcon: string;
  skillName: string;
  skillRating?: number;
  shadow?: string;
  [key: string]: unknown;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  skillIcon,
  skillName,
  shadow = 'shadow-gray-700',
  className = '',
}) => {
  return (
    <div
      className={`bg-gray-800/50 rounded-lg border border-gray-700 p-6 ${shadow} shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <div className="w-16 h-16 relative mb-4 flex items-center justify-center">
        <Image
          src={skillIcon}
          alt={skillName}
          width={64}
          height={64}
          className="object-contain"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold text-center">{skillName}</h3>
    </div>
  );
};

export default ExperienceCard;
