import type { ReactNode } from 'react';

export default function BlogParagraph({ children }: { children: ReactNode }) {
  return <p className="my-4">{children}</p>;
}
