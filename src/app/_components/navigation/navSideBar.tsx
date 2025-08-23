"use client";

import { navItems } from "~/app/navigationConstants";
import { Heading } from "../catalyst/heading";
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarBody,
  SidebarSection,
} from "../catalyst/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
            .map(({ label, url }) => (
              <SidebarItem key={label} href={url} current={pathname === url}>
                {label}
              </SidebarItem>
            ))}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}
