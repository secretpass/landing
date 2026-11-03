export interface IFaqItem {
  title: string;
  description: string;
}

export const FAQ_ITEMS: IFaqItem[] = [
  {
    title: "What is secret zero?",
    description:
      "Secret zero is a master key that secret managers use to control access to secrets for you. Secretpass doesn't keep any keys that can be used to decrypt your secrets. Each user keeps their private keys, public keys are shared allowing one way encryption between users.",
  },
  {
    title: "Does secret support access by multiple team members?",
    description:
      "Locally or on cloud, you get a multi-user experience with fine-grained access to projects, environments and secrets. Access can be granted to individual users or teams.",
  },
  {
    title: "What's the big deal about passkeys?",
    description:
      "For human users, we use Passkeys and Hardware keys for encryption and decryption purposes. These keys are secured by biometrics and never leave your device for ultimate security.",
  },
  {
    title: "How does local storage work?",
    description:
      "With local storage, you can store encrypted secrets as part of your codebase without compromising security since secrets can only be decrypted through by a user's passkey, this option is best for small teams without a lot of secrets.",
  },
  {
    title:
      "Can I store development and production secrets in the same project?",
    description:
      "Keep dev, staging and production secrets separate through environments with access-control per environment with environment tagging allowing point in time access.",
  },
  {
    title: "Can I manage multiple projects under secretpass?",
    description:
      "A secretpass user can create and be invited to multiple projects, our paid workspace feature allows organizations to have multiple projects under a single workspace.",
  },
  {
    title: "Can I give access to a bot, CI or server?",
    description:
      "Yes, your code, AI agents and other systems still need to access secure systems, you can create limited scope private keys that allow access to specific environments and/or secrets",
  },
  {
    title: "Can non technical users use technical Secretpass?",
    description:
      "We offer a user friendly and familiar web interface for both local and cloud offerings to reduce the cognitive load and mistakes associated with handling secrets in tty and config files.",
  },
  {
    title: "Is Secretpass open-source?",
    description:
      "No, we share some of our code openly for verifiability while keeping IP protected features private, we'll keep expanding this as we grow.",
  },
];
