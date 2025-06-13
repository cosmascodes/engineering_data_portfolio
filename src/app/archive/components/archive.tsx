import { Codepen, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Archive() {
  const projects = [
    {
      year: "2022",
      title: "Harvard Business School Design System",
      madeAt: "Upstatement",
      builtWith: "Storybook · React · TypeScript",
      link: "☑ ☐",
    },
    {
      year: "2022",
      title: "Threadable",
      madeAt: "Upstatement",
      builtWith: "React Native · Ruby on Rails · Firebase",
      link: "☑ ☐",
    },
    {
      year: "2022",
      title: "Pratt",
      madeAt: "Upstatement",
      builtWith: "WordPress · Timber · WordPress Multisite · Gutenberg · JS",
      link: "☑ ☐",
    },
    {
      year: "2022",
      title: "Everytown Gun Law Rankings",
      madeAt: "Upstatement",
      builtWith: "WordPress · Timber · PHP · Airtable API",
      link: "☑ ☐",
    },
    {
      year: "2021",
      title: "Koala Health",
      madeAt: "Upstatement",
      builtWith:
        "Next.js · TypeScript · Redux Toolkit · Stripe · Algolia · Firebase Auth · Formik · Yup · Vercel",
      link: "☑ ☐",
    },
    {
      year: "2021",
      title: "Philadelphia Inquirer Sports Scoreboards",
      madeAt: "Upstatement",
      builtWith: "React · TypeScript · Stats Perform API",
      link: "☑ ☐",
    },
    {
      year: "2021",
      title: "Vanderbilt Design System",
      madeAt: "Upstatement",
      builtWith: "Twig · Puppy · JS",
      link: "☑ ☐",
    },
    {
      year: "2020",
      title: "Michelle Wu for Boston Grassroots Toolkit",
      madeAt: "Upstatement",
      builtWith: "Gatsby · Styled Components",
      link: "☑ ☐",
    },
    {
      year: "2020",
      title: "The 19th News",
      madeAt: "Upstatement",
      builtWith: "WordPress · Timber · Gutenberg · PHP · JS · Mailchimp · AMP",
      link: "☑ ☐",
    },
    {
      year: "2020",
      title: "Northeastern CSSH",
      madeAt: "Upstatement",
      builtWith:
        "WordPress · Timber · WordPress Multisite · PHP · Algolia · JS",
      link: "☑ ☐",
    },
    {
      year: "2020",
      title: "Integrating Algolia Search with WordPress Multisite",
      madeAt: "Upstatement",
      builtWith: "Algolia · WordPress · PHP",
      link: "☑ ☐",
    },
    {
      year: "2020",
      title: "Time to Have More Fun",
      madeAt: "—",
      builtWith: "Next.js · Tailwind CSS · Firebase",
      link: "☑ ☐",
    },
    {
      year: "2019",
      title: "Upstatement.com",
      madeAt: "Upstatement",
      builtWith: "Nuxt · Vue · Prismic",
      link: "☑ ☐",
    },
    {
      year: "2019",
      title: "Building a Headless Mobile App CMS From Scratch",
      madeAt: "Upstatement",
      builtWith: "Node · Express · Firebase · Vue",
      link: "☑ ☐",
    },
    {
      year: "2019",
      title: "Moms Demand Action Mobile App",
      madeAt: "Upstatement",
      builtWith: "NativeScript Vue · iOS · Android",
      link: "☑ ☐",
    },
    {
      year: "2019",
      title: "OctoProfile",
      madeAt: "—",
      builtWith: "Next.js · Chart.js · GitHub API",
      link: "☑ ☐",
    },
    {
      year: "2018",
      title: "Google Keep Clone",
      madeAt: "—",
      builtWith: "Vue · Firebase",
      link: "☑ ☐",
    },
    {
      year: "2018",
      title: "Spotify Profile",
      madeAt: "—",
      builtWith: "React · Express · Styled Components",
      link: "☑ ☐",
    },
    {
      year: "2018",
      title: "Devoted Health",
      madeAt: "Upstatement",
      builtWith: "Gatsby · TypeScript · Algolia",
      link: "☑ ☐",
    },
    {
      year: "2018",
      title: "Flagship Pioneering",
      madeAt: "Upstatement",
      builtWith: "Craft CMS · Chart.js",
      link: "☑ ☐",
    },
    {
      year: "2018",
      title: "blistabloc",
      madeAt: "Scout",
      builtWith: "WordPress · Timber · WooCommerce",
      link: "☑ ☐",
    },
    {
      year: "2018",
      title: "Spotify's Top Tracks of 2017",
      madeAt: "Northeastern",
      builtWith: "R · Spotify Web API",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "Halcyon Theme",
      madeAt: "—",
      builtWith: "VS Code · Sublime Text · Atom · iTerm2 · Hyper",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "Apple Music Embeddable Web Player Widget",
      madeAt: "Apple",
      builtWith: "MusicKit.js · JS · SCSS",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "Apple Music Facebook Messenger Integration",
      madeAt: "Apple",
      builtWith: "Ember · JS · SCSS",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "Personal Website V3",
      madeAt: "—",
      builtWith: "Jekyll · SCSS · JS",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "Interventions",
      madeAt: "Scout",
      builtWith: "Jekyll · SCSS · JS",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "Lonely Planet DBMS",
      madeAt: "Northeastern",
      builtWith: "Python · MySQL · Flask · JS",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "myNEU Redesign",
      madeAt: "Northeastern",
      builtWith: "Jekyll · SCSS · JS",
      link: "☑ ☐",
    },
    {
      year: "2017",
      title: "Crowd DJ",
      madeAt: "HackBeanpot 2017",
      builtWith: "React · Firebase · Spotify API",
      link: "☑ ☐",
    },
    {
      year: "2016",
      title: "Personal Website V2",
      madeAt: "—",
      builtWith: "Jekyll · SCSS · JS",
      link: "☑ ☐",
    },
    {
      year: "2016",
      title: "Weather Widget",
      madeAt: "—",
      builtWith: "Node · Express · EJS",
      link: "☑ ☐",
    },
    {
      year: "2016",
      title: "Screentime 2.0",
      madeAt: "Starry",
      builtWith: "Cordova · Backbone · Marionette",
      link: "☑ ☐",
    },
    {
      year: "2016",
      title: "React Profile",
      madeAt: "—",
      builtWith: "React · CSS",
      link: "☑ ☐",
    },
    {
      year: "2016",
      title: "CourseSource",
      madeAt: "Northeastern",
      builtWith: "Angular · Node · Express · MongoDB",
      link: "☑ ☐",
    },
    {
      year: "2016",
      title: "Personal Website V1",
      madeAt: "—",
      builtWith: "HTML · CSS · JS · Bootstrap",
      link: "☑ ☐",
    },
    {
      year: "2016",
      title: "Fontipsums",
      madeAt: "—",
      builtWith: "HTML · SCSS",
      link: "☑ ☐",
    },
    {
      year: "2015",
      title: "NU Women in Tech",
      madeAt: "Northeastern",
      builtWith: "Jekyll · Bootstrap",
      link: "☑ ☐",
    },
    {
      year: "2015",
      title: "One Card For All",
      madeAt: "MullenLowe",
      builtWith: "HTML · SCSS · JS · jQuery",
      link: "☑ ☐",
    },
    {
      year: "2015",
      title: "JetBlue HumanKinda",
      madeAt: "MullenLowe",
      builtWith: "Tumblr · HTML · CSS · JS",
      link: "☑ ☐",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-12 lg:px-24 my-32 relative">
      {/* Left Side Icons */}
      <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-6">
        <div className="flex flex-col space-y-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-accent hover:-translate-y-1 transition-all duration-300 ease-in-out"
            aria-label="CodePen"
          >
            <Codepen size={18} />
          </a>
        </div>
        {/* Vertical Line */}
        <div className="w-px h-24 bg-slate-600 mt-6"></div>
      </div>

      {/* Right Side Email */}
      <div className="fixed right-8 bottom-0 z-40 hidden lg:flex flex-col items-center">
        <div className="mb-6">
          <a
            href="mailto:brittany.chiang@gmail.com"
            className="text-slate-400 hover:text-accent transition-all duration-300 ease-in-out hover:-translate-y-1 font-mono text-sm tracking-wider"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            brittany.chiang@gmail.com
          </a>
        </div>
        {/* Vertical Line */}
        <div className="w-px h-24 bg-slate-600"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="px-8">
          <h2 className="text-white text-3xl md:text-7xl font-bold mb-2">
            Archive
          </h2>
          <p className="mb-24 font-mono text-accent">
            {`A big list of things I've worked on`}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-slate-400">
                <th className="pb-4 px-8">Year</th>
                <th className="pb-4 px-8">Title</th>
                <th className="pb-4 px-8">Made at</th>
                <th className="pb-4 px-8">Built with</th>
                <th className="pb-4">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-2 px-8 text-accent font-mono">
                    {project.year}
                  </td>
                  <td className="py-2 px-8 text-md text-white font-semibold">
                    {project.title}
                  </td>
                  <td className="py-2 px-8 text-slate-400 text-sm">
                    {project.madeAt}
                  </td>
                  <td className="py-2 px-8 text-slate-400 font-mono text-sm">
                    {project.builtWith}
                  </td>
                  <td className="py-2 text-slate-400 font-mono">
                    {project.link}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
