import type { ReactElement } from "react";
import { Text } from "./Text";

interface EmptyStateProps {
  image?: ReactElement;
  title?: string;
  description: string;
  action?: ReactElement;
}

export function EmptyState({
  image,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-300 p-300 text-center">
      {image}
      <div>
        {title && <Text variant="h2">{title}</Text>}
        <Text variant="caption">{description}</Text>
      </div>
      {action}
    </div>
  );
}
