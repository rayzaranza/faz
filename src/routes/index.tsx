import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/Button";
import { getUser } from "@/services/auth";
import { signOut } from "@/services/auth";
import { useState } from "react";
import { Text } from "@/components/Text";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const { user } = await getUser();
    if (!user) {
      throw redirect({ to: "/entrar" });
    }
    return { user };
  },
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const { user } = Route.useRouteContext();
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

  async function handleSignOut() {
    setIsSigningOut(true);
    await signOut();
    await navigate({ to: "/entrar" });
  }

  return (
    <>
      <div>página inicial</div>
      <Text>{user?.user_metadata.full_name}</Text>
      <Button isLoading={isSigningOut} onClick={handleSignOut}>
        {isSigningOut ? "saindo..." : "sair"}
      </Button>
    </>
  );
}
