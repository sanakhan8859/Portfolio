import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
  category: "award" | "certification" | "honor";
}

const achievementsData: Achievement[] = [
 /* {
    id: 1,
    title: "Dean's List",
    issuer: "Tech University",
    date: "2022-2023",
    description:
      "Awarded for maintaining a GPA above 3.8 for the academic year.",
    icon: "🏆",
    category: "honor",
  },*/
  {
    id: 2,
    title: "Google Cloud Study Jam",
    issuer: "Goolgle Cloud Web Services",
    date: "June 2023",
    description:
      "Professional certification validating expertise in developing applications on AWS.",
    icon: "📜",
    category: "certification",
    //url: "https://certificate.givemycertificate.com/c/8e524754-17aa-474a-a138-2fc6e7319044",
  },
  {
    id: 3,
    title: "Mentored 20+ Students",
    issuer: "Computer Science Department",
    date: "May 2024",
    description:
      "Mentored 20+ Student for Completing the Google Cloud Learning Path.",
    icon: "🥇",
    category: "award",
  },
  {
    id: 4,
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "August 2023",
    description:
      "Certification demonstrating proficiency in Google Cloud Platform services.",
    icon: "📜",
    category: "certification",
  },
  /*{
    id: 5,
    title: "Undergraduate Research Grant",
    issuer: "National Science Foundation",
    date: "2022",
    description:
      "Received grant funding for research in machine learning applications.",
    icon: "🔬",
    category: "honor",
  },*/
  {
    id: 6,
    title: "Hackathon ",
    issuer: "Hack CBS 2022",
    date: "April 2022",
    description:
      "Second runner up in hack CBS competition.",
    icon: "🏆",
    category: "award",
  },
];

export default function Achievements() {
  const categories = [
    { id: "award", label: "Awards", emoji: "🏆" },
    { id: "certification", label: "Certifications", emoji: "📜" },
    { id: "honor", label: "Academic Honors", emoji: "🎓" },
  ];

  return (
    <div className="py-12 bg-gray-50" id="achievements">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
          Achievements
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Recognition of academic and professional excellence
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-xl font-semibold">{category.label}</h3>
              </div>

              <div className="flex flex-col gap-4 flex-grow">
                {achievementsData
                  .filter((achievement) => achievement.category === category.id)
                  .map((achievement) => (
                    <Card
                      key={achievement.id}
                      className="border border-gray-200 shadow-sm"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{achievement.icon}</span>
                          <CardTitle className="text-lg">
                            {achievement.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">
                            {achievement.issuer}
                          </span>
                          <Badge variant="outline">{achievement.date}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
