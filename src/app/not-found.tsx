'use client';

export default function NotFound() {
  return (
    <main className="grid h-full min-h-full flex-1 place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-4xl font-semibold text-white">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          {"Why are you trying to go to pages that don't exist?"}
        </p>
      </div>
    </main>
  );
}
