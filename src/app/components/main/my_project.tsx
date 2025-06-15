import Image from "next/image";
import { SectionHeader } from "../section_header";
import { OtherProjects } from "./other_projects";

const projects = [
  {
    id: 1,
    title: "LuxDevHQ",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tags: ["Sublime Text", "Atom", "iTerm2", "VS Code", "Hyper"],
    image: "/images/luxdev.png",
    align: "right",
  },
  {
    id: 2,
    title: "Mizizi Wellness Org",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tags: ["React", "Styled Components", "Express", "Spotify API"],
    image: "/images/mizizi.png",
    align: "left",
  },
  {
    id: 3,
    title: "AfyaReach Org",
    description:
      "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you'll have an app deployed to the internet you can add to your portfolio.",
    tags: ["React", "Express", "Spotify API", "Styled Components"],
    image: "/images/afyareach.png",
    align: "right",
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        <SectionHeader number="03" title="Some Things I've Built" />
      </div>
      <div className="space-y-20 md:space-y-32 max-w-4xl mx-auto">
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
                <div className="relative w-full h-[80%]">
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="relativerounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover rounded"
                        alt={`${project.title} preview`}
                      />
                      <div className="absolute inset-0 bg-accent/25 border-[0.2px] border-accent/10 hover:bg-transparent transition-all duration-300 rounded" />
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Container - Vertically centered */}
            <div
              className={`relative z-10 w-full mouse-even pointer-events-none ${
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
                  <h2 className="text-2xl font-bold text-slate-300">
                    {project.title}
                  </h2>
                </div>

                <div className="bg-transparent md:bg-slate-800 py-4 md:px-6 my-4 md:backdrop-blur-sm rounded">
                  <p className="text-slate-300 text-sm">
                    {project.description}
                  </p>
                </div>

                <ul
                  className={`flex flex-wrap gap-2 text-slate-400 text-sm ${
                    project.align === "right"
                      ? "md:justify-end"
                      : "md:justify-start"
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

        <OtherProjects />
      </div>
    </section>
  );
};

export default Projects;
