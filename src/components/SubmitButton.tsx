import { useFormStatus } from "react-dom";
import { Button } from "./Button";

interface SubmitButtonProps {
  label: string;
  loadingLoading: string;
}

export function SubmitButton({ label, loadingLoading }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button variant="accent" isLoading={pending} type="submit">
      {pending ? loadingLoading : label}
    </Button>
  );
}
