import { createFileRoute, redirect } from "@tanstack/react-router";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { getUser, signInWithGitHub } from "@/services/auth";
import { useState } from "react";
import GithubIcon from "@/assets/github.svg?react";
import Logo from "@/assets/logo.svg?react";

export const Route = createFileRoute("/entrar")({
  beforeLoad: async () => {
    const { user } = await getUser();
    if (user) throw redirect({ to: "/" });
  },
  component: LoginPage,
});

function LoginPage() {
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);

  async function handleSignIn() {
    setIsSigningIn(true);
    await signInWithGitHub();
  }

  return (
    <div className="grid h-dvh place-content-center place-items-center gap-9 bg-surface-pressed">
      <Logo />
      <div className="squircle flex min-w-72 flex-col place-items-center gap-5 rounded-2xl bg-canvas p-8 shadow-elevated">
        <Text variant="h3">entre</Text>
        <Button
          isLoading={isSigningIn}
          icon={GithubIcon}
          onClick={handleSignIn}
          aria-label="Entrar com GitHub"
        >
          {isSigningIn ? "entrando..." : "entrar com github"}
        </Button>
      </div>
    </div>
  );
}
