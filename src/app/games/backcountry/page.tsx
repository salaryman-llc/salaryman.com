import { allGames, type GameDetails } from '../../games/gameDetails';
import {
  QuestionMarkCircleIcon,
  GlobeAmericasIcon,
  UserIcon,
} from '@heroicons/react/20/solid';

export default function GameBackcountry() {
  const backcountryGame: GameDetails = allGames.find(
    (details) => details.title === 'Backcountry'
  )!;

  return (
    <div className="px-6 py-16 lg:px-8">
      <div className="mx-auto mb-2 flex max-w-3xl flex-row">
        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-800/60 dark:text-gray-300">
          {backcountryGame.status}
        </p>
      </div>
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
        <p className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
          Salaryman Games Presents!
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
          {backcountryGame.title}
        </h1>
        <p className="mt-6 text-xl/8">{backcountryGame.description}</p>
        <div className="mt-10 max-w-2xl text-gray-600 dark:text-gray-400">
          <ul
            role="list"
            className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-400"
          >
            <li className="flex gap-x-3">
              <GlobeAmericasIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-blue-600 dark:text-blue-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  {backcountryGame.features[0]?.name}
                </strong>
                <span className="ml-2">
                  {backcountryGame.features[0]?.description}
                </span>
              </span>
            </li>
            <li className="flex gap-x-3">
              <QuestionMarkCircleIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-blue-600 dark:text-blue-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  {backcountryGame.features[1]?.name}
                </strong>
                <span className="ml-2">
                  {backcountryGame.features[1]?.description}
                </span>
              </span>
            </li>
            <li className="flex gap-x-3">
              <UserIcon
                aria-hidden="true"
                className="mt-1 size-5 flex-none text-blue-600 dark:text-blue-400"
              />
              <span>
                <strong className="font-semibold text-gray-900 dark:text-white">
                  {backcountryGame.features[2]?.name}
                </strong>
                <span className="ml-2">
                  {backcountryGame.features[2]?.description}
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <div>
              <span className="font-bold text-white">Status: </span>
              <span className="ml-2">{backcountryGame.status}</span>
            </div>
            <div>
              <span className="font-bold text-white">Release Date: </span>
              <span className="ml-2">
                {backcountryGame.releaseDate ?? 'TBD'}
              </span>
            </div>
            <div>
              <span className="font-bold text-white">Platforms: </span>
              <span className="ml-2">{backcountryGame.platforms}</span>
            </div>
            <div>
              <span className="font-bold text-white">Stores: </span>
              <span className="ml-2">{backcountryGame.stores}</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xl font-bold text-white">Development Team</p>
            <div className="mt-4 flex flex-col lg:flex-row">
              {backcountryGame.credits.map((credit) => (
                <div key={credit.name} className="mr-16">
                  <p className="font-semibold text-white">{credit.name}</p>
                  <p>{credit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
