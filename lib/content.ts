export type PlaytestPhase = "live" | "ended";

export const playtestState: {
  phase: PlaytestPhase;
  lastUpdated: string;
  start: string;
  end: string;
} = {
  // Beta-end switch: change this field to "ended" and update lastUpdated.
  phase: "live",
  lastUpdated: "2026-08-23",
  start: "August 21, 2026 at 17:00 UTC",
  end: "August 24, 2026 at 02:00 UTC",
};

export const isPlaytestLive = playtestState.phase === "live";

const updatedDate = new Date(`${playtestState.lastUpdated}T00:00:00Z`);

export const playtestUpdatedLabel = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
}).format(updatedDate);

export const playtestUpdatedDay = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  timeZone: "UTC",
}).format(updatedDate);

export const playtestUpdatedMonth = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
}).format(updatedDate).toUpperCase();

export const currentFacts = {
  checked: playtestUpdatedLabel,
  playtest: {
    label: isPlaytestLive ? "Live" : "Ended",
    answer: isPlaytestLive
      ? "Closed Beta: live now"
      : "August Closed Beta: ended",
    detail: isPlaytestLive
      ? `The official window ends ${playtestState.end}. Pre-orders include guaranteed access; Steam Request Access is limited.`
      : "The August 21–23 Closed Beta has ended. Steam Early Access begins September 10, 2026.",
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
    detail:
      "Xbox and PlayStation are developer-stated plans; no console release date or crossplay plan has been announced.",
  },
} as const;
