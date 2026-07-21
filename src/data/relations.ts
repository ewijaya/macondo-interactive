import type { Relation } from './types';

export const relations: Relation[] = [
  // ─── Parentage: the Buendía line ───
  {
    source: 'jose-arcadio-buendia',
    target: 'jose-arcadio',
    type: 'parent',
    description: 'His firstborn, who inherited his colossal strength but none of his imagination.',
  },
  {
    source: 'ursula',
    target: 'jose-arcadio',
    type: 'parent',
    description: 'Her first child, examined at birth for the pig’s tail she dreaded.',
  },
  {
    source: 'jose-arcadio-buendia',
    target: 'colonel-aureliano-buendia',
    type: 'parent',
    description: 'His second son, the first human being born in Macondo.',
  },
  {
    source: 'ursula',
    target: 'colonel-aureliano-buendia',
    type: 'parent',
    description: 'She sensed he had wept in her womb, and lived to see him become a man incapable of love.',
  },
  {
    source: 'jose-arcadio-buendia',
    target: 'amaranta',
    type: 'parent',
    description: 'His only daughter, born while he was lost in alchemical delirium.',
  },
  {
    source: 'ursula',
    target: 'amaranta',
    type: 'parent',
    description: 'Her last child, who would outlive her rivals only to die weaving her own shroud.',
  },
  {
    source: 'jose-arcadio',
    target: 'arcadio',
    type: 'parent',
    description: 'Fathered on Pilar Ternera and abandoned before birth for the gypsy girl.',
  },
  {
    source: 'pilar-ternera',
    target: 'arcadio',
    type: 'parent',
    description: 'Her first Buendía son, who died without ever learning she was his mother.',
  },
  {
    source: 'colonel-aureliano-buendia',
    target: 'aureliano-jose',
    type: 'parent',
    description: 'His son by Pilar Ternera, conceived on the eve of his marriage to Remedios.',
  },
  {
    source: 'pilar-ternera',
    target: 'aureliano-jose',
    type: 'parent',
    description: 'Her second Buendía son, whose death by a bullet her cards had foretold.',
  },
  {
    source: 'colonel-aureliano-buendia',
    target: 'seventeen-aurelianos',
    type: 'parent',
    description: 'Seventeen sons by seventeen unnamed women, each brought to be baptized during the wars.',
  },
  {
    source: 'arcadio',
    target: 'remedios-the-beauty',
    type: 'parent',
    description: 'His daughter, born after his execution and named for the family’s dead child bride.',
  },
  {
    source: 'santa-sofia-de-la-piedad',
    target: 'remedios-the-beauty',
    type: 'parent',
    description: 'Mother of the most beautiful creature Macondo ever saw, and untroubled when she rose to heaven.',
  },
  {
    source: 'arcadio',
    target: 'jose-arcadio-segundo',
    type: 'parent',
    description: 'One of the twins born after the firing squad took him.',
  },
  {
    source: 'santa-sofia-de-la-piedad',
    target: 'jose-arcadio-segundo',
    type: 'parent',
    description: 'She alone could tell the twins apart, and suspected they had swapped identities as boys.',
  },
  {
    source: 'arcadio',
    target: 'aureliano-segundo',
    type: 'parent',
    description: 'The other posthumous twin, who grew contrary to his name in every particular.',
  },
  {
    source: 'santa-sofia-de-la-piedad',
    target: 'aureliano-segundo',
    type: 'parent',
    description: 'Her son the reveler, whose funeral was mistaken for his brother’s.',
  },
  {
    source: 'aureliano-segundo',
    target: 'meme',
    type: 'parent',
    description: 'His adored firstborn, whose clavichord parties he financed and whose ruin he could not prevent.',
  },
  {
    source: 'fernanda-del-carpio',
    target: 'meme',
    type: 'parent',
    description: 'She sentenced her daughter to lifelong silence in a highland convent.',
  },
  {
    source: 'aureliano-segundo',
    target: 'jose-arcadio-the-seminarian',
    type: 'parent',
    description: 'His son, promised to Rome and the papacy by Fernanda’s ambition.',
  },
  {
    source: 'fernanda-del-carpio',
    target: 'jose-arcadio-the-seminarian',
    type: 'parent',
    description: 'She raised him to be Pope; he returned from Rome having studied nothing at all.',
  },
  {
    source: 'aureliano-segundo',
    target: 'amaranta-ursula',
    type: 'parent',
    description: 'His youngest, sent to Brussels on the lottery of his animals — the last hope of the line.',
  },
  {
    source: 'fernanda-del-carpio',
    target: 'amaranta-ursula',
    type: 'parent',
    description: 'Her daughter, who inherited none of her gloom and all of Úrsula’s will.',
  },
  {
    source: 'meme',
    target: 'aureliano-babilonia',
    type: 'parent',
    description: 'Her son by Mauricio, born in the convent and smuggled home in a basket.',
  },
  {
    source: 'mauricio-babilonia',
    target: 'aureliano-babilonia',
    type: 'parent',
    description: 'The father he never knew, whose surname reached him almost by accident.',
  },
  {
    source: 'aureliano-babilonia',
    target: 'the-last-aureliano',
    type: 'parent',
    description: 'Father of the only Buendía in a century engendered with love.',
  },
  {
    source: 'amaranta-ursula',
    target: 'the-last-aureliano',
    type: 'parent',
    description: 'She bled to death giving birth to the child with the tail of a pig.',
  },

  // ─── Marriages ───
  {
    source: 'jose-arcadio-buendia',
    target: 'ursula',
    type: 'marriage',
    description: 'Cousins married against every warning, haunted by the family precedent of a child born with a pig’s tail.',
    transgressive: true,
  },
  {
    source: 'colonel-aureliano-buendia',
    target: 'remedios-moscote',
    type: 'marriage',
    description: 'He waited for his child bride to reach puberty; she became the best-loved woman in the house, briefly.',
  },
  {
    source: 'jose-arcadio',
    target: 'rebeca',
    type: 'marriage',
    description: 'Raised in the same house as brother and sister, they married in scandal and were expelled by Úrsula.',
    transgressive: true,
  },
  {
    source: 'arcadio',
    target: 'santa-sofia-de-la-piedad',
    type: 'marriage',
    description: 'Never formally married: a union arranged in the dark by Pilar Ternera, paid for with fifty pesos.',
  },
  {
    source: 'aureliano-segundo',
    target: 'fernanda-del-carpio',
    type: 'marriage',
    description: 'He married the carnival queen from the highlands and spent the marriage living with someone else.',
  },
  {
    source: 'amaranta-ursula',
    target: 'gaston',
    type: 'marriage',
    description: 'She led her devoted Flemish husband home to Macondo on a silk leash.',
  },

  // ─── Lovers ───
  {
    source: 'jose-arcadio',
    target: 'pilar-ternera',
    type: 'lovers',
    description: 'She initiated the boy in her bed of laughter; he fled to the gypsies when she told him of the child.',
  },
  {
    source: 'colonel-aureliano-buendia',
    target: 'pilar-ternera',
    type: 'lovers',
    description: 'One night sought out of loneliness, which gave the wars their first casualty of a son.',
  },
  {
    source: 'aureliano-segundo',
    target: 'petra-cotes',
    type: 'lovers',
    description: 'A concubinage so fertile that their love made the livestock proliferate; he died in her bed’s shadow, not his wife’s.',
  },
  {
    source: 'jose-arcadio-segundo',
    target: 'petra-cotes',
    type: 'lovers',
    description: 'In their youth both twins shared her without her knowing there were two of them.',
  },
  {
    source: 'meme',
    target: 'mauricio-babilonia',
    type: 'lovers',
    description: 'A love conducted among yellow butterflies and ended by Fernanda’s guard with a bullet.',
  },
  {
    source: 'aureliano-babilonia',
    target: 'amaranta-ursula',
    type: 'lovers',
    description: 'Aunt and nephew, ignorant of their kinship, closing the circle Úrsula had spent a century holding open.',
    transgressive: true,
  },
  {
    source: 'aureliano-babilonia',
    target: 'nigromanta',
    type: 'lovers',
    description: 'The great-granddaughter of a Caribbean queen, who taught him love and later shrouded his grief.',
  },
  {
    source: 'amaranta',
    target: 'aureliano-jose',
    type: 'lovers',
    description: 'The nephew she raised grew into a passion she returned in the dark and refused at the threshold.',
    transgressive: true,
  },
  {
    source: 'pietro-crespi',
    target: 'rebeca',
    type: 'lovers',
    description: 'An endless perfumed engagement, abandoned the day José Arcadio came back from the sea.',
  },
  {
    source: 'pietro-crespi',
    target: 'amaranta',
    type: 'lovers',
    description: 'She schemed for his love, won it, refused it — and he opened his veins over the scented water.',
  },
  {
    source: 'gerineldo-marquez',
    target: 'amaranta',
    type: 'lovers',
    description: 'Decades of patient courtship in the begonia porch, refused to the end without hatred and without love.',
  },

  // ─── Rivalry and enmity ───
  {
    source: 'amaranta',
    target: 'rebeca',
    type: 'rivalry',
    description: 'A rivalry over Pietro Crespi that hardened into a lifetime’s vigil of hatred between adoptive sisters.',
  },
  {
    source: 'fernanda-del-carpio',
    target: 'petra-cotes',
    type: 'rivalry',
    description: 'Wife and concubine at war over one man; the concubine fed the wife’s household out of pity in the end.',
  },
  {
    source: 'colonel-aureliano-buendia',
    target: 'general-moncada',
    type: 'enmity',
    description: 'Friends across enemy lines who dreamed of a humane politics — until the Colonel confirmed his friend’s death sentence.',
  },
  {
    source: 'prudencio-aguilar',
    target: 'jose-arcadio-buendia',
    type: 'enmity',
    description: 'Killed by a spear through the throat over a cockfight taunt, he returned as the ghost whose sad company founded Macondo — and consoled its founder’s old age.',
  },

  // ─── Friendship and mentorship ───
  {
    source: 'melquiades',
    target: 'jose-arcadio-buendia',
    type: 'friendship',
    description: 'The gypsy sage fed his hunger for wonders — magnets, telescopes, alchemy — and came back from death to keep him company.',
  },
  {
    source: 'melquiades',
    target: 'jose-arcadio-segundo',
    type: 'mentor',
    description: 'The dead gypsy appeared in his room to the twin who carried the memory of the massacre.',
  },
  {
    source: 'melquiades',
    target: 'aureliano-babilonia',
    type: 'mentor',
    description: 'From beyond several deaths he guided the last decipherer to Sanskrit and to the parchments’ hour.',
  },
  {
    source: 'the-wise-catalonian',
    target: 'aureliano-babilonia',
    type: 'mentor',
    description: 'The bookseller who sold him the keys to the parchments and preached against nostalgia.',
  },
  {
    source: 'the-wise-catalonian',
    target: 'gabriel',
    type: 'mentor',
    description: 'Master of the little bookshop seminars where literature was the best plaything for making fun of people.',
  },
  {
    source: 'colonel-aureliano-buendia',
    target: 'gerineldo-marquez',
    type: 'friendship',
    description: 'His comrade through thirty-two wars, who received the order for the saddest sentence of the fighting — and its retraction.',
  },
  {
    source: 'gabriel',
    target: 'aureliano-babilonia',
    type: 'friendship',
    description: 'Bound by being the only two who believed in the massacre; Gabriel escaped to Paris with the complete works of Rabelais.',
  },

  // ─── Raised by ───
  {
    source: 'rebeca',
    target: 'ursula',
    type: 'raised-by',
    description: 'The girl who arrived with her parents’ bones was cured of eating earth and raised as a daughter.',
  },
  {
    source: 'arcadio',
    target: 'visitacion',
    type: 'raised-by',
    description: 'Raised by the Guajiro servant in a house of distracted adults, he grew up dreaming in her language.',
  },
  {
    source: 'aureliano-jose',
    target: 'amaranta',
    type: 'raised-by',
    description: 'The aunt who bathed and raised him became the forbidden object of his life.',
  },
  {
    source: 'aureliano-babilonia',
    target: 'santa-sofia-de-la-piedad',
    type: 'raised-by',
    description: 'The silent grandmother tended the hidden child until the day she walked out of the house forever.',
  },
];
