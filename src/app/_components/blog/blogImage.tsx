import type { ReactNode } from 'react';

export default function BlogImage({
  src,
  alt,
  height,
  width,
  round,
  children,
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
  round?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto my-4">
      <img
        height={height}
        width={width}
        src={src}
        alt={alt}
        className={round ? 'rounded-full' : 'rounded-2xl'}
      />
      <p className="mt-2 text-center text-sm text-gray-900 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
}
