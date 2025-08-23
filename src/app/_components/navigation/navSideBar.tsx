"use client";

import { navItems, type NavItem } from "~/app/navigationConstants";
import { Heading } from "../catalyst/heading";
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarBody,
  SidebarSection,
  SidebarHeading,
  SidebarDivider,
} from "../catalyst/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";

function BuildSideBarItem(
  label: string,
  url: string,
  pathname: string,
  subNav?: NavItem[],
) {
  const isCurrent: boolean = pathname === url;

  if (subNav && subNav.length > 0) {
    return (
      <>
        <SidebarSection>
          <SidebarHeading>{label}</SidebarHeading>
          {subNav.map(({ label, url }) => (
            <SidebarItem href={url} key={label}>
              <SidebarLabel>{label}</SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>
        <SidebarDivider />
      </>
    );
  }

  return (
    <SidebarItem key={label} href={url} current={isCurrent}>
      {label}
    </SidebarItem>
  );
}

export function NavSideBar() {
  const pathname = usePathname();

  return (
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
            .map(({ label, url, subNav }) =>
              BuildSideBarItem(label, url, pathname, subNav),
            )}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}
