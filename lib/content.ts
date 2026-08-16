export const currentFacts = {
  checked: "August 16, 2026",
  playtest: {
    label: "Upcoming",
    answer: "Closed Beta: August 21–23, 2026",
    detail:
      "Pre-orders include guaranteed Closed Beta access. A smaller number of players may be selected through Steam Playtest.",
  },
  release: {
    label: "Confirmed",
    answer: "Steam Early Access: September 10, 2026",
    detail: "The announced launch is for Steam Early Access on PC.",
  },
  price: {
    label: "Current",
    answer: "Paid pre-orders are live on Steam",
    detail: "Steam displays regional pricing. WARDOGS is not announced as free-to-play.",
  },
  platforms: {
    label: "Partially confirmed",
    answer: "Steam / PC confirmed",
    detail: "PS5, Xbox, console release timing, and crossplay are not currently confirmed.",
  },
} as const;
