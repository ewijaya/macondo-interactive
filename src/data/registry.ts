// CANONICAL slug registry. Every cross-reference in the data files must use
// these exact slugs. If it isn't listed here, it doesn't exist.

export const CHARACTER_SLUGS = [
  // ─── The Buendía line ───
  'jose-arcadio-buendia', // gen 1, founder
  'ursula', // gen 1, Úrsula Iguarán
  'jose-arcadio', // gen 2, the elder son who ran off with the gypsies
  'colonel-aureliano-buendia', // gen 2
  'amaranta', // gen 2
  'rebeca', // gen 2, adopted — arrived with her parents' bones
  'arcadio', // gen 3, son of José Arcadio & Pilar Ternera
  'aureliano-jose', // gen 3, son of the Colonel & Pilar Ternera
  'seventeen-aurelianos', // gen 3, the Colonel's seventeen sons (group entry)
  'remedios-the-beauty', // gen 4, daughter of Arcadio & Santa Sofía
  'jose-arcadio-segundo', // gen 4, twin
  'aureliano-segundo', // gen 4, twin
  'meme', // gen 5, Renata Remedios
  'jose-arcadio-the-seminarian', // gen 5, sent to Rome to be Pope
  'amaranta-ursula', // gen 5
  'aureliano-babilonia', // gen 6, son of Meme & Mauricio, decipherer
  'the-last-aureliano', // gen 7, the child with the tail of a pig
  // ─── Bound to the house ───
  'melquiades', // the gypsy sage
  'pilar-ternera', // card-reader, mother of Arcadio and Aureliano José
  'santa-sofia-de-la-piedad', // Arcadio's wife, the silent servant of the house
  'visitacion', // Guajiro Indian servant who recognized the insomnia plague
  'cataure', // her brother
  // ─── Married or loved in ───
  'remedios-moscote', // the Colonel's child bride
  'pietro-crespi', // the Italian music master
  'fernanda-del-carpio', // Aureliano Segundo's highland wife
  'petra-cotes', // Aureliano Segundo's concubine, whose love bred animals
  'mauricio-babilonia', // the mechanic followed by yellow butterflies
  'gaston', // Amaranta Úrsula's Flemish husband
  'nigromanta', // Aureliano Babilonia's lover in the last days
  // ─── The town and the wars ───
  'apolinar-moscote', // the magistrate
  'gerineldo-marquez', // the Colonel's comrade, Amaranta's suitor
  'general-moncada', // Conservative general, the Colonel's friend and enemy
  'prudencio-aguilar', // the man José Arcadio Buendía killed in Riohacha
  'francisco-the-man', // the ancient troubadour
  'catarino', // keeper of the town's first tavern
  'father-nicanor', // Father Nicanor Reyna, who levitated on chocolate
  'father-antonio-isabel', // his successor, who marked the seventeen crosses
  // ─── The banana company ───
  'mr-herbert', // who ate the first bananas
  'mr-brown', // the company superintendent
  // ─── The last days ───
  'the-wise-catalonian', // bookseller, keeper of the last wisdom
  'gabriel', // Gabriel Márquez, the friend who escaped to Paris
] as const;

export const PLACE_SLUGS = [
  // house
  'buendia-house',
  'melquiades-room',
  'the-workshop', // the Colonel's goldsmith shop
  'the-chestnut-tree',
  'the-begonia-porch',
  // town
  'macondo',
  'the-church',
  'catarinos-store',
  'street-of-the-turks',
  'the-river',
  'the-cemetery',
  'the-train-station',
  'the-banana-compound', // the electrified henhouse fence
  'the-zoological-brothel', // Pilar Ternera's last kingdom
  'the-catalonians-bookshop',
  // beyond
  'riohacha',
  'the-swamp', // the ciénaga, the route in and out
  'the-spanish-galleon',
  'neerlandia',
  'the-highland-city', // Fernanda's gloomy city of viceroys
  'europe', // Rome, Brussels, Paris — where Buendías go to disappear
] as const;

export const EVENT_SLUGS = [
  // founding
  'the-killing-of-prudencio',
  'the-founding',
  'the-gypsies-arrive',
  'the-discovery-of-ice',
  'the-expedition-to-the-sea', // finds the Spanish galleon
  'ursula-finds-the-route',
  // insomnia
  'the-insomnia-plague',
  'melquiades-returns',
  'rebeca-arrives',
  'the-magistrate-arrives',
  'melquiades-first-death',
  'jose-arcadio-buendia-tied-to-the-tree',
  // wars
  'the-marriage-of-aureliano-and-remedios',
  'the-death-of-remedios-moscote',
  'the-war-begins',
  'the-firing-squad',
  'the-execution-of-arcadio',
  'the-death-of-jose-arcadio', // the trickle of blood through the town
  'the-death-of-the-patriarch', // yellow flowers rain all night on Macondo
  'the-death-of-aureliano-jose',
  'the-treaty-of-neerlandia',
  'the-little-gold-fishes',
  // banana
  'the-railroad-arrives',
  'mr-herbert-eats-a-banana',
  'the-banana-boom',
  'the-ascension-of-remedios-the-beauty',
  'the-extermination-of-the-aurelianos',
  'the-death-of-the-colonel',
  'meme-and-mauricio',
  'the-strike',
  'the-massacre',
  // deluge
  'the-rains-begin',
  'the-death-of-ursula',
  'the-death-of-fernanda',
  'the-drowning-of-jose-arcadio', // the seminarian, in the pool, by the four boys
  // wind
  'amaranta-ursula-returns',
  'the-incestuous-love',
  'the-birth-of-the-last-aureliano',
  'the-deciphering',
  'the-wind',
] as const;

export const MOTIF_SLUGS = [
  'yellow-butterflies',
  'little-gold-fishes',
  'ice',
  'the-parchments',
  'insomnia-and-forgetting',
  'solitude',
  'the-pigs-tail',
  'yellow-flowers',
  'ghosts',
  'circular-time',
  'alchemy',
  'the-ants',
] as const;

export type CharacterSlug = (typeof CHARACTER_SLUGS)[number];
export type PlaceSlug = (typeof PLACE_SLUGS)[number];
export type EventSlug = (typeof EVENT_SLUGS)[number];
export type MotifSlug = (typeof MOTIF_SLUGS)[number];
