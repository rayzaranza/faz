import { supabase } from "../lib/supabase";
import { redirect } from "@tanstack/react-router";

export async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) throw error;
  throw redirect({ href: data.url });
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return {
    user: data?.user || null,
  };
}
