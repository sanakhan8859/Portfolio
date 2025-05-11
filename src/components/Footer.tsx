import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/sanakhan8859/Hospital-Management-System.git",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/username",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/username",
      label: "Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:amberafreen38718@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Activities", href: "#activities" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4">Amber Afreen</h3>
            <p className="text-gray-300 mb-4">
              Computer Science Student at Tech University, passionate about
              building innovative solutions and exploring new technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 University Ave</p>
              <p>Tech City, TC 12345</p>
              <p>United States</p>
              <p className="mt-4">
                <a
                  href="mailto:john.doe@example.com"
                  className="hover:text-white transition-colors"
                >
                  amberafreen38718@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Amber Afreen. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
