import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold border-2 border-black transition-all duration-200 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-maza-pink text-black shadow-neo hover:shadow-neo-lg hover:-translate-y-1 hover:-translate-x-1",
    secondary:
      "bg-maza-green text-black shadow-neo hover:shadow-neo-lg hover:-translate-y-1 hover:-translate-x-1",
    accent:
      "bg-maza-blue text-black shadow-neo hover:shadow-neo-lg hover:-translate-y-1 hover:-translate-x-1",
    outline:
      "bg-white text-black shadow-neo hover:shadow-neo-lg hover:-translate-y-1 hover:-translate-x-1",
  };

  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

