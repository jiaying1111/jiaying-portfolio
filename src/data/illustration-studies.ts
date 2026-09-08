export type IllustrationStill = {
  src: string;
  alt: string;
  width: number;
  height: number;
  wide?: boolean;
};

export type IllustrationStudy = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  summary: string[];
  gallery: IllustrationStill[];
};

function img(
  slug: string,
  file: string,
  width: number,
  height: number,
  wide = false,
): IllustrationStill {
  return {
    src: `/images/artwork/${slug}/detail/${file}`,
    alt: "",
    width,
    height,
    wide: wide || undefined,
  };
}

export const illustrationStudies: IllustrationStudy[] = [
  {
    slug: "circular-ruins",
    title: "The Circular Ruins",
    year: "2025",
    medium: "Collage, ink, watercolor, graphite",
    summary: [
      "Inspired by Jorge Luis Borges’s The Circular Ruins, this project transforms the story’s recursive dream-world into a modular visual narrative system. In Borges’s tale, creation begins in a dream and loops back onto itself—the dreamer who shapes another man eventually discovers he is also dreamed, dissolving any fixed origin or ending. This collapse of linear time forms the foundation of the project.",
      "Using the logic of a board game and the language of visual narrative painting, the work embraces non-linear storytelling: scenes can be rearranged, reordered, or repeated, allowing the viewer to assemble the dream in countless ways. There is no single beginning or conclusion—only shifting sequences that echo Borges’s circular structure.",
    ],
    gallery: [
      img("circular-ruins", "01.jpg", 1400, 895, true),
      img("circular-ruins", "02.jpg", 1400, 1028),
      img("circular-ruins", "03.jpg", 1400, 1028),
      img("circular-ruins", "04.jpg", 1400, 923),
      img("circular-ruins", "05.jpg", 1400, 923),
      img("circular-ruins", "06.jpg", 1400, 895, true),
    ],
  },
  {
    slug: "dreamgaze",
    title: "DreamGaze",
    year: "2024",
    medium: "Adobe Illustrator",
    summary: [
      "DreamGaze is a creative studio that explores the space between dream and reality. It designs visual experiences that feel poetic, immersive, and thoughtful, aiming to awaken imagination and create moments of quiet wonder. In this imagined system, tears are recycled through an alchemical process to produce new lenses.",
      "For this project, I designed three visual systems that translate this concept into a cohesive visual language.",
    ],
    gallery: [
      img("dreamgaze", "01.jpg", 1400, 1400, true),
      img("dreamgaze", "02.jpg", 1400, 1050),
      img("dreamgaze", "03.jpg", 1400, 1050),
      img("dreamgaze", "04.jpg", 1400, 933),
      img("dreamgaze", "05.jpg", 1400, 933),
      img("dreamgaze", "06.jpg", 1400, 1120),
      img("dreamgaze", "07.jpg", 1400, 1120),
      img("dreamgaze", "08.jpg", 1400, 1050),
      img("dreamgaze", "09.jpg", 1400, 933),
      img("dreamgaze", "10.jpg", 1400, 1120),
      img("dreamgaze", "11.jpg", 1400, 977),
      img("dreamgaze", "12.jpg", 1400, 933),
      img("dreamgaze", "13.jpg", 1400, 1750),
      img("dreamgaze", "14.jpg", 1400, 977),
      img("dreamgaze", "15.jpg", 1400, 1120),
      img("dreamgaze", "16.jpg", 1400, 1050),
      img("dreamgaze", "17.jpg", 1400, 933),
    ],
  },
  {
    slug: "animal-city",
    title: "Animal City",
    year: "2024",
    medium: "Collage",
    summary: [
      "This work explores the complex and fluid relationship between humans and animals through a series of interactive box installations that can be disassembled, reassembled, folded, and unfolded.",
      "These interactive forms metaphorically capture the tension between intimacy and detachment in our relationship with animals: humans often observe, deconstruct, and dissect animal (and human) bodies with mechanical detachment, constructing frameworks to understand the world. When disassembled, the boxes reveal fragmented, unrecognizable organs; once reassembled, they instantly coalesce into familiar biological forms—bodies reduced to detachable symbols, stripped of life’s warmth, transformed into cold mechanical components.",
      "Infinitely reconfigurable, these boxes are displayed on sparse shelves, forming a miniature theater. Like monuments in a void-like city, they appear precise yet fragile, hinting at an order perpetually on the verge of collapse. Scattered miniature houses, ladders, and figures deliberately disrupt spatial scale, inviting viewers into a disorienting viewing experience. This provokes reflection: as we endlessly dismember and reconstruct life, what position do humans themselves occupy?",
    ],
    gallery: [
      img("animal-city", "01.jpg", 1400, 1282, true),
      img("animal-city", "02.jpg", 1400, 1050),
      img("animal-city", "03.jpg", 1400, 1016),
      img("animal-city", "04.jpg", 1400, 1050),
      img("animal-city", "05.jpg", 1400, 1867),
    ],
  },
  {
    slug: "bodigram",
    title: "Bodigram",
    year: "2025",
    medium: "Collage",
    summary: [
      "Bodigram is an interactive, card-based project that invites viewers to construct their own narratives through intentional choice. Participants select cards from four piles—emotions, nouns, adjectives, and actions—each corresponding to a different part of a human body. As viewers choose and assemble these elements, a personal narrative gradually takes shape. Participants are encouraged to record the words they select and reflect on their feelings throughout the process, making the experience both creative and introspective. Consisting of 20 cards in total, Bodigram explores how self-authored decisions and reflection can shape meaning and identity.",
    ],
    gallery: [
      img("bodigram", "01.jpg", 1400, 933, true),
      img("bodigram", "02.jpg", 1400, 945),
      img("bodigram", "03.jpg", 1400, 862),
      img("bodigram", "04.jpg", 1400, 872),
      img("bodigram", "05.jpg", 1400, 933),
    ],
  },
  {
    slug: "hypnagogia",
    title: "Hypnagogia",
    year: "2024",
    medium: "Collage",
    summary: [
      "Hypnagogia explores the space where waking and dreaming meet. In this blurry state, time feels unstable, memories mix, and reality shifts. This interactive artwork moves away from fixed storytelling, letting the audience help create the narrative. With movable pieces, viewers can arrange, take apart, and rebuild the composition in their own way. Each interaction creates new possibilities, turning the audience into active participants. The line between memory and reality expands as people interpret and connect the elements differently, making endless versions of the story.",
    ],
    gallery: [
      img("hypnagogia", "01.jpg", 1400, 1061),
      img("hypnagogia", "02.jpg", 1400, 953),
      img("hypnagogia", "03.jpg", 1400, 749),
      img("hypnagogia", "04.jpg", 1400, 1050),
    ],
  },
  {
    slug: "imaginary-beings",
    title: "Imaginary Beings",
    year: "2025",
    medium: "Collage",
    summary: [
      "Imaginary beings born from memory, intuition, and incomplete forms.",
    ],
    gallery: [img("imaginary-beings", "01.jpg", 1400, 1031, true)],
  },
  {
    slug: "your-destination",
    title: "Your Destination",
    year: "2023",
    medium: "Blender, Nomad",
    summary: [
      "I reimagined the concept of Google Maps in a novel way to explore the overwhelming impact of digital technology on our lives. I started to think about a place that Google Maps could never be reached or found due to its error even though we were infinitely close to it. Instead of using Google Map street view directly, I made a model with surreal landscapes and imported 3D scanned buildings and houses in real life, merging the physical and digital world. Furthermore, I enhanced this model with brush strokes in Procreate, aiming to create a highly magnified world that conveys feelings of uncertainty and disorientation, thus reflecting on our complex relationship with technology.",
    ],
    gallery: [
      img("your-destination", "01.jpg", 1400, 1051),
      img("your-destination", "02.jpg", 1400, 1052),
      img("your-destination", "03.jpg", 1400, 1053),
      img("your-destination", "04.jpg", 1400, 1052),
    ],
  },
  {
    slug: "invisible-man",
    title: "The Invisible Man",
    year: "2024",
    medium: "Adobe Illustrator",
    summary: [
      "A conceptual game adaptation of The Invisible Man (H. G. Wells), exploring narrative through UI and level design.",
    ],
    gallery: [
      img("invisible-man", "01.jpg", 1400, 870),
      img("invisible-man", "02.jpg", 1400, 870),
      img("invisible-man", "03.jpg", 1400, 870),
      img("invisible-man", "04.jpg", 1400, 870),
      img("invisible-man", "05.jpg", 1400, 2029),
      img("invisible-man", "06.jpg", 1400, 2013),
    ],
  },
];
