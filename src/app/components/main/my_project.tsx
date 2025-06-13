import Image from "next/image";
import { SectionHeader } from "../section_header";
import { OtherProjects } from "./other_projects";

const projects = [
  {
    id: 1,
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tags: ["Sublime Text", "Atom", "iTerm2", "VS Code", "Hyper"],
    image: "/images/halcyon.avif",
    align: "right",
  },
  {
    id: 2,
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tags: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
    image: "/images/halcyon.avif",
    align: "left",
  },
  {
    id: 3,
    title: "Build a Spotify Connected App",
    description:
      "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you'll have an app deployed to the internet you can add to your portfolio.",
    tags: ["React", "Express", "Spotify API", "Styled Components"],
    image: "/images/halcyon.avif",
    align: "right",
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        <SectionHeader number="03" title="Some Things I've Built" />
      </div>

      <div className="space-y-32">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`max-w-5xl mx-auto grid grid-cols-2 relative min-h-[380px] ${
              project.align === "right" ? "" : "flex-row-reverse"
            }`}
          >
            {/* Image Container */}
            <div
              className={`absolute h-full w-[60%] flex items-center ${
                project.align === "right" ? "left-0" : "right-0"
              }`}
            >
              <div className="w-full h-[90%] relative overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  className="w-full h-full object-cover opacity-45"
                  alt={`${project.title} preview`}
                />
                <div className="absolute inset-0 bg-accent/40 border-[0.2px] border-accent/10 rounded transition-all duration-300 hover:bg-transparent" />
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex flex-col gap-2  justify-center-safe ${
                project.align === "right"
                  ? "items-end-safe col-start-2"
                  : "items-start-safe col-start-1"
              }`}
            >
              <div
                className={`flex flex-col mb-3 ${
                  project.align === "right" ? "text-right" : "text-left"
                }`}
              >
                <span className="text-sm text-accent">Featured Project</span>
                <h2 className="text-2xl font-bold text-white">
                  {project.title}
                </h2>
              </div>
              <div
                className={`bg-slate-800 py-4 px-8 my-4 ${
                  project.align === "right" ? "text-right" : "text-left"
                } backdrop-blur-sm`}
              >
                <p className="text-slate-300">{project.description}</p>
              </div>
              <ul
                className={`flex flex-wrap gap-2 text-slate-400 text-sm ${
                  project.align === "right" ? "justify-end" : "justify-start"
                }`}
              >
                {project.tags.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
      <OtherProjects/>
      </div>
    </section>
  );
};

export default Projects;
