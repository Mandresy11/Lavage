import type { ReactNode, MouseEventHandler } from "react";

export type ButtonVariant =
  | "navy"
  | "orange"
  | "green"
  | "blue"
  | "outline-navy"
  | "outline-white";

const variantClasses: Record<ButtonVariant, string> = {
  navy: "bg-navy text-white hover:bg-navy-deep",
  orange: "bg-brand-orange text-white hover:bg-brand-orange-dark",
  green: "bg-brand-green text-white hover:bg-brand-green/90",
  blue: "bg-brand-blue text-white hover:bg-brand-blue-dark",
  "outline-navy":
    "border border-navy/20 bg-white text-navy hover:bg-navy/5",
  "outline-white":
    "border border-white/40 bg-white/10 text-white hover:bg-white/20",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  onClick?: MouseEventHandler;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "orange",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-sm transition-colors duration-200 whitespace-nowrap";
  const sizeClasses =
    size === "lg" ? "px-7 py-3.5 text-base" : "px-6 py-3 text-sm";
  const classes = `${base} ${sizeClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
