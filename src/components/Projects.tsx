import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS.",
    longDescription:
      "This portfolio website showcases my skills, projects, and experience. It features a responsive design, dark mode toggle, and smooth animations. Built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80",
    github: "https://github.com/sanakhan8859/Portfolio.git",
    demo: "https://shortify-frontend-five.vercel.app/",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Shortify ",
    description: "A full-stack secure website for providing short - forms of URLs",
    longDescription:
      "Developed a full-stack URL Shortener using React.js for the frontend and Node.js, Express.js, and MongoDB for the backend. Implemented features like URL validation, shortening, redirection, and click tracking using RESTful APIs  ",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    github: "https://github.com/sanakhan8859/Hospital-Management-System.git",
    demo: "https://ecommerce.example.com",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description: "A web application for managing hospital operations.",
    longDescription:
      "Developed a website for Searching the Services of Hospital in Different Cities.",
    technologies: ["React", "Nodejs", "Expressjs", "Javascript"],
    image:
      "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&q=80",
    github: "https://github.com/sanakhan8859/Hospital-Management-System.git",
    category: "Web Development",
  },
];

const categories = [
  "All",
  ...new Set(projectsData.map((project) => project.category)),
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-2">
          Projects
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Showcasing my technical skills through various projects
        </p>

        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-gray-200 shadow-md flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.category}</DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="mb-4">
                        {project.longDescription || project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="outline" className="flex-1" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button className="flex-1" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
                {project.github && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
