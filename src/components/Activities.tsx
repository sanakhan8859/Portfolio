import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Activity {
  id: number;
  title: string;
  organization: string;
  role?: string;
  period: string;
  description: string;
  skills?: string[];
  image?: string;
}

const activitiesData: Activity[] = [
  {
    id: 1,
    title: "Computer Science Club",
    organization: "GDSC LPU",
    role: "Technical Lead",
    period: "2023",
    description:
      "Organize weekly coding workshops, tech talks, and networking events. Manage a team of 5 officers and coordinate with industry partners for sponsorships.",
    skills: ["Leadership", "Event Planning", "Public Speaking"],
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
  },
  {
    id: 2,
    title: "Peer Tutoring Program",
    organization: "Computer Science Department",
    role: "Tutor",
    period: "2023",
    description:
      "Provide one-on-one tutoring sessions for undergraduate students in data structures, algorithms, and web development courses.",
    skills: ["Teaching", "Communication", "Problem Solving"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    organization: "Various Projects",
    period: "2024",
    description:
      "Active contributor to several open-source projects including React libraries and Python tools. Submitted bug fixes and implemented new features.",
    skills: ["Collaboration", "Code Review", "Documentation"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    id: 4,
    title: "Tech Blog Writer",
    organization: "Medium & Dev.to",
    period: "2023",
    description:
      "Write technical articles and tutorials on web development, machine learning, and computer science concepts. Reached over 50,000 readers.",
    skills: ["Technical Writing", "Content Creation", "Knowledge Sharing"],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
  },
];

export default function Activities() {
  return (
    <div className="py-12 bg-white" id="activities">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
          Activities & Involvement
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Extracurricular activities and community engagement
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {activitiesData.map((activity) => (
            <Card
              key={activity.id}
              className="overflow-hidden border border-gray-200 shadow-md flex flex-col md:flex-row"
            >
              {activity.image && (
                <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col w-full md:w-2/3">
                <CardHeader>
                  <div>
                    <CardTitle>{activity.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                      <span className="text-sm font-medium">
                        {activity.organization}
                      </span>
                      <div className="flex items-center gap-2">
                        {activity.role && (
                          <Badge variant="outline">{activity.role}</Badge>
                        )}
                        <span className="text-sm text-muted-foreground">
                          {activity.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{activity.description}</p>
                  {activity.skills && (
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
