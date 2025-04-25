import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import ExperienceTimeline from "./ExperienceTimeline";
import Hackathons from "./Hackathons";
import SummerTraining from "./SummerTraining";
import Activities from "./Activities";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main content */}
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <ExperienceTimeline />
        </section>

        <section id="summer-training">
          <SummerTraining />
        </section>

        <section id="hackathons">
          <Hackathons />
        </section>

        <section id="activities">
          <Activities />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
