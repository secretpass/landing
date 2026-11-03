"use client";

import { Accordion, IconChevronDown } from "@heroui/react";
import { FAQ_ITEMS } from "./items";

export function FAQSection() {
  return (
    <section id="faq" className="container py-24 sm:py-32 mx-auto px-2">
      <div className="mb-4 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We're currently fielding these questions, please use the chat button
          to get in touch with us, or engage with us directly on our community
          channels.
        </p>
      </div>

      <Accordion className="w-full max-w-2xl mx-auto">
        {FAQ_ITEMS.map((item) => (
          <Accordion.Item key={item.title}>
            <Accordion.Heading>
              <Accordion.Trigger>
                {item.title}
                <Accordion.Indicator>
                  <IconChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>{item.description}</Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
