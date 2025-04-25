import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Hackathon {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
  project: string;
  achievement?: string;
  technologies: string[];
  image?: string;
}

const hackathonsData: Hackathon[] = [
  {
    id: 1,
    name: "HackTech 2023",
    date: "March 2023",
    location: "Virtual",
    description:
      "A 48-hour hackathon focused on creating innovative solutions for environmental challenges.",
    project:
      "EcoTrack - An app that helps users track and reduce their carbon footprint.",
    achievement: "2nd Place Overall",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
  {
    id: 2,
    name: "CodeFest 2022",
    date: "November 2022",
    location: "University Tech Hub",
    description:
      "A university-wide hackathon focused on creating solutions for campus problems.",
    project:
      "StudyBuddy - A platform to find study partners and form study groups.",
    achievement: "Best UI/UX Design",
    technologies: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
  },
  {
    id: 3,
    name: "HealthHack 2022",
    date: "July 2022",
    location: "Medical Innovation Center",
    description:
      "A hackathon focused on creating innovative solutions for healthcare challenges.",
    project:
      "MediRemind - A medication reminder and tracking app for elderly patients.",
    technologies: ["Flutter", "Firebase", "TensorFlow Lite"],
    image:
      "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?w=600&q=80",
  },
];

export default function Hackathons() {
  return (
    <div className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
          Hackathons
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Problem-solving under pressure and collaborative innovation
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hackathonsData.map((hackathon) => (
            <Card
              key={hackathon.id}
              className="overflow-hidden border border-gray-200 shadow-md flex flex-col h-full"
            >
              {hackathon.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={hackathon.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{hackathon.name}</CardTitle>
                  {hackathon.achievement && (
                    <Badge className="bg-yellow-500">
                      {hackathon.achievement}
                    </Badge>
                  )}
                </div>
                <CardDescription>
                  <div className="flex flex-col gap-1">
                    <span>{hackathon.date}</span>
                    <span>{hackathon.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{hackathon.description}</p>
                <div className="mb-4">
                  <strong>Project:</strong> {hackathon.project}
                </div>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
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
