'use client';

import { navItems, type NavItem } from '~/app/navigationConstants';
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
} from '../catalyst/navbar';
import Image from 'next/image';
import { Heading } from '../catalyst/heading';
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '../catalyst/dropdown';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

function BuildNavBarItem(
  label: string,
  url: string,
  pathname: string,
  subNav?: NavItem[]
) {
  const isCurrent: boolean = pathname === url;
  if (url === '/') {
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

  if (subNav && subNav.length > 0) {
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

export function NavHeader() {
  const pathname = usePathname();

  return (
    <Navbar>
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url, subNav }) =>
          BuildNavBarItem(label, url, pathname, subNav)
        )}
      </NavbarSection>
    </Navbar>
  );
}
