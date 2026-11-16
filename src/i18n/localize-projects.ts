import { formaMedia } from "@/data/forma-listing-media";
import type { Project } from "@/data/projects";
import type { Locale } from "./locale";
import { localize } from "./localize";

export function localizeProjects(projects: Project[], locale: Locale): Project[] {
  return localize(projects, locale).map(project =>
    project.slug === "forma" ? { ...project, ...formaMedia[locale] } : project
  );
}
