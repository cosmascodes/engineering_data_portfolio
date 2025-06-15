import Image from "next/image";
import { SectionHeader } from "../section_header";
import { OtherProjects } from "./other_projects";

const projects = [
  {
    id: 1,
    title: "LuxDevHQ",
    description:
      "Lead Frontend Engineer building high-quality websites, design systems, and cross-platform digital experiences for diverse clients using React, TypeScript, and Next.js. Spearheaded company-wide accessibility initiatives and architected technical solutions including content management systems and REST APIs.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    image: "/images/luxdev.png",
    align: "right",
  },
  {
    id: 2,
    title: "Mizizi Wellness Org",
    description:
      "Designed and developed a responsive event website for a major wellness Padathon using Next.js, with features to enhance attendee experience. Built the site on a tight deadline while ensuring mobile accessibility and integrating social media sharing features to increase event visibility.",
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    image: "/images/mizizi.png",
    align: "left",
  },
  {
    id: 3,
    title: "AfyaReach Org",
    description:
      "Developed frontend components and interfaces for health-tech platforms using Next.js, React, and modern CSS frameworks. Built responsive UI designs ensuring seamless user experience across devices for healthcare users, and collaborating with UX designers to create intuitive interfaces for complex health management workflows.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
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
                    <div className="relative rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
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
