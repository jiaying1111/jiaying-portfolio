import type { CaseStudy } from "@/data/case-studies/types";

export const dreamwhorlCaseStudy: CaseStudy = {
  "slug": "dreamwhorl",
  "category": "Product Design",
  "year": "2026",
  "kicker": "Interactive AI Artwork · 2026",
  "heroIntro": "A shell of half-remembering where children and AI transform fragmented dreams into evolving visual worlds.",
  "editorialTitle": "Holding a dream between remembering and forgetting",
  "summary": "DreamWhorl is an interactive artwork designed for children. Voice, writing, drawing, and physical gestures guide an agent system that generates and transforms dream-inspired visuals into a shifting kaleidoscope, exploring shared agency between human imagination and machine creativity.",
  "hero": {
    "src": "/images/projects/dreamwhorl/refresh/hero.jpg",
    "width": 1814,
    "height": 1280,
    "alt": "DreamWhorl in use alongside its circular kaleidoscope display"
  },
  "metadata": [
    {
      "label": "Role",
      "value": "UIUX, Experience Design, Flow Design"
    },
    {
      "label": "Award",
      "value": "Best Structural Design Award — Bambu Lab 3D Printing Track, Migratory Birds 300 Hackathon"
    },
    {
      "label": "Methods",
      "value": "Generative AI, embodied interaction"
    },
    {
      "label": "Media",
      "value": "Shell interface, mobile app, circular display"
    }
  ],
  "links": [{ "label": "Video link", "href": "https://youtu.be/UtzZnKh94Ow" }],
  "chapters": [
    {
      "id": "idea",
      "number": "01",
      "label": "Idea",
      "title": "What if children could hold their dreams in their hands?",
      "headline": "What if children could hold their dreams in their hands?",
      "lead": "Dreams rarely return as complete stories. They survive as colors, objects, feelings, and disconnected images. DreamWhorl treats this incompleteness as a creative resource rather than a problem to solve.",
      "modules": [
        {
          "id": "why-dreams",
          "title": "Why dreams?",
          "copy": "A survey with 105 respondents examined how children remember and share dreams. The findings suggest that recall is fragmented and that children often need an invitation before beginning to describe what they experienced.",
          "metrics": [
            {
              "value": "105",
              "label": "respondents in the public survey"
            },
            {
              "value": "55.2%",
              "label": "reported children remembering dream fragments"
            },
            {
              "value": "54.3%",
              "label": "reported dreams being shared when children were asked"
            }
          ],
          "statement": "Children do not lack imagination. What is missing is a medium that connects language, images, gestures, and stories."
        },
        {
          "id": "why-kaleidoscope",
          "title": "Why a kaleidoscope?",
          "copy": "A kaleidoscope creates continuously changing patterns from a limited set of fragments. Like a dream, it is non-linear, fluid, and difficult to interpret in one fixed way.",
          "layout": "cards",
          "points": [
            {
              "term": "Fragmented",
              "detail": "Creates patterns from a limited set of elements"
            },
            {
              "term": "Non-linear",
              "detail": "Viewed outside a single narrative sequence"
            },
            {
              "term": "Fluid and changing",
              "detail": "Continuously transforms through rotation"
            },
            {
              "term": "Difficult to interpret in a fixed way",
              "detail": "Inspires new associations every time it is viewed"
            }
          ]
        },
        {
          "id": "co-creation",
          "title": "A medium for continued imagination",
          "copy": "DreamWhorl combines remembered fragments with a kaleidoscope that can always change. AI proposes possibilities; the child decides what to develop and what to save."
        }
      ]
    },
    {
      "id": "research",
      "number": "02",
      "label": "Research",
      "title": "Keeping the child in control of the dream",
      "headline": "Keeping the child in control of the dream",
      "lead": "Generative models naturally complete missing information. For a child who cannot fully explain why an image feels wrong, a polished result may overwrite the uncertainty and personal meaning of the original dream.",
      "modules": [
        {
          "id": "design-position",
          "title": "Design position",
          "copy": "DreamWhorl keeps generation open and reversible. The model may propose directions, but it does not decide what the dream means. Only the child’s decision to save turns a possibility into a personal artifact.",
          "layout": "cards",
          "points": [
            {
              "term": "Ambiguity",
              "detail": "Fragments remain incomplete enough to support multiple readings."
            },
            {
              "term": "Iteration",
              "detail": "No generated image needs to become the final version."
            },
            {
              "term": "Embodiment",
              "detail": "Physical gestures create low-threshold moments of participation."
            },
            {
              "term": "Final authority",
              "detail": "The child decides whether a result should be saved."
            }
          ]
        },
        {
          "id": "visual-plurality",
          "title": "Visual plurality",
          "copy": "Painting, geometric composition, and doodling offer different ways to express a dream. These examples pair visual variety with the same child-led interaction.",
          "layout": "gallery",
          "entries": [
            {
              "id": "painting",
              "title": "Painting",
              "copy": "Soft colour and atmospheric imagery.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/painting.png",
                "width": 380,
                "height": 371,
                "alt": "Painting dream reference"
              }
            },
            {
              "id": "geometric",
              "title": "Geometric",
              "copy": "Dream fragments expressed through pattern and structure.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/geometric.png",
                "width": 405,
                "height": 405,
                "alt": "Geometric dream reference"
              }
            },
            {
              "id": "doodle",
              "title": "Doodle",
              "copy": "Loose marks and playful figures.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/doodle.png",
                "width": 405,
                "height": 405,
                "alt": "Doodle dream reference"
              }
            }
          ]
        },
        {
          "id": "nightmare-study",
          "title": "Reimagining a frightening dream",
          "copy": "This paired example shows a dark scene reinterpreted through a lighter palette. The transformation is an invitation to revise the dream, guided by the child’s words.",
          "pair": true,
          "media": [
            {
              "src": "/images/projects/dreamwhorl/refresh/nightmare.png",
              "width": 402,
              "height": 402,
              "alt": "Dark dream scene",
              "caption": "Before"
            },
            {
              "src": "/images/projects/dreamwhorl/refresh/reimagined.png",
              "width": 402,
              "height": 402,
              "alt": "Lighter reinterpretation of the same scene",
              "caption": "Reimagined"
            }
          ]
        }
      ]
    },
    {
      "id": "process",
      "number": "03",
      "label": "Process",
      "title": "From a familiar object to a repeatable interaction",
      "headline": "From a familiar object to a repeatable interaction",
      "lead": "The shell gives the experience a physical starting point. Form development and a working prototype connect that gesture to a sequence of speaking, viewing, changing, and saving.",
      "modules": [
        {
          "id": "shell-origin",
          "title": "A familiar gesture",
          "copy": "Holding a shell close to the ear suggests listening and imagining. That gesture informed a handheld object children can speak into and look through.",
          "pair": true,
          "media": [
            {
              "src": "/images/projects/dreamwhorl/refresh/shell-inspiration-1.png",
              "width": 666,
              "height": 828,
              "alt": "Child holding a shell to their ear"
            },
            {
              "src": "/images/projects/dreamwhorl/refresh/shell-inspiration-2.png",
              "width": 530,
              "height": 820,
              "alt": "Child listening to a seashell"
            }
          ]
        },
        {
          "id": "shell-development",
          "title": "Form and controls",
          "copy": "The shell-like body combines a viewing opening with physical controls. These views show the overall form, its profile, and the button surface.",
          "layout": "gallery",
          "entries": [
            {
              "id": "shell-design",
              "title": "Overall form",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/shell-design.png",
                "width": 1218,
                "height": 944,
                "alt": "Overall form of DreamWhorl"
              }
            },
            {
              "id": "shell-profile",
              "title": "Side profile",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/shell-profile.png",
                "width": 2007,
                "height": 1173,
                "alt": "Side profile of DreamWhorl"
              }
            },
            {
              "id": "shell-controls",
              "title": "Physical controls",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/shell-controls.png",
                "width": 680,
                "height": 834,
                "alt": "Physical controls of DreamWhorl"
              }
            }
          ]
        },
        {
          "id": "prototype-development",
          "title": "Building the prototype",
          "copy": "Electronics assembly and the physical shell were brought together in a working prototype. These photographs document the build process.",
          "pair": true,
          "media": [
            {
              "src": "/images/projects/dreamwhorl/refresh/electronics.jpg",
              "width": 5712,
              "height": 4284,
              "alt": "Electronics and wiring during prototype assembly",
              "caption": "Electronics assembly"
            },
            {
              "src": "/images/projects/dreamwhorl/refresh/prototype.jpg",
              "width": 5712,
              "height": 4284,
              "alt": "DreamWhorl shell during prototype construction",
              "caption": "Physical prototype"
            }
          ]
        },
        {
          "id": "ui-wireframes",
          "title": "Planning the companion app",
          "copy": "Low-fidelity wireframes map the path from recording a dream to exploring, saving, and returning to it. The screen studies establish the information hierarchy before the final visual design.",
          "media": [
            {
              "src": "/images/projects/dreamwhorl/uiux/wireframes.png",
              "width": 4023,
              "height": 2058,
              "alt": "wireframes interface"
            }
          ]
        },
        {
          "id": "interaction-sequence",
          "title": "Interaction flow",
          "copy": "Follow the experience from a spoken dream to a saved kaleidoscope. Each step pairs the action with a photograph from the interaction demonstration.",
          "entries": [
            {
              "id": "speak",
              "title": "01 · Speak a dream",
              "copy": "Speak into the shell using the familiar gesture of talking to a seashell.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/speak.png",
                "width": 656,
                "height": 367,
                "alt": "01 · Speak a dream"
              }
            },
            {
              "id": "listen",
              "title": "02 · Interpret the fragments",
              "copy": "The system transcribes the words and identifies emotional cues and keywords while the child holds the viewer.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/listen.png",
                "width": 661,
                "height": 367,
                "alt": "02 · Interpret the fragments"
              }
            },
            {
              "id": "generate",
              "title": "03 · See the dream",
              "copy": "A dream image becomes available to explore through the viewer.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/generate.png",
                "width": 661,
                "height": 368,
                "alt": "03 · See the dream"
              }
            },
            {
              "id": "shake",
              "title": "04 · Shake to regenerate",
              "copy": "Shake the shell to explore another visual interpretation.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/shake.png",
                "width": 661,
                "height": 383,
                "alt": "04 · Shake to regenerate"
              }
            },
            {
              "id": "save",
              "title": "05 · Revise or save",
              "copy": "Use the physical controls to continue revising or keep a chosen result.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/save.png",
                "width": 661,
                "height": 367,
                "alt": "05 · Revise or save"
              }
            },
            {
              "id": "revisit",
              "title": "06 · Explore and return",
              "copy": "View the evolving kaleidoscope. A saved dream can become the starting point for a later session.",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/revisit.png",
                "width": 661,
                "height": 367,
                "alt": "06 · Explore and return"
              }
            }
          ]
        },
        {
          "id": "agency-loop",
          "title": "Agency loop",
          "copy": "The agent extracts motifs, asks questions when needed, supports nightmare reframing, generates alternatives, and learns from saved dreams. The loop ends only when the child chooses to archive an interpretation.",
          "layout": "cards",
          "points": [
            {
              "term": "Telling dream",
              "detail": "The child speaks a remembered object, place, feeling, or event. The agent extracts semantic and emotional cues."
            },
            {
              "term": "Drafting dream",
              "detail": "Sketches and marks become visual fragments. The agent infers composition and style from what is drawn."
            },
            {
              "term": "Clarifying content",
              "detail": "When something is still unclear, the agent asks a targeted question. The child refines the details in their own words."
            },
            {
              "term": "Reimagine ending",
              "detail": "For a nightmare, the child can reframe what feels threatening. The agent generates alternative endings from those words, not a generic happy scene."
            },
            {
              "term": "Save dream",
              "detail": "Only the child’s approval turns an interpretation into something kept. Saved dreams become a personal archive."
            },
            {
              "term": "Shake whorl",
              "detail": "Shaking the shell asks for another version. The agent explores an alternate state of the same dream."
            },
            {
              "term": "Turn whorl",
              "detail": "Turning the shell moves between variations. The image morphs continuously instead of jumping to a finished picture."
            },
            {
              "term": "Habit",
              "detail": "Over time the agent learns from what was kept, changed, or refused, and builds a more personal set of dream preferences."
            }
          ],
          "media": [
            {
              "src": "/images/projects/dreamwhorl/process/agency-loop.jpg",
              "width": 2200,
              "height": 2063,
              "alt": "Diagram of the DreamWhorl agency loop"
            }
          ]
        }
      ]
    },
    {
      "id": "outcome",
      "number": "04",
      "label": "Outcome",
      "title": "One dream, across the shell and the screen",
      "headline": "One dream, across the shell and the screen",
      "lead": "The final concept connects the handheld viewer, a companion interface, and a circular visual output.",
      "modules": [
        {
          "id": "app-journey",
          "title": "From a new dream to a personal diary",
          "copy": "The companion app follows three moments: begin with a dream, explore its expression, and return to the saved experience.",
          "layout": "gallery",
          "entries": [
            {
              "id": "home",
              "title": "01 · Begin",
              "copy": "The home screen brings a new dream, the connected device, and recent memories together.",
              "media": {
                "src": "/images/projects/dreamwhorl/uiux/home.png",
                "width": 812,
                "height": 1484,
                "alt": "home interface"
              }
            },
            {
              "id": "record-dream",
              "title": "02 · Record",
              "copy": "Voice, text, and drawing provide different starting points for expression.",
              "media": {
                "src": "/images/projects/dreamwhorl/uiux/record-dream.png",
                "width": 812,
                "height": 1478,
                "alt": "record dream interface"
              }
            },
            {
              "id": "choose-style",
              "title": "03 · Choose a style",
              "copy": "Preview a visual direction before continuing with the dream.",
              "media": {
                "src": "/images/projects/dreamwhorl/uiux/choose-style.png",
                "width": 812,
                "height": 1482,
                "alt": "choose style interface"
              }
            },
            {
              "id": "diary-gallery",
              "title": "04 · Browse memories",
              "copy": "The gallery brings saved dreams together for revisiting.",
              "media": {
                "src": "/images/projects/dreamwhorl/uiux/diary-gallery.png",
                "width": 810,
                "height": 1480,
                "alt": "diary gallery interface"
              }
            },
            {
              "id": "diary-calendar",
              "title": "05 · Return by date",
              "copy": "The calendar connects individual dreams with the days they were recorded.",
              "media": {
                "src": "/images/projects/dreamwhorl/uiux/diary-calendar.png",
                "width": 810,
                "height": 1484,
                "alt": "diary calendar interface"
              }
            },
            {
              "id": "growth-report",
              "title": "06 · Review patterns",
              "copy": "The report presents recorded dream categories and frequency as a retrospective overview.",
              "media": {
                "src": "/images/projects/dreamwhorl/uiux/growth-report.png",
                "width": 814,
                "height": 1482,
                "alt": "growth report interface"
              }
            }
          ]
        },
        {
          "id": "companion-interface",
          "title": "Save a dream and enter its kaleidoscope",
          "copy": "The companion interface presents the dream image and description alongside actions to enter, continue, or delete it. The viewer screen then shows the circular kaleidoscope.",
          "pair": true,
          "media": [
            {
              "src": "/images/projects/dreamwhorl/refresh/dream-app.png",
              "width": 490,
              "height": 934,
              "alt": "Dream details interface with enter, continue, and delete controls",
              "caption": "Dream details"
            },
            {
              "src": "/images/projects/dreamwhorl/refresh/kaleidoscope-app.png",
              "width": 490,
              "height": 931,
              "alt": "Circular kaleidoscope interface",
              "caption": "Kaleidoscope view"
            }
          ]
        },
        {
          "id": "final-scenes",
          "title": "The final object",
          "copy": "Rendered scenes show the shell as a handheld viewer and as an object in a child’s room.",
          "layout": "gallery",
          "entries": [
            {
              "id": "view-1",
              "title": "Handheld view",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/view-1.png",
                "width": 9501,
                "height": 8034,
                "alt": "DreamWhorl render: Handheld view"
              }
            },
            {
              "id": "view-2",
              "title": "Kaleidoscope detail",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/view-2.png",
                "width": 9501,
                "height": 7125,
                "alt": "DreamWhorl render: Kaleidoscope detail"
              }
            },
            {
              "id": "day-scene",
              "title": "In the room",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/day-scene.png",
                "width": 10173,
                "height": 8034,
                "alt": "DreamWhorl render: In the room"
              }
            },
            {
              "id": "night-scene",
              "title": "At the bedside",
              "media": {
                "src": "/images/projects/dreamwhorl/refresh/night-scene.png",
                "width": 10176,
                "height": 7125,
                "alt": "DreamWhorl render: At the bedside"
              }
            }
          ]
        },
        {
          "id": "final-video",
          "title": "Final video",
          "copy": "The film demonstrates the complete experience from dream expression and generation to physical manipulation, kaleidoscopic transformation, and saving.",
          "media": [
            {
              "kind": "video",
              "src": "https://youtu.be/UtzZnKh94Ow",
              "youtube": "https://youtu.be/UtzZnKh94Ow",
              "poster": "/images/projects/dreamwhorl/refresh/hero.jpg",
              "alt": "DreamWhorl in use",
              "caption": "Speaking, drawing, turning, shaking, and saving become equally meaningful parts of co-creation.",
              "width": 960,
              "height": 540
            }
          ]
        },
        {
          "id": "my-role",
          "title": "My role",
          "copy": "I designed the child-facing interface and the interaction path across the companion app and the physical shell.",
          "layout": "cards",
          "points": [
            {
              "term": "UIUX",
              "detail": "The child-facing interface across the companion app and the circular shell display, kept readable at a child’s scale."
            },
            {
              "term": "Experience Design",
              "detail": "Speaking, watching, shaking, and saving as one continuous experience instead of separate digital and physical tasks."
            },
            {
              "term": "Flow Design",
              "detail": "The path from the first dream utterance through style change, revision, kaleidoscope, and return."
            }
          ]
        }
      ]
    }
  ]
};
