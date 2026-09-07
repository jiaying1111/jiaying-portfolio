import { digitalNoMoreMadCaseStudy } from "@/data/case-studies/digital-no-more-mad";
import { dreamwhorlCaseStudy } from "@/data/case-studies/dreamwhorl";
import { illustrationCaseStudiesBySlug } from "@/data/case-studies/illustrations";
import { littleRedRidingHoodCaseStudy } from "@/data/case-studies/little-red-riding-hood";
import { nushuCaseStudy } from "@/data/case-studies/nushu";
import { presentAndAbsentCaseStudy } from "@/data/case-studies/present-and-absent";
import { resoundingNatureCaseStudy } from "@/data/case-studies/resounding-nature";
import type { CaseStudy } from "@/data/case-studies/types";

export const caseStudiesBySlug: Record<string, CaseStudy> = {
  [digitalNoMoreMadCaseStudy.slug]: digitalNoMoreMadCaseStudy,
  [dreamwhorlCaseStudy.slug]: dreamwhorlCaseStudy,
  [littleRedRidingHoodCaseStudy.slug]: littleRedRidingHoodCaseStudy,
  [nushuCaseStudy.slug]: nushuCaseStudy,
  [presentAndAbsentCaseStudy.slug]: presentAndAbsentCaseStudy,
  [resoundingNatureCaseStudy.slug]: resoundingNatureCaseStudy,
  ...illustrationCaseStudiesBySlug,
};

export function getCaseStudyBySlug(slug: string) {
  return caseStudiesBySlug[slug];
}
