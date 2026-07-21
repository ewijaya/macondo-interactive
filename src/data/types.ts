// Shared data model for the Macondo Atlas.
// Every entity is keyed by a slug; cross-references are always slugs.

/** The book's own taxonomy: names carry temperament down the line. */
export type Bloodline =
  | 'aureliano' // withdrawn, lucid, marked for solitude
  | 'jose-arcadio' // impulsive, enterprising, marked for tragedy
  | 'matriarch' // the women who hold the house together
  | 'remedios' // the Remedios line: innocence in its several forms
  | 'outsider'; // married in, wandered in, or blew in with the banana company

export interface Character {
  slug: string;
  name: string;
  /** Other names or epithets: "the Colonel", "Meme", "the Beauty" */
  aka?: string[];
  bloodline: Bloodline;
  /** 1–7 for Buendías (1 = founders), undefined for non-family */
  generation?: number;
  /** One-line identification shown in lists and on hover */
  tagline: string;
  /** 2–4 dense paragraphs: who they are, what they do, how they end */
  summary: string[];
  /** How their story ends, one or two sentences */
  fate: string;
  /** Slugs of places bound to this character, with the nature of the bond */
  places: { place: string; bond: string }[];
  /** Slugs of timeline events this character is central to */
  events: string[];
  /** Slugs of motifs that gather around this character */
  motifs: string[];
  /** A short attributed quote (verified against the Rabassa translation) */
  quote?: { text: string; context: string };
}

export type RelationType =
  | 'parent' // source is parent of target
  | 'marriage'
  | 'lovers'
  | 'raised-by' // fostering: Rebeca and the Buendías, Arcadio and Pilar's silence
  | 'rivalry'
  | 'enmity'
  | 'friendship'
  | 'mentor'; // Melquíades and the room, the wise Catalonian and his students

export interface Relation {
  source: string;
  target: string;
  type: RelationType;
  /** One sentence on what this bond actually was */
  description: string;
  /** True for the incestuous or near-incestuous bonds the book orbits */
  transgressive?: boolean;
}

export interface Place {
  slug: string;
  name: string;
  /** 'house' = inside the Buendía house, 'town' = Macondo, 'beyond' = the outside world */
  zone: 'house' | 'town' | 'beyond';
  tagline: string;
  summary: string[];
  /** Characters bound to this place, with the nature of the bond */
  residents: { character: string; bond: string }[];
  /** Timeline events that happened here */
  events: string[];
  /** Approximate coordinates on the illustrated map, 0–100 viewBox units */
  map?: { x: number; y: number };
}

export interface TimelineEvent {
  slug: string;
  title: string;
  /** Era groups the unnumbered years: the book resists dates, so we use phases */
  era:
    | 'founding' // the founding and the age of the gypsies
    | 'insomnia' // the insomnia plague and the coming of institutions
    | 'wars' // the thirty-two civil wars
    | 'banana' // the banana company years
    | 'deluge' // the rains and the long decay
    | 'wind'; // the last Buendías and the end
  /** Position within the era for ordering */
  order: number;
  summary: string[];
  characters: string[];
  places: string[];
  motifs: string[];
}

export interface Motif {
  slug: string;
  name: string;
  /** Emoji or short glyph used as the motif's mark */
  glyph: string;
  tagline: string;
  summary: string[];
  /** Each recurrence: where it surfaces and around whom */
  occurrences: { text: string; characters: string[]; events: string[] }[];
}

export interface Chapter {
  /** 1–20; the novel leaves them unnumbered, we number for wayfinding */
  number: number;
  /** An editorial title we assign, since the book gives none */
  title: string;
  /** The chapter's opening words, for orientation */
  openingWords: string;
  summary: string[];
  characters: string[];
  events: string[];
}

export const ERA_LABELS: Record<TimelineEvent['era'], string> = {
  founding: 'The Founding',
  insomnia: 'The Insomnia Plague',
  wars: 'The Thirty-Two Wars',
  banana: 'The Banana Company',
  deluge: 'The Deluge',
  wind: 'The Wind',
};

export const BLOODLINE_LABELS: Record<Bloodline, string> = {
  aureliano: 'The Aurelianos',
  'jose-arcadio': 'The José Arcadios',
  matriarch: 'The Matriarchs',
  remedios: 'The Remedios Line',
  outsider: 'Outsiders',
};
