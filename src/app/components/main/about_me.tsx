import React from "react";
import { SectionHeader } from "../section_header";

// About Me Section Component
const AboutMeSection = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Eleventy",
    "Node.js",
    "WordPress",
  ];

  return (
    <section className="px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-xl">
        {/* Import and use the reusable SectionHeader */}
        <SectionHeader number="01" title="About Me" />
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Hello! My name is Cosmas and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>

            <p className="text-gray-400 leading-relaxed">
              {`Fast-forward to today, and I've had the privilege of working at`}{" "}
              <span className="text-accent">an advertising agency</span>,{" "}
              <span className="text-accent">a start-up</span>,{" "}
              <span className="text-accent">a huge corporation</span>, and{" "}
              <span className="text-accent">a student-led design studio</span>.
              My main focus these days is building accessible, inclusive
              products and digital experiences at{" "}
              <span className="text-accent">LuxDevHQ</span> for a variety of
              clients.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I also recently{" "}
              <span className="text-accent">launched a course</span> that covers
              everything you need to build a web app with the Spotify API using
              Node & React.
            </p>

            <p className="text-gray-400 leading-relaxed">
              {`Here are a few technologies I've been working with recently:`}
            </p>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 gap-2 mt-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-accent mr-2">▹</span>
                  <span className="text-gray-400 font-mono text-sm">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

              {/* Image container */}
              <div className="relative bg-accent rounded overflow-hidden w-64 h-80">
                <img
                  src="/images/profile.jpg"
                  alt="Cosmas' profile"
                  className="w-full h-full object-cover mix-blend-multiply group-hover:mix-blend-normal transition-all duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-accent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
