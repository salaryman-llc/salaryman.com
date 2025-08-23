"use client";

import { Heading } from "./catalyst/heading";
import {
  Navbar,
  NavbarSection,
  NavbarLabel,
  NavbarDivider,
  NavbarItem,
} from "./catalyst/navbar";
import {
  Sidebar,
  SidebarHeader,
  SidebarLabel,
  SidebarBody,
  SidebarSection,
  SidebarItem,
} from "./catalyst/sidebar";
import { StackedLayout } from "./catalyst/stacked-layout";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Games", url: "/games" },
  { label: "Products", url: "/products" },
  { label: "Services", url: "/services" },
  { label: "Blog", url: "/blog" },
  { label: "Contact", url: "/contact" },
];

function BuildNavBarItem(label: string, url: string, pathname: string) {
  const isCurrent: boolean = pathname === url;
  if (url === "/") {
    return (
      <div key={label}>
        <NavbarItem key={label} href={url} current={isCurrent}>
          <Image
            width={100}
            height={100}
            src="/salaryman-logo.png"
            alt="Salaryman LLC"
            className="size-10 rounded-full *:rounded-full"
          />
          <NavbarLabel>
            <Heading>Salaryman LLC</Heading>
          </NavbarLabel>
        </NavbarItem>
        <NavbarDivider className="max-lg:hidden" />
      </div>
    );
  }

  return (
    <NavbarItem key={label} href={url} current={isCurrent}>
      {label}
    </NavbarItem>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <StackedLayout
      navbar={
        <Navbar>
          <NavbarSection className="max-lg:hidden">
            {navItems.map(({ label, url }) =>
              BuildNavBarItem(label, url, pathname),
            )}
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarItem href="/" current={pathname === "/"}>
              <Image
                width={100}
                height={100}
                src="/salaryman-logo.png"
                alt="Salaryman LLC"
                className="size-10 rounded-full *:rounded-full"
              />
              <SidebarLabel>
                <Heading>Salaryman LLC</Heading>
              </SidebarLabel>
            </SidebarItem>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              {navItems
                .filter(({ url }) => url !== "/")
                .map(({ label, url }) => (
                  <SidebarItem
                    key={label}
                    href={url}
                    current={pathname === url}
                  >
                    {label}
                  </SidebarItem>
                ))}
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
      footer={<Footer />}
    >
      {children}
    </StackedLayout>
  );
}
