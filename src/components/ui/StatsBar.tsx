import React from "react";

export interface StatItem {
  label: string;
  value: React.ReactNode;
  /**
   * Tailwind class for the value text color.
   * Example: "text-maza-pink" or "text-black".
   */
  valueColorClassName?: string;
}

export interface StatsBarProps {
  stats: StatItem[];
  className?: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats, className = "" }) => {
  const Stat = ({ label, value, valueColorClassName }: StatItem) => (
    <div className="flex flex-col items-start justify-center px-6 py-4 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0 bg-white hover:bg-gray-50 transition-colors flex-1">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </span>
      <span
        className={`text-2xl font-black font-mono tracking-tight ${
          valueColorClassName ?? "text-maza-pink"
        }`}
      >
        {value}
      </span>
    </div>
  );

  if (!stats.length) return null;

  return (
    <div
      className={`w-full border-2 border-black shadow-neo mb-12 flex flex-col md:flex-row overflow-hidden ${className}`}
    >
      {stats.map((item, index) => (
        <Stat
          key={`${item.label}-${index}`}
          label={item.label}
          value={item.value}
          valueColorClassName={item.valueColorClassName}
        />
      ))}
    </div>
  );
};

