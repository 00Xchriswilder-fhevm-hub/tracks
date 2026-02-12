import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Optional Tailwind background utility, e.g. "bg-white" or "bg-maza-cream".
   */
  backgroundClassName?: string;
  /**
   * Optional title to render a header row with an underline.
   */
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  backgroundClassName = "bg-white",
  title,
}) => {
  return (
    <div
      className={`border-2 border-black shadow-neo p-6 ${backgroundClassName} ${className}`}
    >
      {title && (
        <div className="border-b-2 border-black pb-2 mb-4">
          <h3 className="text-xl font-black uppercase tracking-tight">
            {title}
          </h3>
        </div>
      )}
      {children}
    </div>
  );
};

