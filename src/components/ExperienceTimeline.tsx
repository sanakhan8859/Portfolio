import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  logo?: string;
  type: "internship" | "work" | "hackathon";
}

const timelineData: TimelineItem[] = [
  /*{
    id: 1,
    title: "Software Development Intern",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "June 2023 - August 2023",
    description: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with senior developers to implement new features and fix bugs",
      "Participated in code reviews and agile development processes",
    ],
    skills: ["React", "Node.js", "TypeScript", "Git"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=TechSolutions",
    type: "internship",
  },*/
  {
    id: 2,
    title: "HackCBS 2022 Participant",
    company: "HackCBS",
    location: "DTU Campus",
    period: "March 2022",
    description: [
      "Developed EcoTrack, an app that helps users track and reduce their carbon footprint",
      "Won 2nd runner up overall among 120+ teams",
      "Implemented real-time data visualization using React Native and Firebase",
    ],
    skills: ["React Native", "Firebase", "Google Maps API"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=HackTech",
    type: "hackathon",
  },
  /*{
    id: 3,
    title: "Data Science Intern",
    company: "Data Insights Co.",
    location: "Boston, MA (Remote)",
    period: "May 2022 - July 2022",
    description: [
      "Assisted in data analysis and visualization projects",
      "Developed machine learning models to predict customer behavior",
      "Created dashboards to visualize key business metrics",
    ],
    skills: ["Python", "Pandas", "Scikit-learn", "Tableau"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=DataInsights",
    type: "internship",
  },*/
  {
    id: 4,
    title: "CodeFest 2022 Participant",
    company: "University Tech Hub",
    location: "University Campus",
    period: "November 2023",
    description: [
      "Developed StudyBuddy, a platform to find study partners and form study groups",
      "Won Best UI/UX Design award",
      "Implemented real-time chat functionality and user matching algorithm",
    ],
    skills: ["React", "Node.js", "MongoDB"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=CodeFest",
    type: "hackathon",
  },
  /*{
    id: 5,
    title: "Web Development Teaching Assistant",
    company: "Tech University",
    location: "Tech City",
    period: "September 2021 - May 2022",
    description: [
      "Assisted professor in teaching web development fundamentals to 60+ students",
      "Held weekly office hours to help students with assignments and projects",
      "Graded assignments and provided detailed feedback",
    ],
    skills: ["HTML/CSS", "JavaScript", "Teaching", "Communication"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=TechUniversity",
    type: "work",
  },*/
];

export default function ExperienceTimeline() {
  // Sort timeline items by date (most recent first)
  const sortedTimeline = [...timelineData].sort((a, b) => {
    // Extract year from period string for rough sorting
    const aYear = parseInt(a.period.split(" ").pop() || "0");
    const bYear = parseInt(b.period.split(" ").pop() || "0");
    return bYear - aYear;
  });

  return (
    <div className="py-12 bg-gray-50" id="experience">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
          Experience Timeline
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          My professional journey and key milestones
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>

          <div className="relative z-10">
            {sortedTimeline.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row gap-4 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                  <div className="w-full max-w-md">
                    <Card className="border border-gray-200 shadow-md overflow-hidden">
                      <div className="flex items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
                        {item.logo && (
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center border border-gray-200">
                            <img
                              src={item.logo}
                              alt={`${item.company} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="text-sm text-gray-600">
                            {item.company}
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-500">
                            {item.location}
                          </span>
                          <Badge variant="outline">{item.period}</Badge>
                        </div>
                        <ul className="list-disc pl-5 mb-4 space-y-1 text-sm">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 md:left-0 top-6 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md"></div>

                  {/* Only show on mobile */}
                  <div className="md:hidden w-full max-w-md">
                    <div className="h-12"></div> {/* Spacer */}
                  </div>

                  {/* Only show on desktop */}
                  <div className="hidden md:block w-full max-w-md">
                    <div className="h-12 flex items-center">
                      <Badge
                        className={`
                        ${item.type === "internship" ? "bg-blue-500" : ""}
                        ${item.type === "hackathon" ? "bg-purple-500" : ""}
                        ${item.type === "work" ? "bg-green-500" : ""}
                      `}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
