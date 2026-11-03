import { type NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ network: string }>;
};

export async function GET(_request: NextRequest, context: RouteContext) {
  const { network } = await context.params;

  switch (network) {
    case "slack":
      // TODO: Update this link to be automatically picked from posthog
      return NextResponse.redirect(
        "https://join.slack.com/t/secretpass/shared_invite/zt-4d9mmt674-61B5KDTJ1vef9AF9z2aoDQ",
      );
    case "reddit":
      return NextResponse.redirect("https://www.reddit.com/r/secretpass_cloud");
    case "discord":
      return NextResponse.redirect("https://discord.gg/CAb6GzfFdS");
    case "github":
      return NextResponse.redirect("https://github.com/secretpass");
  }

  // Redirect to home if the social network is unknown
  return NextResponse.redirect("/");
}
