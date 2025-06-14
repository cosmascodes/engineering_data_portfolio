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
      <div className="space-y-20 md:space-y-32">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative max-w-5xl mx-auto min-h-[300px] md:min-h-[380px] flex items-center"
          >
            {/* Background Image - Mobile Full Width */}
            <div className="md:hidden absolute inset-0 w-full h-full">
              <div className="relative w-full h-full overflow-hidden rounded">
                <Image
                  src={project.image}
                  fill
                  className="object-cover"
                  alt={`${project.title} preview`}
                />
                <div className="absolute inset-0 bg-slate-800/80 border-[0.2px] border-slate-800/10" />
              </div>
            </div>
            
            {/* Background Image - Desktop */}
            <div
              className={`hidden md:block absolute inset-y-0 w-[60%] ${
                project.align === "right" ? "left-0" : "right-0"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden rounded flex items-center">
                <div className="relative w-full h-[90%]">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover rounded"
                    alt={`${project.title} preview`}
                  />
                  <div className="absolute inset-0 bg-accent/40 border-[0.2px] border-accent/10 hover:bg-transparent transition-all duration-300 rounded" />
                </div>
              </div>
            </div>
            
            {/* Content Container - Vertically centered */}
            <div
              className={`relative z-10 w-full ${
                project.align === "right"
                  ? "md:flex md:justify-end"
                  : "md:flex md:justify-start"
              }`}
            >
              <div
                className={`w-full p-6 md:p-0 rounded md:rounded-none ${
                  project.align === "right"
                    ? "md:text-right md:w-[60%] md:pr-8"
                    : "md:text-left md:w-[60%] md:pl-8"
                }`}
              >
                <div className="mb-3">
                  <span className="text-sm text-accent">Featured Project</span>
                  <h2 className="text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
                
                <div className="bg-transparent md:bg-slate-800 py-4 md:px-6 my-4 md:backdrop-blur-sm">
                  <p className="text-slate-300">{project.description}</p>
                </div>
                
                <ul
                  className={`flex flex-wrap gap-2 text-slate-400 text-sm ${
                    project.align === "right" ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.tags.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        
        <OtherProjects/>
      </div>
    </section>
  );
};

export default Projects;