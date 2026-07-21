export function SectionLabel({
  children,
  variant = "onLight",
  className = "",
}: {
  children: string;
  variant?: "onLight" | "onDark";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        variant === "onDark" ? "text-wave-light" : "text-brand-blue"
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden />
      {children}
    </span>
  );
}
