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
    id: "luxdevhq",
    company: "LuxDevHQ",
    role: "Lead Frontend Engineer @ LuxDevHQ",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Build, style, and ship high-quality websites, design systems, mobile apps, and cross-platform digital experiences for diverse clients using React, TypeScript, and modern frontend technologies",
      "Lead the development and architecture of technical tools like content management systems, REST APIs, and continuous integration pipelines to fulfil business requirements",
      "Work alongside product and project managers, designers, and other engineers to transform creative concepts into refined digital experiences at an agile (2 week) cadence",
      "Provide leadership within engineering department through close collaboration, building tools to improve developer experience, and mentorship",
      "Spearhead company-wide accessibility initiatives such as creating documentation for best practices, establishing comprehensive accessibility checklist for developers, and facilitating knowledge shares",
    ],
  },
  {
    id: "miziziwellness",
    company: "Mizizi Wellness Org",
    role: "Frontend Designer @ Mizizi Wellness Org",
    period: "April 2025",
    responsibilities: [
      "Designed and developed a responsive event website for a major wellness conference on a tight deadline",
      "Collaborated with event organizers to translate event requirements into an engaging digital experience",
      "Created interactive maps and agenda features to enhance attendee experience",
      "Optimized the site for mobile devices to ensure accessibility for all event participants",
      "Integrated social media sharing and community engagement features to increase event visibility",
    ],
  },
  {
    id: "afyareach",
    company: "AfyaReach Org",
    role: "Developer @ AfyaReach Org",
    period: "March 2025",
    responsibilities: [
      "Developed frontend components and interfaces for health-tech platforms using JavaScript, React, and CSS frameworks",
      "Built responsive UI designs ensuring seamless user experience across devices for healthcare users",
      "Implemented authentication systems and secure data handling practices for sensitive health information",
      "Collaborated with UX designers to create intuitive interfaces for complex health management workflows",
    ],
  },
];

export default function InteractiveResume() {
  const [activeJob, setActiveJob] = useState<string>("luxdevhq");

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
