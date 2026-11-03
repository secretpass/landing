"use client";

import { Card, CardContent, Description, Label, Tabs } from "@heroui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CodeHighlighter } from "@/components/shared";
import { CodeLanguage, CodeLanguageIcon } from "@/constants";

interface AccessSample {
  language: CodeLanguage;
  code: string[];
  command: string;
}

const UNIX_INSTRUCTIONS = `# Official Installer
curl -LsSf https://github.com/secretpass/cli/releases/download/${process.env.NEXT_APP_VERSION}/secretpass-cli-installer.sh | sh
# Or Use brew
brew install secretpass/tap/secretpass-cli

# Start local service - not needed for cloud.secretpass.cloud
spass local start

# HUMANS: Run a command with secrets injected decrypted through your passkey
# A browser tab will be opened allowing you to authorize the operation
spass local run -- {{COMMAND}}
spass cloud run -- {{COMMAND}}

# CI, CODE, AGENTS e.t.c: Run a command using a generated private key
spass local run --private-key="key generated from manager" --env staging -- {{COMMAND}}
spass cloud run --private-key="key generated from manager" --env staging -- {{COMMAND}}
`;

const ACCESS_SAMPLES: AccessSample[] = [
  {
    language: CodeLanguage.Typescript,
    code: [
      "export function getSecret(name: string, default_value?: string): string | undefined {",
      "    // Secrets are automatically injected into your environment variables",
      "    return process.env[name] ?? default_value",
      "}",
    ],
    command: "npm run start",
  },
  {
    language: CodeLanguage.Python,
    code: [
      "import os\n",
      "def get_secret(env_name: str, default: str) -> str:",
      "    # Secrets are automatically injected into your environment variables",
      "    return os.getenv('SECRET_NAME', 'default value')",
    ],
    command: "python main.py",
  },
  {
    language: CodeLanguage.Golang,
    code: [
      "package secrets\n",
      `import ("fmt", "os", "strings")\n`,
      `function GetSecret(envName string) string {`,
      "    // Secrets are automatically injected into your environment variables",
      `    return os.Getenv(envName)`,
      `}`,
    ],
    command: "go run .",
  },
  {
    language: CodeLanguage.Rust,
    code: [
      "use std::env;\n",
      "pub fn get_secret(name: &str) -> Option<String> {",
      "    // Secrets are automatically injected into your environment variables",
      "    env::var(name)",
      "}",
    ],
    command: "cargo run",
  },
  {
    language: CodeLanguage.CPlusPlus,
    code: [
      "#include <string>",
      "#include <cstdlib>\n",
      "std::string get_secret(const std::string& name) {",
      "    // Secrets are automatically injected into your environment variables",
      '    return std::getenv(name.c_str()) ? std::string(std::getenv(name.c_str())) : std::string("default value");',
      "}",
    ],
    command: "g++ main.cpp -o main && ./main",
  },
  {
    language: CodeLanguage.Java,
    code: [
      "public class Secrets {",
      "    public static String getString(String name)",
      "        // Secrets are automatically injected into your environment variables",
      "        return System.getenv(name);",
      "    }",
      "}",
    ],
    command: "java main.java",
  },
];

const PLAYBACK_SPEEDS = [1, 1.5, 2, 2.5, 3];

export function QuickStartDemo() {
  const [language, setLanguage] = useState<CodeLanguage>(
    CodeLanguage.Typescript,
  );
  const [playback, setPlayback] = useState<{ play: boolean; speed: number }>({
    play: true,
    speed: 2,
  });

  const ref = useRef<HTMLVideoElement | null>(null);
  const sample = useMemo(
    () =>
      ACCESS_SAMPLES.find((sample) => sample.language === language) ??
      ACCESS_SAMPLES[0],
    [language],
  );

  const setup = useMemo(
    () => UNIX_INSTRUCTIONS.replaceAll("{{COMMAND}}", sample.command),
    [sample.command],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.playbackRate = playback.speed;
  }, [playback.speed]);

  return (
    <Card
      className="dark text-foreground flex flex-col gap-8 w-full"
      variant="default"
    >
      <CardContent>
        <div className="w-full flex justify-between mb-2 items-end flex-wrap">
          <div>
            <Label className="text-lg">Your code stays simple</Label>
            <br />
            <Description className="text-sm italic">
              If it can read environments, it can work with secretpass
            </Description>
          </div>
          <Tabs
            selectedKey={language}
            onSelectionChange={(key) => setLanguage(key as CodeLanguage)}
            className="overflow-x-scroll"
          >
            <Tabs.ListContainer>
              <Tabs.List>
                {ACCESS_SAMPLES.map((sample) => {
                  const LanguageIcon = CodeLanguageIcon[sample.language];
                  return (
                    <Tabs.Tab
                      className="h-auto py-1 gap-2"
                      key={sample.language}
                      id={sample.language}
                    >
                      <LanguageIcon className="size-5" />
                      {sample.language}
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  );
                })}
              </Tabs.List>
            </Tabs.ListContainer>
          </Tabs>
        </div>

        <CodeHighlighter
          code={sample.code.join("\n")}
          language={sample.language}
        />

        <div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-4 w-full items-start mt-6">
          <div className="w-full xl:w-1/2">
            <div className="w-full flex justify-between mb-2 items-end flex-wrap">
              <div>
                <Label className="text-lg">Install and run</Label>
                <br />
                <Description className="text-sm italic">
                  Let secretpass do the heavy lifting
                </Description>
              </div>
            </div>
            <CodeHighlighter
              className="grow"
              code={setup}
              language={CodeLanguage.Shell}
            />
          </div>

          <div className="xl:w-1/2">
            <div className="w-full flex justify-between mb-2 items-end flex-wrap">
              <div>
                <Label className="text-lg">See it in action</Label>
                <br />
                <Description className="text-sm italic">
                  Local secret management
                </Description>
              </div>
              <Tabs
                selectedKey={playback.speed}
                onSelectionChange={(speed) =>
                  setPlayback((current) => ({
                    ...current,
                    speed: speed as number,
                  }))
                }
                className="overflow-x-scroll"
              >
                <Tabs.ListContainer>
                  <Tabs.List>
                    {PLAYBACK_SPEEDS.map((speed) => {
                      return (
                        <Tabs.Tab
                          className="h-auto py-0.5"
                          key={speed}
                          id={speed}
                        >
                          {speed}x
                          <Tabs.Indicator />
                        </Tabs.Tab>
                      );
                    })}
                  </Tabs.List>
                </Tabs.ListContainer>
              </Tabs>
            </div>
            <video
              ref={ref}
              className="h-auto w-full rounded-2xl border"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/local-demo.mp4" type="video/mp4" />
              <source src="/local-demo.webm" type="video/webm" />
              <track src="/local-demo.vtt" kind="descriptions" default />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
