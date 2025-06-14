"use client";

import { useState } from "react";
import { SectionHeader } from "../section_header";

interface JobExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const jobExperiences: JobExperience[] = [
  {
    id: "upstatement",
    company: "Upstatement",
    role: "Lead Engineer @ Upstatement",
    period: "May 2018 - Present",
    responsibilities: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    ],
  },
  {
    id: "apple",
    company: "Apple",
    role: "UI Engineer Co-op @ Apple",
    period: "July - December 2017",
    responsibilities: [
      "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
      "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
      "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
      "Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications",
    ],
  },
  {
    id: "starry",
    company: "Starry",
    role: "Software Engineer @ Starry",
    period: "July - December 2016",
    responsibilities: [
      "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
      "Proposed and implemented scalable solutions to issues identified with cloud infrastructure and service architecture",
      "Collaborated with designers and other developers to ensure thoughtful and coherent user experiences across Starry's iOS and Android mobile apps",
    ],
  },
  {
    id: "mullenlowe",
    company: "MullenLowe",
    role: "Creative Technologist @ MullenLowe",
    period: "July - December 2015",
    responsibilities: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Worked with a team of designers, project managers, and other developers to build beautiful and engaging experiences for brands like Jetblue, Lovesac, U.S. Cellular, and more",
    ],
  },
];

export default function InteractiveResume() {
  const [activeJob, setActiveJob] = useState<string>("upstatement");

  const getActiveJobDetails = () => {
    return (
      jobExperiences.find((job) => job.id === activeJob) || jobExperiences[0]
    );
  };

  return (
    <section className="px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        <SectionHeader number="02" title="Where I've Worked" />
      </div>

      {/* Mobile/Tablet Layout - Horizontal Tabs */}
      <div className="md:hidden max-w-3xl">
        {/* Horizontal scrollable tabs */}
        <div className="overflow-x-auto scrollbar-hide mb-8">
          <div className="flex border-b border-slate-700/50 w-full">
            {jobExperiences.map((job) => (
              <div
                key={job.id}
                onClick={() => setActiveJob(job.id)}
                className={`flex-1 px-4 py-3 cursor-pointer transition-all duration-200 border-b-2 text-center ${
                  activeJob === job.id
                    ? "border-b-accent text-accent"
                    : "border-b-transparent text-slate-400 hover:text-slate-300"
                }`}
              >
                <div className="font-medium text-sm">{job.company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content for mobile */}
        <div className="animate-fadeIn">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-300 mb-2">
              {getActiveJobDetails().role}
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              {getActiveJobDetails().period}
            </p>
          </div>

          <div className="space-y-3">
            {getActiveJobDetails().responsibilities.map(
              (responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-1 h-1 bg-accent rounded-full mt-2.5"></div>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {responsibility}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Vertical Sidebar */}
      <div className="hidden md:block overflow-hidden max-w-4xl mx-auto w-full min-h-[500px]">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64">
            <div className="border-l border-slate-700/50">
              {jobExperiences.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setActiveJob(job.id)}
                  className={`px-6 py-4 cursor-pointer transition-all duration-200 border-l-2 ${
                    activeJob === job.id
                      ? "border-l-accent bg-slate-800/60"
                      : "border-l-transparent hover:bg-slate-800/30"
                  }`}
                >
                  <div
                    className={`font-medium text-sm mb-1 ${
                      activeJob === job.id ? "text-accent" : "text-slate-400"
                    }`}
                  >
                    {job.company}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-8 py-3">
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-300 mb-2">
                  {getActiveJobDetails().role}
                </h2>
                <p className="text-slate-400 text-sm font-medium">
                  {getActiveJobDetails().period}
                </p>
              </div>

              <div className="space-y-4">
                {getActiveJobDetails().responsibilities.map(
                  (responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-1 h-1 bg-accent rounded-full mt-2.5"></div>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {responsibility}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
