

const projects = [
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tags: ["Algolia", "WordPress", "PHP"],
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    description:
      "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    tags: ["Node", "Express", "Firebase", "Vue"],
  },
  {
    title: "OctoProfile",
    description:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
    tags: ["Next.js", "Chart.js", "GitHub API"],
  },
  {
    title: "Google Keep Clone",
    description: "A simple Google Keep clone built with Vue and Firebase.",
    tags: ["Vue", "Firebase"],
  },
  {
    title: "Apple Music Embeddable Web Player Widget",
    description:
      "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.",
    tags: ["MusicKit.js", "JavaScript", "SCSS"],
  },
];

export function OtherProjects() {
  return (
    <section className="pt-16 mt-32">
      <div className="mb-12 text-center">
        <h2 className="text-slate-300 text-2xl md:text-3xl font-semibold">
          Other Noteworthy Projects
        </h2>
        <a
          href="/archive"
          className="text-accent hover:text-accent/80 transition-colors font-mono text-sm"
        >
          view the archive →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-slate-800/50 rounded p-6 border border-slate-700/50 hover:border-accent/30 transition-all duration-200 hover:-translate-y-1 group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-folder"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-300 mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 mb-5 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs text-slate-400 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors font-mono text-sm">
          Show More
        </button>
      </div>
    </section>
  );
}
