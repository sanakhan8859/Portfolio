import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Machine Learning",
  "UI/UX Design",
];

export default function Hero() {
  const [typedSkill, setTypedSkill] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedSkill(currentSkill.substring(0, typedSkill.length + 1));

          if (typedSkill === currentSkill) {
            setIsDeleting(true);
            setTimeout(() => {}, 1000); // Pause before deleting
          }
        } else {
          setTypedSkill(currentSkill.substring(0, typedSkill.length - 1));

          if (typedSkill === "") {
            setIsDeleting(false);
            setCurrentSkillIndex((currentSkillIndex + 1) % skills.length);
          }
        }
      },
      isDeleting ? 50 : 150,
    );

    return () => clearTimeout(timeout);
  }, [typedSkill, currentSkillIndex, isDeleting]);

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-primary">Amber Afreen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Computer Science Student at{" "}
              <span className="text-primary">Lovely Professional University</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Passionate about building innovative solutions and exploring new
              technologies. Currently focused on web development and machine
              learning applications.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-lg font-medium">Skilled in:</span>
              <span className="text-primary font-bold min-w-40 h-7">
                {typedSkill}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img
                src="/ProfilePicture.jpg"
                alt="Amber Afreen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
