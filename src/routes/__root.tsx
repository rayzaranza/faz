import { type RouterContext } from "@/types/router";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});

function Root() {
  return <Outlet />;
}
