// Build-time lookup tables and reverse indexes over the atlas data.
import type { Character, Place, TimelineEvent, Motif, Relation } from '../data/types';
import { buendiaCharacters } from '../data/characters-buendia';
import { otherCharacters } from '../data/characters-others';
import { places } from '../data/places';
import { events } from '../data/events';
import { motifs } from '../data/motifs';
import { relations } from '../data/relations';
import { chapters } from '../data/chapters';

export const characters: Character[] = [...buendiaCharacters, ...otherCharacters];
export { places, events, motifs, relations, chapters };

export const characterBySlug = new Map(characters.map((c) => [c.slug, c]));
export const placeBySlug = new Map(places.map((p) => [p.slug, p]));
export const eventBySlug = new Map(events.map((e) => [e.slug, e]));
export const motifBySlug = new Map(motifs.map((m) => [m.slug, m]));

const ERA_ORDER = ['founding', 'insomnia', 'wars', 'banana', 'deluge', 'wind'] as const;

export const eventsInOrder: TimelineEvent[] = [...events].sort(
  (a, b) => ERA_ORDER.indexOf(a.era) - ERA_ORDER.indexOf(b.era) || a.order - b.order,
);

/** All relation edges touching a character, with the edge re-oriented notes. */
export function relationsOf(slug: string): { other: string; rel: Relation; outgoing: boolean }[] {
  const out: { other: string; rel: Relation; outgoing: boolean }[] = [];
  for (const rel of relations) {
    if (rel.source === slug) out.push({ other: rel.target, rel, outgoing: true });
    else if (rel.target === slug) out.push({ other: rel.source, rel, outgoing: false });
  }
  return out;
}

/** Events a character is central to, in narrative order. */
export function eventsOf(slug: string): TimelineEvent[] {
  return eventsInOrder.filter((e) => e.characters.includes(slug));
}

/** Places that claim a character as resident, beyond the ones the dossier lists. */
export function placesClaiming(slug: string): { place: Place; bond: string }[] {
  const out: { place: Place; bond: string }[] = [];
  for (const p of places) {
    const r = p.residents.find((res) => res.character === slug);
    if (r) out.push({ place: p, bond: r.bond });
  }
  return out;
}

/** Motifs that gather around a character. */
export function motifsOf(slug: string): Motif[] {
  return motifs.filter(
    (m) => m.occurrences.some((o) => o.characters.includes(slug)),
  );
}

/** Chapters where a character is a principal figure. */
export function chaptersOf(slug: string) {
  return chapters.filter((ch) => ch.characters.includes(slug));
}

/** Human phrase for a relation as seen from `from`'s side. */
export function relationPhrase(rel: Relation, outgoing: boolean): string {
  switch (rel.type) {
    case 'parent':
      return outgoing ? 'parent of' : 'child of';
    case 'raised-by':
      return outgoing ? 'raised by' : 'raised';
    case 'marriage':
      return 'married to';
    case 'lovers':
      return 'lover of';
    case 'rivalry':
      return 'rival of';
    case 'enmity':
      return 'enemy of';
    case 'friendship':
      return 'friend of';
    case 'mentor':
      return outgoing ? 'mentor to' : 'student of';
  }
}
