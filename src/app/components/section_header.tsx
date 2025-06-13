import React from "react";

// Reusable Section Header Component (to be imported by other components)
interface SectionHeaderProps {
  number: string | number;
  title: string;
}

export const SectionHeader = ({ number, title }: SectionHeaderProps) => {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="text-accent font-mono text-base">
        {number.toString().padStart(2, "0")}.
      </span>
      <h2 className="text-white text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="flex-1">
        <div className="h-px bg-gray-600 -mt-2"></div>
      </div>
    </div>
  );
};
