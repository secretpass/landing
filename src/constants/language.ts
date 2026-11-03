import {
  type Icon,
  IconBrandCpp,
  IconBrandGolang,
  IconBrandPython,
  IconBrandRust,
  IconBrandTypescript,
  IconCoffee,
  IconTerminal,
} from "@tabler/icons-react";

export enum CodeLanguage {
  Python = "python",
  Typescript = "typescript",
  Java = "java",
  CPlusPlus = "cpp",
  Golang = "go",
  Rust = "rust",
  Shell = "shellscript",
}

export const CodeLanguageLabel: Record<CodeLanguage, string> = {
  [CodeLanguage.Python]: "Python",
  [CodeLanguage.Typescript]: "TypeScript",
  [CodeLanguage.Java]: "Java",
  [CodeLanguage.CPlusPlus]: "C++",
  [CodeLanguage.Golang]: "Go",
  [CodeLanguage.Rust]: "Rust",
  [CodeLanguage.Shell]: "Shell",
};

export const CodeLanguageIcon: Record<CodeLanguage, Icon> = {
  [CodeLanguage.Python]: IconBrandPython,
  [CodeLanguage.Typescript]: IconBrandTypescript,
  [CodeLanguage.Java]: IconCoffee,
  [CodeLanguage.CPlusPlus]: IconBrandCpp,
  [CodeLanguage.Rust]: IconBrandRust,
  [CodeLanguage.Golang]: IconBrandGolang,
  [CodeLanguage.Shell]: IconTerminal,
};
