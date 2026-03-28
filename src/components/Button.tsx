import { cn } from "../utils/classNames";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  variant?: "default" | "accent" | "danger";
}

const variants = {
  default: "bg-surface hover:bg-surface-hover active:bg-surface-pressed",
  accent: "bg-accent hover:bg-accent-hover active:bg-accent-pressed",
  danger: "bg-danger hover:bg-danger-hover active:bg-danger-pressed",
};

export function Button({
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "h-10 text-lg rounded-2xl px-4 cursor-pointer gap-2",
        "shadow-elevated hover:shadow-elevated-hover active:shadow-inset",
        "hover:-translate-y-px active:translate-y-0.5 transform-gpu transition",
        variants[variant],
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
