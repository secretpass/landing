"use client";

import {
  Button,
  Dropdown,
  Header,
  IconChevronDown,
  Separator,
} from "@heroui/react";
import {
  IconCloudFilled,
  IconDeviceLaptop,
  IconHomeFilled,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Logo } from "../brand";
import { DropdownItem, type DropdownItemProps } from "../dropdown";
import { COMMUNITY_LINKS, RESOURCES_LINKS } from "./links";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <header className="container mx-auto">
        <div className="flex grow h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="size-7" />
            <span className="text-2xl font-bold">Secretpass</span>
            <span className="text-2xl font-bold text-accent">Home</span>
            <IconHomeFilled className="size-7 text-accent" />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link href="#features">
              <Button variant="ghost">Features</Button>
            </Link>
            <LinkDropDown items={COMMUNITY_LINKS} label="Community" />
            <LinkDropDown items={RESOURCES_LINKS} label="Resources" />
            <Link href="#faq">
              <Button variant="ghost">FAQ</Button>
            </Link>
            <div className="flex items-center gap-2 border-l pl-4">
              <ThemeToggle />
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="mr-4 button button--icon-only button-md button--ghost">
                    <IconMenu2 className="h-6 w-6" />
                  </span>
                </Dropdown.Trigger>
                <Dropdown.Popover className="w-sm">
                  <Dropdown.Menu>
                    <DropdownItem
                      is_external
                      href="https://cloud.secretpass.cloud"
                      Icon={IconCloudFilled}
                      label="Cloud"
                      capture="local-to-cloud-interest"
                    />
                    <DropdownItem
                      is_external
                      href="https://local.secretpass.cloud"
                      Icon={IconDeviceLaptop}
                      label="Local"
                      capture="cloud-to-local-interest"
                    />
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Dropdown>
              <Button
                type="button"
                variant="ghost"
                className="mr-4"
                isIconOnly
                aria-label="Toggle menu"
              >
                <IconMenu2 className="h-6 w-6" />
              </Button>
              <Dropdown.Popover className="w-sm">
                <Dropdown.Menu>
                  <DropdownItem
                    is_external
                    href="https://cloud.secretpass.cloud"
                    Icon={IconCloudFilled}
                    label="Cloud"
                    capture="local-to-cloud-interest"
                  />
                  <DropdownItem
                    is_external
                    href="https://local.secretpass.cloud"
                    Icon={IconDeviceLaptop}
                    label="Local"
                    capture="cloud-to-local-interest"
                  />
                  <Separator />
                  <Dropdown.Section>
                    <Header>Community</Header>
                    {COMMUNITY_LINKS.map((item) => (
                      <DropdownItem key={item.href} {...item} />
                    ))}
                  </Dropdown.Section>
                  <Dropdown.Section>
                    <Header>Resources</Header>
                    {RESOURCES_LINKS.map((item) => (
                      <DropdownItem key={item.href} {...item} />
                    ))}
                  </Dropdown.Section>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>
      </header>
    </nav>
  );
}

function LinkDropDown({
  items,
  label,
}: {
  items: DropdownItemProps[];
  label: ReactNode;
}) {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className="button button--md button--ghost w-full md:w-auto justify-start">
          {label}
          <IconChevronDown />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu>
          {items.map((item) => (
            <DropdownItem key={item.href} {...item} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
