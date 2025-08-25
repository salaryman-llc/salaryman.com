export type GameDetails = {
  title: string;
  href: string;
  description: string;
  releaseDate?: string;
  status: string;
  platforms: string;
  stores: string;
  engine: string;
  credits: {
    name: string;
    title: string;
  }[];
  features: {
    name: string;
    description: string;
  }[];
  steamLink?: string;
  epicGamesStoreLink?: string;
  itchIOLink?: string;
};

export const allGames: GameDetails[] = [
  {
    title: 'Backcountry',
    href: '/games/backcountry',
    description:
      "Backcountry is a mystery narrative adventure game with whimsical mythilogical elements. You play a park ranger sent to a neglected mountain range to help the ranger residing there, but when you arrive he's missing with only a backpack and clues to lead the way. You quickly discover that you're not the only occupant of this mountain.",
    status: 'In Development',
    platforms: 'Windows, MacOS, Linux',
    stores: 'Steam, Epic Games Store',
    engine: 'Unreal Engine',
    features: [
      {
        name: 'Open World',
        description:
          'Explore a beautiful mountain range with flowing rivers, dense forests, and tall peaks. Set out with your trusty backpack and strike camp in the wilderness.',
      },
      {
        name: 'Mystery',
        description:
          'Piece together the scattered clues to find out what happened to the old park ranger. The notes he left behind seem erratic and confused, talking about strange creatures from fables.',
      },
      {
        name: 'Myth Meets Reality',
        description:
          "You're not alone on this mountain. Encounter bizaare mythical creatures and other oddities living in this beautiful mountain landscape. If you help them maybe they'll help you? Or maybe they'll lead you astray...",
      },
    ],
    credits: [
      {
        name: 'Salaryman',
        title: 'Developer',
      },
      {
        name: 'Latent Arcanist',
        title: 'Developer',
      },
      {
        name: 'Miliku',
        title: 'Artist',
      },
    ],
  },
];
