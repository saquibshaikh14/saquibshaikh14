import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
    const [skills] = useState([
        { name: 'HTML 5', icon: 'https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png', star: 4, shadow: 'shadow-orange-500' },
        { name: 'CSS 3', icon: 'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png', star: 4, shadow: 'shadow-blue-500' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png', star: 4, shadow: 'shadow-yellow-500' },
        { name: 'React', icon: 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png', star: 4, shadow: 'shadow-blue-300' },
        { name: 'Node.js', icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png', star: 4, shadow: 'shadow-green-500' },
        { name: 'Express', icon: 'https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png', stars: 4, shadow: 'shadow-gray-100' },
        { name: 'MongoDB', icon: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png', stars: 3, shadow: 'shadow-green-700' },
        { name: 'React Native', icon: 'https://img.icons8.com/?size=100&id=123603&format=png', stars: 2, shadow: 'shadow-blue-200' },
    ]);

    return (
        <section id="experience" className="min-h-screen flex justify-center items-center text-gray-100 relative nter before:content-[''] before:absolute before:inset-[10%] before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-full before:blur-3xl before:opacity-10 py-20 md:py-0">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-md mb-2 text-primary md:text-lg lg:text-xl">Explore My</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Experience</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) =>
                        <ExperienceCard skillIcon={skill.icon} skillName={skill.name} skillRating={skill.star} shadow={skill.shadow} key={index} data-aos="fade-up" data-aos-delay={index * 100} />
                    )}
                </div>
            </div>
        </section>
    )
};

export default ExperienceSection;