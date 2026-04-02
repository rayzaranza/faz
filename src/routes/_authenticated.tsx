import { Navbar } from "@/components/Navbar";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    if (!context.user) {
      throw redirect({ to: "/entrar" });
    }
  },
  component: AuthenticatedPage,
});

function AuthenticatedPage() {
  const { user } = Route.useRouteContext();
  return (
    <>
      <Navbar user={user!} />
      <Outlet />
    </>
  );
}
