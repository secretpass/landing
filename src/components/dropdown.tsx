import { Dropdown } from "@heroui/react";
import { IconExternalLink, type TablerIcon } from "@tabler/icons-react";
import clsx from "clsx";
import type { MouseEventHandler } from "react";
import { useAnalytics } from "@/analytics";

export interface DropdownItemProps {
  label: string;
  Icon: TablerIcon;
  href?: string;
  capture?: string;
  is_external?: boolean;
  onClick?: MouseEventHandler;
  variant?: "danger";
}

export function DropdownItem({
  Icon,
  label,
  href,
  is_external,
  variant,
}: DropdownItemProps) {
  return (
    <Dropdown.Item
      className="flex items-center gap-2"
      key={href || label}
      href={href}
      target={is_external ? "_blank" : undefined}
      variant={variant}
    >
      <Icon className={clsx("size-5", variant === "danger" && "text-danger")} />
      <span className="grow">{label}</span>
      {is_external && <IconExternalLink className="size-4" />}
    </Dropdown.Item>
  );
}
