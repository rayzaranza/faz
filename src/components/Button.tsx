import { cn } from "../utils/classNames";
import { type LucideIcon } from "lucide-react";
import { Icon } from "./Icon";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  variant?: "default" | "accent" | "danger";
  icon?: LucideIcon;
}

const variants = {
  default: "bg-surface hover:bg-surface-hover active:bg-surface-pressed",
  accent:
    "bg-surface-accent hover:bg-surface-accent-hover active:bg-surface-accent-pressed",
  danger:
    "bg-surface-danger hover:bg-surface-danger-hover active:bg-surface-danger-pressed",
};

export function Button({
  children,
  variant = "default",
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-10 cursor-pointer items-center justify-center gap-2 rounded-2xl px-4 text-lg select-none disabled:cursor-not-allowed",
        "shadow-elevated hover:shadow-elevated-hover active:shadow-inset",
        "transition hover:-translate-y-px active:translate-y-0.5",
        "squircle",
        !children && "w-10",
        variants[variant],
      )}
      {...rest}
    >
      {icon && <Icon size="medium" icon={icon} />}
      {children && <span className="translate-y-[0.1rem]">{children}</span>}
    </button>
  );
}
