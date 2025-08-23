type GameDetails = {
  title: string;
  href: string;
  description: string;
  releaseDate?: string;
  status: string;
  platforms: string;
  engine: string;
  credits: {
    name: string;
    title: string;
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
      "Backcountry is a mystery narrative adventure game with whimsical mythilogical elements. You play a park ranger sent to a neglected mountain range to help the ranger residing there, but when you arrive he is missing with only a backpack and clues to lead the way. You quickly discover that you're not the only occupant of this mountain.",
    status: 'In Development',
    platforms: 'Windows, MacOS, Linux',
    engine: 'Unreal Engine',
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
