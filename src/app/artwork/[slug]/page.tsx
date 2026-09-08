import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { artworks, getArtworkById } from "@/data/artworks";
import { getCaseStudyBySlug } from "@/data/case-studies";

type ArtworkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artworks
    .filter((artwork) => getCaseStudyBySlug(artwork.id))
    .map((artwork) => ({ slug: artwork.id }));
}

export async function generateMetadata({
  params,
}: ArtworkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkById(slug);
  const caseStudy = getCaseStudyBySlug(slug);
  if (!artwork || !caseStudy) {
    return { title: "Artwork — Jiaying Li" };
  }

  return {
    title: `${caseStudy.title ?? artwork.title} — Jiaying Li`,
    description: caseStudy.summary,
  };
}

export default async function ArtworkDetailPage({
  params,
}: ArtworkDetailPageProps) {
  const { slug } = await params;
  const artwork = getArtworkById(slug);
  const caseStudy = getCaseStudyBySlug(slug);

  if (!artwork || !caseStudy) {
    notFound();
  }

  const illustration = artwork.section === "illustration";
  const visualDesign = artwork.section === "visual-design";
  const galleryTheme = illustration || visualDesign;

  return (
    <CaseStudyView
      project={artwork}
      caseStudy={caseStudy}
      backHref={
        visualDesign
          ? "/artwork?tab=visual-design"
          : illustration
            ? "/artwork?tab=illustration"
            : "/artwork"
      }
      backLabel={
        visualDesign ? "Visual Design" : illustration ? "Illustration" : "Artwork"
      }
      theme={galleryTheme ? "illustration" : undefined}
    />
  );
}
