import { router } from "@/lib/router";
import type { User } from "@supabase/supabase-js";

export interface RouterContext {
  user: User | null;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
