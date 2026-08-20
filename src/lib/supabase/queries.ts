import "server-only";

import { createClient } from "@/lib/supabase/server";

export async function getPublishedProjects() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Unable to load projects: ${error.message}`);
  }

  return data;
}

export async function getPublishedArtworks() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("artworks")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Unable to load artworks: ${error.message}`);
  }

  return data;
}
