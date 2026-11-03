"use client";
import { Button, Chip } from "@heroui/react";
import {
  IconArrowRight,
  IconBook2,
  IconBrandGithub,
  IconCloudFilled,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import Link from "next/link";
import { useAnalytics } from "@/analytics";
import { QuickStartDemo } from "@/components/guide/quick-start";
import { Proposition } from "./proposition";

export function HeroSection() {
  const analytics = useAnalytics();

  return (
    <section id="hero">
      <div className="container mx-auto relative flex flex-col items-center pt-24 pb-12 text-center md:pt-32 md:pb-16">
        <Link
          href="https://github.com/secretpass"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4"
        >
          <Chip color="success">
            <IconBrandGithub className="size-3.5 text-primary" />
            <Chip.Label className="font-semibold">
              Transparent Source Code; Business Source License 1.1
            </Chip.Label>
          </Chip>
        </Link>

        <Proposition />

        <p className="mt-6 max-w-4xl text-xl text-muted sm:text-2xl">
          Secretpass encrypts and decrypts{" "}
          <strong className="font-semibold text-yellow-700">
            your secrets
          </strong>{" "}
          with{" "}
          <strong className="font-semibold text-yellow-700">
            your passkey
          </strong>{" "}
          on{" "}
          <strong className="font-semibold text-yellow-700">your device</strong>
          ; encrypted secrets are stored in your codebase or on a our cloud
          service.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://cloud.secretpass.cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <IconCloudFilled className="size-5" />
              Go Cloud
              <IconArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link
            href="https://local.secretpass.cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <IconDeviceLaptop className="size-5" />
              Go Local
              <IconArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href="https://github.com/secretpass/cli/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                analytics?.capture("pre-launch-click-read-the-docs")
              }
            >
              <IconBook2 className="mr-2 h-4 w-4" />
              Read the docs
            </Button>
          </Link>
        </div>
        <p className="my-6 font-mono text-xs text-muted [animation-delay:400ms]">
          Multi-User · No Secret Zero · Local Storage
        </p>

        <h1 className="mt-8 max-w-3xl text-2xl font-light tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Quick start!
        </h1>
        <div className="text-left w-full my-6">
          <QuickStartDemo />
        </div>
      </div>
    </section>
  );
}
