import type { Motif } from './types';

export const motifs: Motif[] = [
  {
    slug: 'yellow-butterflies',
    name: 'Yellow Butterflies',
    glyph: '🦋',
    tagline: 'Love announced by a swarm',
    summary: [
      'The yellow butterflies belong to Mauricio Babilonia: they precede him into rooms, hover over him in the dark of the movie theater, and mark every place he has passed. What begins as an annoyance becomes an omen — Fernanda cannot see a yellow butterfly without a spasm of dread — and finally a signature of doomed, absolute love that outlives the lover himself.',
      'After Mauricio is shot and Meme is shut away, the butterflies persist: they escort her train to the convent and attach themselves to the memory of everyone touched by the affair, so that the love the family tried to erase keeps announcing itself in wings.',
    ],
    occurrences: [
      {
        text: 'They fill the movie theater and circle over Meme’s head, revealing that Mauricio Babilonia is near.',
        characters: ['meme', 'mauricio-babilonia'],
        events: ['meme-and-mauricio'],
      },
      {
        text: 'Fernanda finds them in the house at dusk and orders them killed, sensing the love affair before she can name it.',
        characters: ['fernanda-del-carpio', 'meme', 'mauricio-babilonia'],
        events: ['meme-and-mauricio'],
      },
      {
        text: 'The night watchman shoots Mauricio down under the bathhouse amid a storm of yellow wings.',
        characters: ['mauricio-babilonia', 'fernanda-del-carpio'],
        events: ['meme-and-mauricio'],
      },
      {
        text: 'The butterflies escort Meme’s train to the highland convent, the last free things attached to her.',
        characters: ['meme'],
        events: [],
      },
      {
        text: 'Aureliano Babilonia, son of the butterflies’ lovers, is born under their sign and named for his father’s line.',
        characters: ['aureliano-babilonia', 'meme', 'mauricio-babilonia'],
        events: [],
      },
    ],
  },
  {
    slug: 'little-gold-fishes',
    name: 'The Little Gold Fishes',
    glyph: '🐟',
    tagline: 'Solitude given the shape of a trade',
    summary: [
      'Colonel Aureliano Buendía, having lost thirty-two wars, spends his peace making tiny gold fishes with emerald eyes — selling them for coins that he melts down to make more fishes. The circle is the point: work that consumes itself, pride that refuses profit, time converted into a loop a man can survive inside.',
      'During the wars the fishes had been credentials — emissaries carried one as proof they came from the Colonel. After his death they become relics the family refuses to trade on, and finally archaeology: two last fishes on a workshop shelf, waiting for the end of the line to find them.',
    ],
    occurrences: [
      {
        text: 'The Colonel establishes the ritual: two fishes a day, sold for gold that becomes the next day’s fishes.',
        characters: ['colonel-aureliano-buendia'],
        events: ['the-little-gold-fishes'],
      },
      {
        text: 'In the war years, a little gold fish is the password that proves a messenger truly comes from the Colonel.',
        characters: ['colonel-aureliano-buendia', 'gerineldo-marquez'],
        events: ['the-war-begins'],
      },
      {
        text: 'The seventeen Aurelianos each depart with one of their father’s fishes, tokens that later mark them for death.',
        characters: ['seventeen-aurelianos', 'colonel-aureliano-buendia'],
        events: ['the-extermination-of-the-aurelianos'],
      },
      {
        text: 'After his death the fishes turn relic, and buyers seek them as the last coinage of a defeated legend.',
        characters: ['colonel-aureliano-buendia', 'ursula'],
        events: ['the-death-of-the-colonel'],
      },
      {
        text: 'Decades later Aureliano Babilonia finds the last fishes in the shuttered workshop, fossils of a war nobody remembers.',
        characters: ['aureliano-babilonia'],
        events: [],
      },
    ],
  },
  {
    slug: 'ice',
    name: 'Ice',
    glyph: '🧊',
    tagline: 'The great invention of our time',
    summary: [
      'The novel opens with it: facing the firing squad, Colonel Aureliano Buendía remembers the distant afternoon his father took him to discover ice. In the gypsies’ tent the frozen block — burning to the touch, full of diamonds of light — is the book’s first miracle, and José Arcadio Buendía declares it the great invention of our time.',
      'Ice is wonder before utility: the founder dreams of building Macondo’s walls out of it, a frozen city against the tropical heat, and the dream survives him — the town of mirrors the parchments finally answer with mirages.',
    ],
    occurrences: [
      {
        text: 'José Arcadio Buendía pays to touch the gypsies’ ice and pronounces it the great invention of our time.',
        characters: ['jose-arcadio-buendia', 'colonel-aureliano-buendia', 'jose-arcadio'],
        events: ['the-discovery-of-ice'],
      },
      {
        text: 'Before the firing squad, the Colonel’s memory returns to that distant afternoon of discovery.',
        characters: ['colonel-aureliano-buendia'],
        events: ['the-firing-squad', 'the-discovery-of-ice'],
      },
      {
        text: 'The founder dreams Macondo as a city of mirrors — his old vision of walls made of ice, transposed.',
        characters: ['jose-arcadio-buendia'],
        events: ['the-founding'],
      },
      {
        text: 'In the boom years one of the seventeen Aurelianos builds an ice factory, industrializing his grandfather’s miracle.',
        characters: ['seventeen-aurelianos'],
        events: ['the-railroad-arrives'],
      },
    ],
  },
  {
    slug: 'the-parchments',
    name: 'The Parchments',
    glyph: '📜',
    tagline: 'The family history, written a hundred years in advance',
    summary: [
      'In his room at the back of the house, Melquíades covers parchments with indecipherable script — Sanskrit, it turns out, encrypted twice over — and answers all questions with the same sentence: no one may know their meaning until they are one hundred years old. They are the novel the family is living in, written down before it happens.',
      'Buendía after Buendía is drawn to the vigil: José Arcadio Segundo counts the massacre dead beside them, and Aureliano Babilonia gives his life to their decoding — learning at the final page that the parchments end when he finishes reading, and so does everything else.',
    ],
    occurrences: [
      {
        text: 'Melquíades writes on in his room, promising only that the pages cannot be understood before their hundredth year.',
        characters: ['melquiades'],
        events: ['melquiades-returns'],
      },
      {
        text: 'José Arcadio Segundo shelters among them after the massacre, invisible to the soldiers who search the room.',
        characters: ['jose-arcadio-segundo'],
        events: ['the-massacre'],
      },
      {
        text: 'The epigraph surfaces at last: the first of the line is tied to a tree and the last is being eaten by the ants.',
        characters: ['aureliano-babilonia', 'jose-arcadio-buendia', 'the-last-aureliano'],
        events: ['the-deciphering'],
      },
      {
        text: 'Aureliano Babilonia reads the final page aloud as the wind rises, deciphering his own act of deciphering.',
        characters: ['aureliano-babilonia', 'melquiades'],
        events: ['the-deciphering', 'the-wind'],
      },
    ],
  },
  {
    slug: 'insomnia-and-forgetting',
    name: 'Insomnia & Forgetting',
    glyph: '🏷️',
    tagline: 'The plague that erases the names of things',
    summary: [
      'The insomnia plague arrives with Rebeca and steals first sleep, then memory. Macondo fights extinction with labels: this is the cow, she must be milked; and at the entrance to town, a sign that says GOD EXISTS. The episode is comedy with a knife in it — a town writing itself reminders of reality as reality slips away.',
      'The plague is cured, but forgetting is not. The book’s deepest erasure is political: after the massacre, the official account — there are no dead, nothing has happened in Macondo — is repeated until it becomes the only memory left. The wind at the end merely finishes what forgetting began.',
    ],
    occurrences: [
      {
        text: 'Visitación recognizes the insomnia in Rebeca’s shining eyes: the plague she and her brother fled their kingdom to escape.',
        characters: ['visitacion', 'cataure', 'rebeca'],
        events: ['the-insomnia-plague', 'rebeca-arrives'],
      },
      {
        text: 'The town labels everything it owns, down to the sign at the entrance announcing that GOD EXISTS.',
        characters: ['jose-arcadio-buendia', 'ursula'],
        events: ['the-insomnia-plague'],
      },
      {
        text: 'Melquíades returns from death with the antidote, and Macondo celebrates the recovery of its memories.',
        characters: ['melquiades'],
        events: ['melquiades-returns', 'the-insomnia-plague'],
      },
      {
        text: 'After the station massacre, the official version — nothing has happened in Macondo — becomes the town’s only memory.',
        characters: ['jose-arcadio-segundo'],
        events: ['the-massacre'],
      },
      {
        text: 'Aureliano Babilonia, keeper of the true count of the dead, finds no one left who will believe it.',
        characters: ['aureliano-babilonia', 'jose-arcadio-segundo'],
        events: [],
      },
    ],
  },
  {
    slug: 'solitude',
    name: 'Solitude',
    glyph: '🕯️',
    tagline: 'The family inheritance no one escapes',
    summary: [
      'Every Buendía receives it in a different shape: a chalk circle, a locked door, a shroud sewn and unsewn, a workshop, a tree. Solitude in the novel is not loneliness but a vocation — the incapacity for love that the line passes down like a birthmark, and that the parchments finally name as the family’s sentence.',
      'The book’s last line makes it structural: races condemned to one hundred years of solitude do not get a second opportunity on earth.',
    ],
    occurrences: [
      {
        text: 'Aides draw a ten-foot chalk circle around the Colonel wherever he goes; no human being may step inside it.',
        characters: ['colonel-aureliano-buendia'],
        events: [],
      },
      {
        text: 'Rebeca shuts herself into her dead husband’s house and is forgotten by the town for the rest of her long life.',
        characters: ['rebeca'],
        events: ['the-death-of-jose-arcadio'],
      },
      {
        text: 'Amaranta weaves her shroud by day and unpicks it by night, negotiating with death across the years.',
        characters: ['amaranta'],
        events: [],
      },
      {
        text: 'The founder ends his days tied to the chestnut tree, conversing in Latin with a ghost only he can see.',
        characters: ['jose-arcadio-buendia', 'prudencio-aguilar'],
        events: ['jose-arcadio-buendia-tied-to-the-tree'],
      },
      {
        text: 'Fernanda corresponds with invisible doctors rather than admit any living person into her ailments.',
        characters: ['fernanda-del-carpio'],
        events: [],
      },
      {
        text: 'Aureliano Babilonia grows up locked in the house, so alone that he learns the world entirely from books.',
        characters: ['aureliano-babilonia'],
        events: [],
      },
    ],
  },
  {
    slug: 'the-pigs-tail',
    name: 'The Pig’s Tail',
    glyph: '🐖',
    tagline: 'The punishment promised for loving too close',
    summary: [
      'Úrsula carries the warning from the old country: an aunt of hers, married to an uncle of José Arcadio Buendía, bore a son with a cartilaginous pig’s tail, who died a bachelor and bled to death when a butcher’s cleaver finally took the tail off. It is the reason she resists her cousin-husband, the reason for the chastity pants, the dread she preaches for a century.',
      'The family spends a hundred years orbiting the forbidden center — aunt and nephew, cousin and cousin — until the last two Buendías, not knowing their kinship, close the circle: their child is born with the tail of a pig, magnificent and doomed, exactly as promised.',
    ],
    occurrences: [
      {
        text: 'The precedent: a child of the intermarried families is born with a tail, and dies when it is cut.',
        characters: ['ursula'],
        events: ['the-killing-of-prudencio'],
      },
      {
        text: 'Úrsula wears chastity pants into her marriage, and the mockery this breeds ends with a spear through Prudencio Aguilar.',
        characters: ['ursula', 'jose-arcadio-buendia', 'prudencio-aguilar'],
        events: ['the-killing-of-prudencio'],
      },
      {
        text: 'José Arcadio Buendía waves the fear away: he does not care about pigs’ tails so long as the children can talk.',
        characters: ['jose-arcadio-buendia', 'ursula'],
        events: [],
      },
      {
        text: 'Úrsula repeats the warning to every generation, watching aunt-and-nephew loves circle the same drain.',
        characters: ['ursula', 'amaranta', 'aureliano-jose'],
        events: [],
      },
      {
        text: 'The last Aureliano is born vigorous and beautiful, with the tail of a pig no one is left to fear.',
        characters: ['the-last-aureliano', 'amaranta-ursula', 'aureliano-babilonia'],
        events: ['the-birth-of-the-last-aureliano'],
      },
    ],
  },
  {
    slug: 'yellow-flowers',
    name: 'Yellow Flowers',
    glyph: '🌼',
    tagline: 'The sky’s tribute to the dead founder',
    summary: [
      'When José Arcadio Buendía dies, the sky rains tiny yellow flowers all night — a silent storm that carpets the roofs, blocks the doors, and smothers the animals sleeping outside, so that the town must clear paths with shovels to bury him. Yellow becomes the book’s color of glorified death and gilded ruin: the flowers, the butterflies, the train, the gold.',
    ],
    occurrences: [
      {
        text: 'Yellow flowers fall all night at the founder’s death, so thick the funeral needs shovels to pass.',
        characters: ['jose-arcadio-buendia'],
        events: ['jose-arcadio-buendia-tied-to-the-tree'],
      },
      {
        text: 'The innocent yellow train arrives — the color of marvel again, this time bringing the company.',
        characters: ['mr-brown'],
        events: ['the-railroad-arrives'],
      },
      {
        text: 'Mauricio Babilonia’s yellow butterflies inherit the color, turning it from funeral tribute to omen of love.',
        characters: ['mauricio-babilonia', 'meme'],
        events: ['meme-and-mauricio'],
      },
    ],
  },
  {
    slug: 'ghosts',
    name: 'Ghosts',
    glyph: '👻',
    tagline: 'The dead who cannot bear their own solitude',
    summary: [
      'Death in Macondo is porous. Prudencio Aguilar crosses mountains after his killer because a dead man’s loneliness is worse than a living man’s guilt; Melquíades returns from his first death because he could not bear the solitude of it; the founder’s ghost stays under his chestnut tree for generations. The dead in this book do not haunt — they keep company.',
    ],
    occurrences: [
      {
        text: 'Prudencio Aguilar appears in the courtyard, washing his wound with esparto grass, driving the founders to the sierra.',
        characters: ['prudencio-aguilar', 'jose-arcadio-buendia', 'ursula'],
        events: ['the-killing-of-prudencio', 'the-founding'],
      },
      {
        text: 'Melquíades comes back from death in Singapore because he could not endure the solitude of it.',
        characters: ['melquiades'],
        events: ['melquiades-returns'],
      },
      {
        text: 'The dead Prudencio, grown old in death, keeps the tied founder company under the chestnut tree.',
        characters: ['prudencio-aguilar', 'jose-arcadio-buendia'],
        events: ['jose-arcadio-buendia-tied-to-the-tree'],
      },
      {
        text: 'Blind Úrsula chats with the founder’s ghost under the tree, the living and dead sharing one bench of habit.',
        characters: ['ursula', 'jose-arcadio-buendia'],
        events: [],
      },
      {
        text: 'Melquíades’ ghost tutors the last decipherers in his room, dead but punctual.',
        characters: ['melquiades', 'jose-arcadio-segundo', 'aureliano-babilonia'],
        events: ['the-deciphering'],
      },
    ],
  },
  {
    slug: 'circular-time',
    name: 'Circular Time',
    glyph: '↻',
    tagline: 'A machine of unavoidable repetitions',
    summary: [
      'Names repeat, and with them temperaments, and with them fates: the Aurelianos withdrawn and lucid, the José Arcadios impulsive and marked for tragedy. Úrsula, oldest witness, is the first to say it aloud — time is not passing, it is turning in a circle — and Pilar Ternera, reading a century of cards, concludes the family’s history is a machine of unavoidable repetitions, a wheel that would spin forever but for the wearing of its axle.',
    ],
    occurrences: [
      {
        text: 'Úrsula hears Aureliano Segundo repeat the Colonel’s words and knows: time is going in a circle.',
        characters: ['ursula', 'aureliano-segundo', 'colonel-aureliano-buendia'],
        events: [],
      },
      {
        text: 'The twins swap identities so thoroughly that even their deaths may belong to each other’s names.',
        characters: ['jose-arcadio-segundo', 'aureliano-segundo'],
        events: [],
      },
      {
        text: 'Pilar Ternera stops reading cards for the family: a century has taught her the wheel’s turns by heart.',
        characters: ['pilar-ternera'],
        events: [],
      },
      {
        text: 'Aureliano Babilonia sets up in the Colonel’s workshop, the last turn of a wheel he has never been told about.',
        characters: ['aureliano-babilonia', 'colonel-aureliano-buendia'],
        events: ['the-deciphering'],
      },
      {
        text: 'The founder declares from his madness that it is still Monday — the first man to notice time misbehaving.',
        characters: ['jose-arcadio-buendia'],
        events: ['jose-arcadio-buendia-tied-to-the-tree'],
      },
    ],
  },
  {
    slug: 'alchemy',
    name: 'Alchemy',
    glyph: '⚗️',
    tagline: 'Gold pursued, buried, doubled, and lost',
    summary: [
      'Melquíades’ gift of a rudimentary laboratory infects the founder with the oldest fever: magnets to pull gold from the earth, the philosopher’s stone, Úrsula’s colonial coins boiled into a cinder welded to the pot. Alchemy in Macondo never makes gold — it makes obsessives, and it trains the family hand: the Colonel’s silverwork descends directly from his father’s flasks.',
      'The gold that matters is always buried, not transmuted: Úrsula’s hidden hoard waits underground for the wrong heir, and the fortune the seminarian digs up buys only his murder.',
    ],
    occurrences: [
      {
        text: 'Melquíades leaves the laboratory of an alchemist, and the founder boils Úrsula’s doubloons into a burnt cinder.',
        characters: ['melquiades', 'jose-arcadio-buendia', 'ursula'],
        events: ['the-gypsies-arrive'],
      },
      {
        text: 'Young Aureliano masters the workshop and turns alchemy’s discipline into a silversmith’s trade.',
        characters: ['colonel-aureliano-buendia', 'jose-arcadio-buendia'],
        events: ['the-little-gold-fishes'],
      },
      {
        text: 'Úrsula buries her secret gold during the wars, telling no one where — the earth as strongbox.',
        characters: ['ursula'],
        events: [],
      },
      {
        text: 'José Arcadio the seminarian unearths the buried fortune, and it buys him a bath-time murder.',
        characters: ['jose-arcadio-the-seminarian'],
        events: ['the-drowning-of-jose-arcadio'],
      },
    ],
  },
  {
    slug: 'the-ants',
    name: 'The Ants',
    glyph: '🐜',
    tagline: 'Nature’s patient demolition crew',
    summary: [
      'The red ants are the deluge’s permanent garrison: they survive the rains that ruin everything else and set about carrying the house away crumb by crumb. Amaranta Úrsula fights them with the energy of Úrsula reborn and loses; the parchments have already scheduled their victory — the last of the line is being eaten by the ants.',
    ],
    occurrences: [
      {
        text: 'The rains leave the house to the red ants, which gnaw its foundations in broad daylight.',
        characters: ['santa-sofia-de-la-piedad'],
        events: ['the-rains-begin'],
      },
      {
        text: 'Amaranta Úrsula wages cheerful, doomed war on the ants to save the house of her childhood.',
        characters: ['amaranta-ursula'],
        events: ['amaranta-ursula-returns'],
      },
      {
        text: 'The newborn with the pig’s tail, forgotten one night, is dragged by the ants toward their nests.',
        characters: ['the-last-aureliano', 'aureliano-babilonia'],
        events: ['the-birth-of-the-last-aureliano', 'the-deciphering'],
      },
      {
        text: 'The epigraph completes itself: the first of the line tied to a tree, the last eaten by the ants.',
        characters: ['jose-arcadio-buendia', 'the-last-aureliano'],
        events: ['the-deciphering', 'the-wind'],
      },
    ],
  },
];
