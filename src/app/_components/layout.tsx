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
import { navItems, type NavItem } from "../navigationConstants";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "./catalyst/dropdown";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function BuildNavBarItem(
  label: string,
  url: string,
  pathname: string,
  subNav?: NavItem[],
) {
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

  if (subNav) {
    const isRootCurrent: boolean = pathname.startsWith(url);

    return (
      <Dropdown key={label}>
        <DropdownButton
          as={NavbarItem}
          className="max-lg:hidden"
          current={isRootCurrent}
        >
          <NavbarLabel>{label}</NavbarLabel>
          <ChevronDownIcon />
        </DropdownButton>
        <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
          {subNav.map(({ label, url }) => (
            <DropdownItem key={label} href={url}>
              <DropdownLabel>{label}</DropdownLabel>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
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
            {navItems.map(({ label, url, subNav }) =>
              BuildNavBarItem(label, url, pathname, subNav),
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
