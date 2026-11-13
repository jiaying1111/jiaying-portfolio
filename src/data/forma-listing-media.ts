import { homepageCardAssets, type HomepageCardAssets, type HoverLoopSet } from "@/data/assets";

export const formaListingMedia = {
  "forma": {
    "id": "experience-forma",
    "width": 623,
    "height": 420,
    "frames": [
      {
        "id": "forma-element-0",
        "src": "/images/projects/forma/elements/shadow.jpg",
        "width": 900,
        "height": 577,
        "alt": "Forma source artwork"
      },
      {
        "id": "forma-element-1",
        "src": "/images/projects/forma/elements/wood.jpg",
        "width": 900,
        "height": 600,
        "alt": ""
      }
    ]
  }
} satisfies Record<string, HoverLoopSet>;

export const formaListingCards = {
  "forma": {
    "default": {
      "id": "forma-element-0",
      "src": "/images/projects/forma/elements/shadow.jpg",
      "width": 900,
      "height": 577,
      "alt": "Forma source artwork"
    },
    "hoverFrames": [
      {
        "id": "forma-element-1",
        "src": "/images/projects/forma/elements/wood.jpg",
        "width": 900,
        "height": 600,
        "alt": ""
      }
    ],
    "overlay": homepageCardAssets["digital-nomad"].overlay
  }
} satisfies Record<string, HomepageCardAssets>;
