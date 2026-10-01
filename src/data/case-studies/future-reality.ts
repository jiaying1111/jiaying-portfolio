import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";

const media = "/images/visual-design/future-reality";

function still(file: string, width: number, height: number, alt: string, caption?: string): CaseStudyMedia {
  return { src: `${media}/${file}`, width, height, alt, caption };
}

const posterMain = still(
  "poster-main.jpg",
  768,
  1024,
  "Main festival poster: FUTURE REALITY in Anton with the New York skyline visible through the letterforms, on Kodak Portra–style film stock",
  "Main poster · 4:5",
);

export const futureRealityCaseStudy: CaseStudy = {
  slug: "future-reality",
  title: "Future Reality",
  category: "Brand Identity",
  year: "2026",
  summary:
    "Future Reality is an AI film festival premiering at Regal Union Square, New York, on October 25, 2026. As Design & Publicity Lead I built its visual identity — a cinema at dusk, seen through film stock — and carried it from the Figma brand board into the main poster, key visuals, jury and partner posters, social countdowns, and the festival website. This manual records the system so every new piece stays on brand.",
  hero: posterMain,
  metadata: [
    { label: "Role", value: "Design & Publicity Lead" },
    { label: "Organization", value: "Future Reality AI Film Festival" },
    { label: "Tools", value: "Figma, generative image tools, Web" },
    { label: "Media", value: "Brand manual, main poster, social posters, website" },
    { label: "Year", value: "2026" },
  ],
  links: [{ label: "Visit future-reality.ai.studio ↗", href: "https://future-reality.ai.studio/" }],
  chapters: [
    {
      id: "manual",
      number: "01",
      label: "Brand manual",
      title: "Future Reality brand manual",
      lead: "",
      modules: [
        {
          id: "brand-board",
          title: "00 · Brand board",
          copy: "The source board in Figma. Every rule below is taken from it, from finished posters, or from the live website stylesheet.",
          layout: "brand-imagery",
          brand: {
            galleries: [
              {
                title: "Figma brand board",
                columns: 1,
                items: [
                  still(
                    "brand-board.jpg",
                    2400,
                    1719,
                    "Future Reality brand board with type, colour, wordmark, and partner logos",
                  ),
                ],
              },
            ],
          },
        },
        {
          id: "main-poster",
          title: "01 · Main poster",
          copy: "The primary 4:5 poster for the festival: Anton wordmark with skyline fill, Roboto Serif festival line, film-stock frame, and submission QR. This is the hero reference for colour, type, and texture across the campaign.",
          layout: "brand-imagery",
          brand: {
            galleries: [{ title: "Main poster", columns: 1, items: [posterMain] }],
          },
        },
        {
          id: "logo",
          title: "02 · Wordmark",
          copy: "FUTURE REALITY is set in Anton, stacked on two lines, with AI FILM FESTIVAL in Roboto Serif beneath it. The hero version fills the letters with the New York skyline at dusk; the compact lockup is solid white for posters and navigation.",
          layout: "brand-logo",
          media: [
            still(
              "wordmark-skyline.png",
              950,
              935,
              "FUTURE REALITY in Anton with the Manhattan skyline visible through the letterforms",
              "Hero wordmark · skyline fill",
            ),
            still("logo-soho.png", 298, 125, "SOHO International Film Festival logo"),
            still("logo-hxr.png", 786, 495, "HXR logo"),
          ],
          brand: {
            rules: {
              do: [
                "Stack FUTURE / REALITY on two lines with the festival line underneath.",
                "Use the skyline fill only at hero scale, on black or near-black.",
                "Use the solid white lockup at small sizes and over imagery.",
                "Place SOHO and HXR together, bottom right, at matching cap height.",
              ],
              avoid: [
                "Setting the wordmark on one line inside posters.",
                "Recolouring the wordmark in red or orange — colour belongs to the festival line.",
                "Using the skyline fill on light backgrounds or below 120px wide.",
                "Separating the partner logos from each other.",
              ],
            },
          },
        },
        {
          id: "type",
          title: "03 · Typography",
          copy: "Three families, each with one job: Anton shouts, Roboto Serif speaks, Mulish labels.",
          layout: "brand-type",
          brand: {
            typefaces: [
              {
                face: "anton",
                family: "Anton",
                role: "Display — wordmark, names, headlines",
                weights: "Regular 400",
                sample: "Future Reality",
                uppercase: true,
              },
              {
                face: "roboto-serif",
                family: "Roboto Serif",
                role: "Voice — festival line, jury roles, body and quotes",
                weights: "Regular 400 · Medium 500 · Bold 700",
                sample: "Cinema once reflected reality. Today it has the power to create it.",
              },
              {
                face: "mulish",
                family: "Mulish",
                role: "Labels — pillars, dates, navigation",
                weights: "Regular 400 · Semibold 600",
                sample: "Great Filmmaking · Bold Imagination · AI with Intention",
              },
            ],
            typeScale: [
              {
                role: "Future Reality",
                face: "anton",
                family: "Anton Regular",
                size: 220,
                detail: "Line height 1.0",
                hex: "#FFFFFF",
                uppercase: true,
              },
              {
                role: "AI Film Festival",
                face: "roboto-serif",
                family: "Roboto Serif Medium",
                size: 96,
                detail: "Festival line",
                hex: "#F0CEB0",
              },
              {
                role: "Teresa Li",
                face: "anton",
                family: "Anton Regular",
                size: 80,
                detail: "Poster name",
                hex: "#FFFFFF",
              },
              {
                role: "Grand Jury",
                face: "roboto-serif",
                family: "Roboto Serif Bold",
                size: 28,
                detail: "Poster role, centred",
                hex: "#F0CEB0",
                uppercase: true,
              },
              {
                role: "Great Filmmaking",
                face: "mulish",
                family: "Mulish Regular",
                size: 23,
                detail: "Line height 1.257 · tracking −6%",
                hex: "#FFFFFF",
              },
            ],
          },
        },
        {
          id: "colour",
          title: "04 · Colour",
          copy: "Four print colours from the Figma board, always on black. The website extends them into a warm dark palette so long pages stay readable.",
          layout: "brand-color",
          brand: {
            swatchGroups: [
              {
                title: "Core palette · Figma",
                swatches: [
                  { hex: "#000000", name: "Black", usage: "Canvas for every artboard." },
                  { hex: "#D04337", name: "Signal Red", usage: "Projector light and primary accent." },
                  { hex: "#F76029", name: "Flame Orange", usage: "Sunset highlights and hot accents." },
                  { hex: "#F0CEB0", name: "Film Cream", usage: "Festival line and jury roles." },
                  { hex: "#FFFFFF", name: "White", usage: "Wordmark, names, and labels." },
                ],
              },
              {
                title: "Screen palette · website",
                note: "Token names from the live stylesheet.",
                swatches: [
                  { hex: "#090908", name: "brand-bg", usage: "Page background." },
                  { hex: "#100E0D", name: "brand-surface", usage: "Panels and cards." },
                  { hex: "#352622", name: "brand-line", usage: "Dividers and frames." },
                  { hex: "#C83D30", name: "brand-copper", usage: "Section numbers and rules." },
                  { hex: "#DD4C35", name: "brand-accent", usage: "Primary buttons and active nav." },
                  { hex: "#EEE8DF", name: "brand-ink", usage: "Headlines and body text." },
                ],
              },
            ],
          },
        },
        {
          id: "imagery",
          title: "05 · Imagery",
          copy: "Every image is shot as if on aged film: sprocket edges, dust, and light leaks. The subject is New York and the cinema itself — the skyline at dusk, and a red-lit auditorium where a person and a robot share the front row.",
          layout: "brand-imagery",
          brand: {
            galleries: [
              {
                title: "Key visuals · 16:9",
                columns: 2,
                items: [
                  still("kv-03.jpg", 1920, 1080, "Manhattan skyline at sunset inside a film-strip frame", "Skyline"),
                  still("kv-02.jpg", 1920, 1080, "Red-lit cinema with a person and robot in the front row", "Auditorium"),
                  still("kv-04.jpg", 1920, 1080, "Darkened skyline for text overlays", "Skyline · darkened"),
                  still("kv-01.jpg", 1920, 1080, "Black film-stock texture with dust and amber leaks", "Film stock"),
                ],
              },
            ],
            rules: {
              do: [
                "Keep the sprocket frame or film grain on every image.",
                "Darken imagery under text when copy sits on top.",
                "Show human and machine together in cinema settings.",
              ],
              avoid: [
                "Cool blue or neon grading.",
                "Clean, grain-free renders.",
                "Generic robot imagery without a cinema setting.",
              ],
            },
          },
        },
        {
          id: "grid",
          title: "06 · Poster template",
          copy: "Jury and partner announcements share one 1122 × 1402 artboard. A spotlight falls from the top edge onto the subject; brand, pillars, date, and partners hold the four corners with a 49px margin.",
          layout: "brand-grid",
          brand: {
            grid: {
              artboard: { width: 1122, height: 1402 },
              media: still(
                "poster-grand-jury.jpg",
                1122,
                1402,
                "Grand Jury poster with copper spotlight and projected JUDGE on the floor",
              ),
              zones: [
                { label: "Lockup", spec: "269 × 188", x: 49, y: 48, w: 269, h: 188 },
                { label: "Pillars", spec: "Mulish 23 · right", x: 837, y: 45, w: 239, h: 98 },
                { label: "Role", spec: "Roboto Serif Bold 28", x: 458, y: 307, w: 206, h: 66 },
                { label: "Portrait", spec: "Ø 323", x: 399, y: 420, w: 323, h: 323, round: true },
                { label: "Name", spec: "Anton 80", x: 418, y: 795, w: 285, h: 90 },
                { label: "Title / org", spec: "Roboto Serif 28", x: 470, y: 911, w: 182, h: 70 },
                { label: "Date / city", spec: "Mulish 23", x: 49, y: 1303, w: 185, h: 60 },
                { label: "Partners", spec: "SOHO + HXR", x: 784, y: 1287, w: 291, h: 76 },
              ],
            },
          },
        },
        {
          id: "applications",
          title: "07 · Applications",
          copy: "The same system across the main poster, social countdowns, campaign banners, jury series, and the festival website.",
          layout: "brand-apps",
          brand: {
            galleries: [
              {
                title: "Social · submission & tickets",
                columns: 2,
                items: [
                  still("poster-countdown-10d.jpg", 1080, 1350, "10 days to submit — cinema screen countdown poster"),
                  still("poster-countdown-3d.jpg", 1080, 1350, "3 days to submit — auditorium with human and robot"),
                  still("poster-tickets.jpg", 1080, 1350, "Tickets on sale — stairway toward a glowing portal"),
                ],
              },
              {
                title: "Banners",
                columns: 1,
                items: [
                  still(
                    "banner-campaign.jpg",
                    1920,
                    1080,
                    "Campaign banner with handwritten tagline and partner lockup",
                  ),
                  still("banner-wide.jpg", 2033, 774, "Wide banner with skyline-filled wordmark"),
                ],
              },
              {
                title: "Jury series · 4:5",
                columns: 2,
                items: [
                  still("poster-grand-jury.jpg", 1122, 1402, "Grand Jury poster", "Grand Jury"),
                  still("poster-preliminary-jury.jpg", 1122, 1402, "Preliminary Jury poster", "Preliminary Jury"),
                ],
              },
              {
                title: "Festival website",
                copy: "future-reality.ai.studio",
                columns: 1,
                items: [
                  still("web-hero.jpg", 2400, 1500, "Website hero with skyline wordmark and live metadata bar"),
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
