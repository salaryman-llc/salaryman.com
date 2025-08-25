import '~/styles/globals.css';

import { type Metadata } from 'next';
import { TRPCReactProvider } from '~/trpc/react';
import { PostHogProvider } from './providers';
import { StackedLayout } from './_components/catalyst/stacked-layout';
import { NavHeader } from './_components/navigation/navHeader';
import NavFooter from './_components/navigation/navFooter';
import { NavSideBar } from './_components/navigation/navSideBar';
import { Inter } from 'next/font/google'

const interFont = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Salaryman',
  description: 'A company of overworked and underappreciated salarymen.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interFont.className}>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="bg-white dark:bg-zinc-900">
        <PostHogProvider>
          <TRPCReactProvider>
            <StackedLayout
              navbar={<NavHeader />}
              sidebar={<NavSideBar />}
              footer={<NavFooter />}
            >
              {children}
            </StackedLayout>
          </TRPCReactProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
