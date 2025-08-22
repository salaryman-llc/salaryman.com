"use client";

import { Avatar } from "./catalyst/avatar";
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

const navItems = [
  { label: "Home", url: "/" },
  { label: "Products", url: "/products" },
  { label: "Services", url: "/services" },
  { label: "Projects", url: "/projects" },
  { label: "Blog", url: "/blog" },
  { label: "Contact", url: "/contact" },
];

function BuildNavBarItem(label: string, url: string, pathname: string) {
  const isCurrent: boolean = pathname === url;
  if (url === "/") {
    return (
      <>
        <NavbarItem key={label} href={url} current={isCurrent}>
          <Avatar className="size-10" src="/salaryman-logo.png" />
          <NavbarLabel>
            <Heading>Salaryman LLC</Heading>
          </NavbarLabel>
        </NavbarItem>
        <NavbarDivider className="max-lg:hidden" />
      </>
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
            <Avatar className="size-10" src="/salaryman-logo.png" />
            <SidebarLabel>
              <Heading>Salaryman LLC</Heading>
            </SidebarLabel>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              {navItems.map(({ label, url }) => (
                <SidebarItem key={label} href={url} current={pathname === url}>
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
