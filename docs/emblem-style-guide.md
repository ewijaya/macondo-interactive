# Emblem Style Guide — Macondo Atlas engravings

Every illustration in the atlas is an **emblematic engraving**: a symbolic object-scene
drawn in fine ink linework, framed like a plate in an old illustrated edition. No faces,
no figures' faces (hands, feet, silhouetted bodies from behind are allowed). One accent
color per plate. These rules are strict — 81 plates by four hands must read as one
engraver's work.

## Formats

| Kind | viewBox | Frame |
|---|---|---|
| Character medallion | `0 0 200 200` | double ring: `<circle cx=100 cy=100 r=94 stroke-width=1/>` + `<circle … r=88 stroke-width=0.5/>` |
| Place plate | `0 0 240 180` | double rect: `<rect x=4 y=4 width=232 height=172 rx=2 stroke-width=1/>` + `<rect x=9 y=9 width=222 height=162 rx=1 stroke-width=0.5/>` |
| Motif medallion | `0 0 200 200` | same as character |
| Era banner | `0 0 360 140` | double rect: `<rect x=4 y=4 width=352 height=132 rx=2 stroke-width=1/>` + `<rect x=9 y=9 width=342 height=122 rx=1 stroke-width=0.5/>` |

## Root element (exact)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="DESCRIPTION"></svg>
```

Ink is always `currentColor`, inherited from the root — never hardcode black. The page
sets the ink color when the SVG is inlined.

## Line language

- **Main contours**: `stroke-width="2"` — the subject's defining outline.
- **Default/secondary lines**: inherit root `1.5`.
- **Detail & hatching**: `stroke-width="0.75"` (never below 0.5).
- **Hatching**: parallel straight or gently curved lines, spacing ≥ 3 units, following
  the form. At most two hatched regions per plate. Stipple allowed instead: dots
  `fill="currentColor" stroke="none" r="0.7"`, sparse.
- **Ghost convention**: anything dead, remembered, or prophesied is drawn
  `stroke-dasharray="3 3"` at width 1. Reserve dashes for this meaning only.
- **Ground**: subjects sit on a baseline (a single horizontal stroke, may break) or a
  shadow (flat ellipse, hatched or stippled) — nothing floats unless it is meant to
  float (levitation, ascension), in which case add 2–3 short vertical motion ticks.

## The accent

Exactly **one accent element or one tight accent group** per plate:

- Accent fill: `fill="var(--em-accent, #f2b705)" stroke="none"` (or keep a currentColor
  outline over the fill).
- Accent stroke (when a filled shape is wrong): `stroke="var(--em-accent, #f2b705)"`.
- The accent goes on the plate's *meaning*: the gold fish, the butterfly, the flame, the
  banana. Everything else is ink.

## Allowed / forbidden

- Elements: `path, circle, ellipse, rect, line, polyline, polygon, g` only.
- **No** `text`, gradients, filters, masks, clip-paths, images, transforms on the root,
  or CSS classes/styles inside the file (presentation attributes only).
- Composition: subject occupies 55–70% of the inner field; leave real negative space;
  asymmetry is welcome. Center of visual mass slightly below center reads calm.
- Curves: prefer `path` with cubic béziers over polygonal approximations. Round numbers
  to one decimal at most.
- Target 25–70 drawing elements per plate. Under 20 reads empty; over 90 reads noisy.

## File placement

`src/assets/emblems/<kind>/<slug>.svg` where kind ∈ `characters | places | motifs | eras`
(plus `hero.svg` at the root of `emblems/`). Slug = registry slug; era slugs are the six
era keys. `aria-label`: a short plain description, e.g. "A little gold fish ringed by
thirty-two radiating strokes".
