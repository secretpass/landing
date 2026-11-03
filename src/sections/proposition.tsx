import clsx from "clsx";
import type { ReactNode } from "react";
import { HackersIllustration } from "@/components/illustrations/hackers";
import { UsIllustration } from "@/components/illustrations/UsIllustration";
import { YouIllustration } from "@/components/illustrations/YouIllustration";

export function Proposition() {
  return (
    <div className="flex flex-col w-full gap-8 max-w-4xl mx-auto px-4">
      <PropositionContainer>
        <YouIllustration className="w-20 h-auto" />
        <PropositionText className="text-success text-left">
          🕺 You don't have a password!
        </PropositionText>
      </PropositionContainer>
      <PropositionContainer>
        <PropositionText className="text-success text-right">
          🧑‍🩰 We don't have a secret key!
        </PropositionText>
        <UsIllustration className="w-16 h-auto -mt-10" />
      </PropositionContainer>
      <PropositionContainer>
        <HackersIllustration className="w-16 h-auto" />
        <PropositionText className="text-left">
          <span className="text-yellow-700 font-light">
            💃 Even the hackers don'
            <span className="text-muted">...</span>
          </span>{" "}
          <span className="text-success">
            😤 can't hack what doesn't exist!
          </span>
        </PropositionText>
      </PropositionContainer>
    </div>
  );
}

function PropositionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("flex items-end gap-6 justify-start", className)}>
      {children}
    </div>
  );
}

function PropositionText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "text-2xl lg:text-4xl italic font-semibold grow",
        className,
      )}
    >
      {children}
    </span>
  );
}
