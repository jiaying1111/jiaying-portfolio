import type { CaseStudy, CaseStudyMedia } from "@/data/case-studies/types";

const root = "/images/projects/hxr-digital-map";

function app(
  file: string,
  alt: string,
  extras: Partial<CaseStudyMedia> = {},
): CaseStudyMedia {
  return {
    src: `${root}/app/${file}`,
    alt,
    width: 780,
    height: 1688,
    displayWidth: 280,
    ...extras,
  };
}

export const hxrDigitalMapCaseStudy: CaseStudy = {
  slug: "hxr-digital-map",
  title: "HXR Digital Map",
  category: "Product Management · UX",
  year: "2026",
  kicker: "HarvardXR Conference · Product & UX · 2026",
  heroIntro:
    "A mobile web companion for navigating Gund Hall, collecting stamps, and voting during HXR 2026.",
  editorialTitle: "One digital map for the conference day",
  summary:
    "HXR Digital Map is the official digital companion for HarvardXR Conference 2026 — XR +: From Pixel to Voxel. As Product Manager and UX Designer, I defined audience and guest entry, mapped the Gund Hall experience, and shaped the stamp and voting flows. Chloe Ni designed the UI; Wenxin Li built the backend. Together we shipped a Next.js product with live Notion-backed rooms, passport stamps, and one-vote showcase voting.",
  hero: {
    src: `${root}/app/map.png`,
    alt: "HXR Digital Map mobile screen showing the Gund Hall interactive floor plan",
    width: 780,
    height: 1688,
  },
  metadata: [
    { label: "Role", value: "Product Manager & UX Designer" },
    { label: "Team", value: "Chloe Ni · UI Designer · Wenxin Li · Backend" },
    { label: "Organization", value: "HarvardXR" },
    { label: "Stack", value: "Next.js, Vercel, Notion" },
    { label: "Event", value: "HXR Conference 2026 · April 11" },
  ],
  links: [
    { label: "Open the live map", href: "https://hxr-digital-map.vercel.app" },
  ],
  chapters: [
    {
      id: "idea",
      number: "01",
      label: "Idea",
      title: "Help hundreds of attendees move through one dense venue day",
      headline: "Help hundreds of attendees move through one dense venue day",
      lead:
        "Gund Hall holds sessions, demos, check-in, and showcase traffic at once. The product needed a single mobile entry point that could route people into the right identity path, orient them on the floor, record participation, and support Audience Choice voting without adding friction at the door.",
      modules: [
        {
          id: "context",
          title: "Conference context",
          copy:
            "HXR Conference 2026 — XR +: From Pixel to Voxel — asked attendees to move between rooms, collect experiences across tracks, and vote for showcase projects. Volunteers could guide people in person, but the digital layer had to stay clear enough for self-serve use.",
          statement:
            "How might one lightweight product cover entry, wayfinding, participation, and voting for both ticket holders and guests?",
        },
        {
          id: "team",
          title: "Team",
          copy:
            "A small team shipped the live companion for conference day. Product and UX set the flows; UI design shaped the dark mobile interface; backend kept rooms, stamps, and votes in sync with Notion.",
          layout: "credits",
          entries: [
            {
              id: "jiaying",
              title: "Jiaying Li",
              role: "Product Manager & UX Designer",
              copy: "Product scope, audience and guest entry, map and stamp flows, voting rules, and day-of UX.",
            },
            {
              id: "chloe",
              title: "Chloe Ni",
              role: "UI Designer",
              copy: "Visual system, mobile UI, stamp artwork, and the photo-frame capture screens.",
            },
            {
              id: "wenxin",
              title: "Wenxin Li",
              role: "Backend",
              copy: "Auth, Notion-backed rooms and schedule, passport state, stamp frames, and one-vote enforcement.",
            },
          ],
        },
        {
          id: "role",
          title: "My role",
          copy:
            "As Product Manager and UX Designer I owned the feature set, login rules, and day-of flows: what Audience and Guest each needed, which rooms and sessions appeared on the map, how stamps were earned through framed photos, and how showcase voting stayed fair under time pressure.",
          layout: "cards",
          points: [
            {
              term: "Scope",
              detail: "Login, map, schedule, passport stamps, and showcase voting in one mobile web app.",
            },
            {
              term: "Audience clarity",
              detail: "Separate paths for ticket holders and guests, with recoverable check-in help.",
            },
            {
              term: "Live constraints",
              detail: "One vote per person, stamp collection tied to participation, venue-specific rooms.",
            },
          ],
        },
      ],
    },
    {
      id: "audience",
      number: "02",
      label: "Audience",
      title: "Design for two identities sharing one venue",
      headline: "Design for two identities sharing one venue",
      lead:
        "The first product decision was not the map — it was who is entering. Ticket buyers and invited guests needed different proof of access, but the same day-of tools once inside.",
      modules: [
        {
          id: "entry-split",
          title: "Welcome split",
          copy:
            "The app opens with one question: how are you joining? Choosing Audience or Guest routes people into the matching form before any venue content appears.",
          layout: "gallery",
          pair: true,
          media: [
            app(
              "welcome.png",
              "Welcome screen asking whether the user is an Audience or a Guest",
            ),
            app(
              "audience-login.png",
              "Audience login form with first name, last name, and registered email fields",
            ),
          ],
        },
        {
          id: "login-rules",
          title: "Login rules",
          copy:
            "Rules were written for a busy doorway, not a desk. Short fields, explicit matching logic, and a recovery path when registration data did not line up.",
          layout: "cards",
          points: [
            {
              term: "Audience",
              detail:
                "Ticket holders use first name, last name, and the email used to buy the ticket.",
            },
            {
              term: "Guest",
              detail:
                "Speakers, presenters, judges, and sponsors enter their lowercase full name exactly as shared with the HarvardXR team.",
            },
            {
              term: "If login fails",
              detail:
                "Confirmed attendees go to check-in, scan the QR code to self check in, then continue as Audience with staff help if needed.",
            },
          ],
          media: [
            app(
              "guest-login.png",
              "Guest login form with a single full-name field",
            ),
          ],
        },
        {
          id: "day-jobs",
          title: "Jobs after entry",
          copy:
            "Once authenticated, every attendee shares the same three jobs: find a room, prove participation, and decide a favorite showcase project.",
          steps: [
            "Map — open the interactive floor plan, tap a room for agenda and details, and navigate Gund Hall.",
            "Collect stamps — visit listed sessions and locations to build a digital passport of the day.",
            "Vote — during the showcase, choose one favorite project; the system enforces one vote per person.",
          ],
        },
      ],
    },
    {
      id: "uiux",
      number: "03",
      label: "UI/UX",
      title: "A dark mobile companion built for walking and deciding",
      headline: "A dark mobile companion built for walking and deciding",
      lead:
        "The interface is mobile-first, dark, and intentionally shallow. Bottom navigation keeps Map, Schedule, and Passport within one thumb reach while people move through Gund Hall.",
      modules: [
        {
          id: "design-system",
          title: "Interface principles",
          layout: "cards",
          points: [
            {
              term: "Mobile-first",
              detail: "Max-width phone canvas, large tap targets, and forms that fit one hand at check-in.",
            },
            {
              term: "Dark venue UI",
              detail: "Low-glare surfaces and glass-like cards that stay readable under mixed indoor light.",
            },
            {
              term: "Persistent wayfinding",
              detail: "Map / Schedule / Passport stay fixed while detail screens stack above them.",
            },
            {
              term: "One primary action",
              detail: "Each screen leads with a single next step: Enter, Collect Stamp, or Vote.",
            },
          ],
        },
        {
          id: "map-ux",
          title: "Map and room detail",
          copy:
            "The floor plan is the orientation layer. Tapping a room opens an image guide and agenda so attendees can confirm where to walk next without leaving the map mental model.",
          layout: "gallery",
          pair: true,
          media: [
            app(
              "map.png",
              "Interactive Gund Hall map with Piper, Showcase, Chauhaus, and entry labels",
            ),
            app(
              "map-room.png",
              "Room detail sheet for Piper showing agenda blocks and speaker names",
            ),
          ],
        },
        {
          id: "schedule-ux",
          title: "Schedule to stamp",
          copy:
            "Schedule is the time layer. Opening a session reveals speakers, description, room link, and a Collect Stamp action tied to that track.",
          layout: "gallery",
          pair: true,
          media: [
            app(
              "schedule.png",
              "Conference schedule list with timed sessions across Piper and room 111",
            ),
            app(
              "session-detail.png",
              "Event detail for XR + Immersive Arts with collect stamp button",
            ),
          ],
        },
        {
          id: "passport-vote-ux",
          title: "Passport and voting",
          copy:
            "Passport turns visits into a personal record. Voting sits one tap away from the map and locks to a single choice once cast.",
          layout: "gallery",
          pair: true,
          media: [
            app(
              "passport.png",
              "Digital passport showing collected and locked track stamps plus current vote",
            ),
            app(
              "vote.png",
              "Showcase vote gallery with project cards and confirmed vote state",
            ),
          ],
        },
      ],
    },
    {
      id: "stamps",
      number: "04",
      label: "Stamps",
      title: "Collect the moment, not just the stamp",
      headline: "Discover, capture, collect, and share",
      lead:
        "The stamp and camera are one continuous interaction. Attendees discover a track identity, take a photo inside the branded frame, unlock the matching passport stamp, then save or share the result as a keepsake.",
      modules: [
        {
          id: "stamp-set",
          title: "01 · Eight tracks, eight identities",
          copy:
            "Eight conference tracks each have a glass-like stamp. The passport shows collected stamps in color and locks the rest until the matching session or location is visited.",
          media: [
            {
              src: `${root}/stamps/stamps-grid.png`,
              alt: "Grid of eight HXR 2026 digital stamps for conference tracks",
              width: 928,
              height: 488,
            },
          ],
        },
        {
          id: "photo-frame-flow",
          title: "02—04 · Capture, collect, share",
          copy:
            "Collect Stamp opens the camera inside an HXR frame. The paired screenshots make the state change explicit: live capture on the left, completed card and actions on the right.",
          layout: "gallery",
          entries: [
            {
              id: "capture",
              title: "Before · framed capture",
              role: "Capture",
              media: app(
                "camera-capture-v2.png",
                "Camera screen with HXR photo frame overlay before taking a stamp photo",
              ),
            },
            {
              id: "share",
              title: "After · stamp collected",
              role: "Collect & share",
              media: app(
                "camera-framed-v2.png",
                "After capture screen with COLLECTED badge, framed photo, stamp, and share actions",
              ),
            },
          ],
          steps: [
            "Open the camera from the session",
            "Capture inside the branded frame",
            "Unlock the matching passport stamp",
            "Save, share, or retake",
          ],
        },
        {
          id: "frame-keepsake",
          title: "Framed keepsake",
          copy:
            "Once the shutter fires, the frame locks the image, marks the stamp as collected, and offers Share & Collect Stamp, Save to Gallery, or Retake. The stamped card becomes both proof of visit and a shareable artifact.",
          layout: "cards",
          points: [
            {
              term: "Framed capture",
              detail: "Camera UI composites the live photo into the branded HXR frame before save.",
            },
            {
              term: "Stamp unlock",
              detail: "A successful capture writes the track stamp into the attendee’s passport.",
            },
            {
              term: "Share / save / retake",
              detail: "Attendees can publish the card, keep it locally, or shoot again.",
            },
          ],
        },
      ],
    },
    {
      id: "architecture",
      number: "05",
      label: "Architecture",
      title: "A thin client over live conference data",
      headline: "A thin client over live conference data",
      lead:
        "The product had to change with the conference: rooms, sessions, guest lists, stamps, and votes. The architecture keeps the mobile UI thin and pushes authority to server routes backed by Notion.",
      modules: [
        {
          id: "system-diagram",
          title: "System overview",
          copy:
            "The architecture is organized around three responsibilities: a focused attendee experience, a server-side product-rules layer, and live conference content managed in Notion.",
          layout: "architecture",
          architecture: [
            {
              number: "01",
              title: "Client",
              description: "Mobile-first attendee experience",
              items: ["Welcome", "Map + rooms", "Schedule", "Passport", "Voting"],
            },
            {
              number: "02",
              title: "Edge / API",
              description: "Next.js route handlers on Vercel",
              items: ["Auth", "Rooms", "Schedule", "Passport", "Stamp frame", "Vote"],
            },
            {
              number: "03",
              title: "Data",
              description: "Notion as the live conference CMS",
              items: ["Attendees + guests", "Rooms + sessions", "Passport + stamps", "Votes"],
              tone: "accent",
            },
          ],
        },
        {
          id: "api-surface",
          title: "Key endpoints",
          copy:
            "Product rules live in the API layer so door staff and attendees share one source of truth.",
          layout: "cards",
          points: [
            {
              term: "/api/auth/login",
              detail: "Validates Audience ticket fields or Guest list names and returns a session user.",
            },
            {
              term: "/api/rooms · /api/schedule",
              detail: "Powers the floor plan, room sheets, and timed agenda.",
            },
            {
              term: "/api/passport · /api/stamp-frame",
              detail:
                "Tracks collected stamps and serves stamp artwork plus the photo-frame overlay.",
            },
            {
              term: "/camera",
              detail:
                "Client route that composites the live photo into the HXR frame before collecting the stamp.",
            },
            {
              term: "/api/vote",
              detail: "Stores and returns the single showcase vote for each authenticated person.",
            },
          ],
        },
      ],
    },
    {
      id: "outcome",
      number: "06",
      label: "Outcome",
      title: "A live product for conference day",
      headline: "A live product for conference day",
      lead:
        "The map shipped for HXR Conference 2026 and remains available as the public digital companion for the event.",
      modules: [
        {
          id: "shipped",
          title: "What shipped",
          layout: "cards",
          points: [
            {
              term: "Live web app",
              detail: "https://hxr-digital-map.vercel.app",
            },
            {
              term: "Identity rules",
              detail: "Audience ticket login, guest-list login, and check-in recovery.",
            },
            {
              term: "Day-of toolkit",
              detail:
                "Interactive map, schedule, digital stamps with photo frames, and one-vote showcase selection.",
            },
          ],
          statement:
            "The product job was not to add another brochure — it was to keep people oriented, participating, and deciding inside one shared event system.",
        },
      ],
    },
  ],
};
