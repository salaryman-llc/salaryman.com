import { allGames } from '../games/gameDetails';

export default function GameList() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Games by Salaryman
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            {'Crafted with love <3'}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
          {allGames.map((game) => (
            <article
              key={game.title}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">
                  {game.status}
                </p>
                {game.releaseDate && (
                  <time
                    dateTime={game.releaseDate}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {game.releaseDate}
                  </time>
                )}
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">
                  {game.engine}
                </p>
              </div>

              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                  <a href={game.href}>
                    <span className="absolute inset-0" />
                    {game.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm/6 text-gray-600 dark:text-gray-400">
                  {game.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Platforms
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {game.platforms}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                {game.credits?.map(({ name, title }) => (
                  <div className="text-sm/6" key={name}>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">{title}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
