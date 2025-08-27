import type { ReactNode } from 'react';

export default function BlogBody({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex max-w-4xl flex-col text-gray-900 dark:text-white">
      {children}
    </main>
  );
}
