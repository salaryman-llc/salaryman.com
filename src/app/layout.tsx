import "~/styles/globals.css";

import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Layout } from "./_components/layout";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "Salaryman",
  description: "A company of overworked and underappreciated salarymen.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="bg-white dark:bg-zinc-900">
        <PostHogProvider>
          <TRPCReactProvider>
            <Layout>{children}</Layout>
          </TRPCReactProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
