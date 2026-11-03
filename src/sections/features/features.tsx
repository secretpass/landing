"use client";

import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";

interface IFeatureItem {
  supported: boolean;
  label: string;
}

export function FeaturesSection() {
  return (
    <section id="features" className="container py-12 sm:py-16 mx-1 sm:mx-auto">
      <div className="mb-4 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Secrets that grow with you
        </h2>
        <p className="max-w-3xl text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Features designed to allow you to grow from solo projects to large
          multi-product organizations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mx-auto">
        {FEATURES.map((item) => (
          <div key={item.label} className="flex items-center text-xl gap-4">
            {item.supported && (
              <IconCircleCheckFilled className="size-6 text-success" />
            )}
            {!item.supported && (
              <IconCircleXFilled className="size-6 text-danger" />
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function supported(label: string): IFeatureItem {
  return {
    label,
    supported: true,
  };
}

const FEATURES: IFeatureItem[] = [
  supported("Multiple Users"),
  supported("Machine access keys"),
  supported("Multiple Environments"),
  supported("Point-in-Time access"),
  supported("Local storage"),
  supported("Cloud storage"),
  {
    supported: false,
    label: "Secret Zero",
  },
  supported("Multi-Project workspaces"),
];
