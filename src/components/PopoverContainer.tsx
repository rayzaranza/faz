import { type ReactNode } from "react";

interface PopoverContainerProps {
  children: ReactNode;
}

export function PopoverContainer({ children }: PopoverContainerProps) {
  return (
    <div className="squircle flex flex-col gap-4 rounded-3xl bg-canvas p-4 shadow-floating">
      {children}
    </div>
  );
}
