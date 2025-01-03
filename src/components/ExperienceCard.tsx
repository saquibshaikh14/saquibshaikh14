/* eslint-disable @typescript-eslint/no-unused-vars */

interface ExperienceCardProps {
    skillIcon: string;
    skillName: string;
    skillRating?: number;
    shadow?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ skillIcon, skillName, skillRating, shadow, ...rest }) => {

    return (
        <div className={`bg-gray-800/50 rounded-lg border border-gray-700 p-6 ${shadow} shadow-sm`} {...rest}>
            <img src={skillIcon} alt={skillName} className="mx-auto w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-center mb-2">{skillName}</h3>
        </div>
    )
};

export default ExperienceCard;