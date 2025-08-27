import type { ReactNode } from 'react';

export default function BlogTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className="my-4 text-4xl">{children}</h1>
      <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
    </>
  );
}
