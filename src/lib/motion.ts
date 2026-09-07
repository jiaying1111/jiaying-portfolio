/** Homepage hero: one slide is shown for seven seconds before advancing. */
export const HERO_AUTOPLAY_MS = 7000;

/** Homepage hero horizontal slide duration. */
export const HERO_SLIDE_MS = 900;

/** Homepage Experience card default <-> hover image fade and scale. */
export const CARD_CROSSFADE_MS = 520;

/** Homepage Experience card overlay and title fade. */
export const CARD_OVERLAY_FADE_MS = 420;

/** Homepage Experience card hover loop: 02 -> 03 -> 02 -> 01. */
export const CARD_HOVER_LOOP_INTERVAL_MS = 2000;

/** Hover-frame indices into each card's three hover images. */
export const CARD_HOVER_LOOP_ORDER = [1, 2, 1, 0] as const;

/** Experience / Artwork listing hover loop: frame-01 -> 02 -> 03 -> 01. */
export const HOVER_LOOP_INTERVAL_MS = CARD_HOVER_LOOP_INTERVAL_MS;

/** Shared crossfade for stacked stills: hover loops and photo carousels. */
export const HOVER_LOOP_CROSSFADE_MS = CARD_CROSSFADE_MS;

/** Homepage Artwork rail: duration of one full eight-tile cycle. */
export const ARTWORK_RAIL_DURATION_MS = 45000;

/** Auto photo carousels share the homepage hero dwell time. */
export const CASE_CAROUSEL_AUTOPLAY_MS = HERO_AUTOPLAY_MS;

/** Auto photo carousel crossfade, same duration as other still fades. */
export const CASE_CAROUSEL_FADE_MS = CARD_CROSSFADE_MS;
