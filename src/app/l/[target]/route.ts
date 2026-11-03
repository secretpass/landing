import { type NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ target: string }>;
};

export async function GET(_request: NextRequest, context: RouteContext) {
  const { target } = await context.params;

  switch (target) {
    case "docs":
      // TODO: Update this link to be automatically picked from posthog
      return NextResponse.redirect(
        "https://github.com/secretpass/cli/releases",
      );
  }

  // Redirect to home if the social network is unknown
  return NextResponse.redirect("/");
}
