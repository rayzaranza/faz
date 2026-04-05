import { Check } from "lucide-react";
import { Text } from "./Text";
import { cn } from "@/utils/classNames";
import { Icon } from "./Icon";
import { type ChangeEvent, useOptimistic, useTransition } from "react";

interface TaskProps {
  name: string;
  isDone: boolean;
  className?: string;
  onToggle: (value: boolean) => Promise<void>;
}

export function Task({ name, isDone, className, onToggle }: TaskProps) {
  const [optimisticIsDone, addOptimisticIsDone] = useOptimistic(
    isDone,
    (_state, newValue: boolean) => newValue,
  );

  const [isPending, startTransition] = useTransition();

  function handleCheckboxChange({ target }: ChangeEvent<HTMLInputElement>) {
    startTransition(async () => {
      addOptimisticIsDone(target.checked);
      await onToggle(target.checked);
    });
  }
  return (
    <div
      className={cn(
        "group flex min-h-600 items-center gap-200 rounded-medium bg-container px-200 shadow-blocky",
        className,
        isPending && "pointer-events-none",
      )}
    >
      <div className="relative flex items-center justify-center">
        {optimisticIsDone && (
          <Icon
            icon={Check}
            className="pointer-events-none absolute z-40 text-content-inverse"
          />
        )}
        <input
          disabled={isPending}
          className="size-300 shrink-0 blocky-inset appearance-none rounded-full checked:bg-container-inverse checked:shadow-none"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={optimisticIsDone}
        />
      </div>

      <Text
        className={cn(
          "w-full transition-all",
          optimisticIsDone && "line-through opacity-60",
        )}
      >
        {name}
      </Text>

      <div
        className={cn(
          "flex gap-100 opacity-0 focus-within:opacity-100 md:group-hover:opacity-100",
          isPending && "opacity-100",
        )}
      ></div>
    </div>
  );
}
