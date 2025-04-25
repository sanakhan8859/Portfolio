import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface TrainingItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
  logo?: string;
}

const trainingData: TrainingItem[] = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Software Development Intern",
    duration: "June 2023 - August 2023",
    description:
      "Worked on developing and maintaining web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
    skills: ["React", "Node.js", "TypeScript", "Git"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=TechSolutions",
  },
  {
    id: 2,
    company: "Data Insights Co.",
    position: "Data Science Intern",
    duration: "May 2022 - July 2022",
    description:
      "Assisted in data analysis and visualization projects. Developed machine learning models to predict customer behavior and improve business decisions.",
    skills: ["Python", "Pandas", "Scikit-learn", "Tableau"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=DataInsights",
  },
];

export default function SummerTraining() {
  return (
    <div className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
          Summer Training
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Professional experience gained through internships
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {trainingData.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border border-gray-200 shadow-md"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {item.logo && (
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <CardTitle>{item.company}</CardTitle>
                  <CardDescription>{item.position}</CardDescription>
                  <p className="text-sm text-muted-foreground">
                    {item.duration}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
