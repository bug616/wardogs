import type { Metadata } from "next";
import Link from "next/link";
import { GameVisual } from "@/components/game-visual";
import {
  DirectAnswer,
  Eyebrow,
  FAQSection,
  RelatedGuides,
  SourceList,
  StatusPill,
} from "@/components/ui";
import {
  isPlaytestLive,
  playtestState,
  playtestUpdatedLabel,
} from "@/lib/content";
import { absoluteUrl, buildMetadata, siteConfig } from "@/lib/site";

const pageTitle = isPlaytestLive
  ? "WARDOGS Playtest: Beta End Time, Access & Live Status"
  : "WARDOGS Playtest: Closed Beta Ended & What’s Next";

const metaDescription = isPlaytestLive
  ? "The WARDOGS Closed Beta is live until August 24 at 02:00 UTC. Check Steam access, preload, invites and the latest official known issues."
  : "The August WARDOGS Closed Beta has ended. Check the latest playtest status, what happens next, and the confirmed Steam Early Access date.";

const baseMetadata = buildMetadata(pageTitle, metaDescription, "/playtest");

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: pageTitle },
};

const officialSources = {
  schedule: "https://x.com/WARDOGS/status/2090746216761991292",
  knownIssues:
    "https://steamcommunity.com/app/1867240/discussions/0/586183630899134901/",
  twitchDrops: "https://x.com/WARDOGS/status/2090584451457654877",
  controller: "https://www.youtube.com/watch?v=ugkuP4a3xk4",
} as const;

const faq = [
  {
    question: "Is the WARDOGS Beta live?",
    answer: isPlaytestLive
      ? "Yes. As of August 23, 2026, the Closed Beta is within its official live window and is scheduled to end on August 24 at 02:00 UTC."
      : "No. The August 21–23, 2026 WARDOGS Closed Beta has ended.",
  },
  {
    question: isPlaytestLive
      ? "When does the WARDOGS Beta end?"
      : "When did the WARDOGS Beta end?",
    answer: isPlaytestLive
      ? "The official schedule ends on August 24, 2026 at 02:00 UTC. The event is advertised as August 21–23 because the precise UTC closing time crosses into August 24."
      : "The official schedule ended on August 24, 2026 at 02:00 UTC. The event was advertised as August 21–23 because the precise UTC closing time crossed into August 24.",
  },
  {
    question: "Can I still join the WARDOGS Beta?",
    answer: isPlaytestLive
      ? "Steam currently presents pre-purchase as guaranteed Closed Beta access and Request Access as a limited chance. No exact access-delivery time or final invitation cutoff is promised."
      : "No. The August Closed Beta access window has ended. No additional public playtest has been confirmed in the official sources reviewed for this update.",
  },
  {
    question: "How do I get WARDOGS Playtest access?",
    answer: isPlaytestLive
      ? "Pre-purchasing WARDOGS grants guaranteed Closed Beta access according to Steam. Steam Request Access is limited and does not guarantee selection."
      : "The August Closed Beta has ended, so its access routes are no longer active. Steam still offers Request Access for future playtesting interest, but no additional public test or selection is guaranteed.",
  },
  {
    question: "Where do I download WARDOGS Playtest?",
    answer: isPlaytestLive
      ? "If access has been granted, open your Steam library and look for the separate WARDOGS Playtest entry, which is the client used for the Closed Beta."
      : "WARDOGS Playtest was the separate Steam library client used for the August Closed Beta. The test window is no longer active.",
  },
  {
    question: "Why is WARDOGS Playtest not showing in my Steam library?",
    answer: isPlaytestLive
      ? "A Steam Request Access submission is not an invitation. Check the Steam account and library linked to your access, but do not assume every requester will be selected."
      : "The August Closed Beta has ended, so its Playtest client is no longer a current access route.",
  },
  {
    question: "Why does WARDOGS say Access Denied?",
    answer: isPlaytestLive
      ? "Players are reporting Access Denied messages, but the official sources reviewed do not establish one universal cause or fix for every current case."
      : "Older Access Denied reports may relate to previous test windows and should not be treated as a current universal diagnosis.",
  },
  {
    question: "Are the WARDOGS servers down?",
    answer: isPlaytestLive
      ? "Players are reporting queues and empty server lists, but no official live uptime dashboard was found. The developer Known Issues post says to select only one Server Browser region."
      : "The August Closed Beta has ended. No official live server-status dashboard was found for that test.",
  },
  {
    question: "Does WARDOGS Beta progress carry over?",
    answer: isPlaytestLive
      ? "The carry-over or reset policy for the current Closed Beta has not been fully verified from a first-party source reviewed for this page. The older Pre-Alpha policy is not used as a substitute answer."
      : "The carry-over or reset policy for the August Closed Beta has not been fully verified from a first-party source reviewed for this page. The older Pre-Alpha policy is not used as a substitute answer.",
  },
  {
    question: "Can I stream the WARDOGS Closed Beta?",
    answer: isPlaytestLive
      ? "Yes. The official Closed Beta schedule announcement states that the NDA is lifted and invites players to share clips and streams."
      : "The August Closed Beta allowed streaming. Its official schedule announcement stated that the NDA was lifted and invited players to share clips and streams.",
  },
  {
    question: "Are there WARDOGS Beta rewards or Twitch Drops?",
    answer:
      "Official WARDOGS posts confirmed Twitch Drops during the August Beta. The complete reward list, watch time and claim process are not reproduced here without a fully verified first-party rules page.",
  },
  {
    question: "Does the WARDOGS Beta support controller?",
    answer: isPlaytestLive
      ? "Official public information describes limited or partial gamepad support, not guaranteed full controller compatibility for every part of the current Beta build."
      : "Official public information described limited or partial gamepad support for the August Beta, not guaranteed full controller compatibility for every part of that build.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl("/playtest")}#webpage`,
      url: absoluteUrl("/playtest"),
      name: pageTitle,
      description: metaDescription,
      dateModified: playtestState.lastUpdated,
      breadcrumb: { "@id": `${absoluteUrl("/playtest")}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl("/playtest")}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "WARDOGS Hub",
          item: absoluteUrl(),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Playtest Status",
          item: absoluteUrl("/playtest"),
        },
      ],
    },
  ],
};

export default function PlaytestPage() {
  return (
    <article className="article-shell playtest-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <header className="article-hero playtest-hero">
        <Eyebrow>{isPlaytestLive ? "Live access briefing" : "Closed Beta ended · Next test status"}</Eyebrow>
        <p className="article-updated">
          Last Updated:{" "}
          <time dateTime={playtestState.lastUpdated}>{playtestUpdatedLabel}</time>
        </p>
        <h1>WARDOGS Playtest &amp; Closed Beta Status</h1>

        <section
          className="playtest-current-status"
          aria-labelledby="playtest-current-status-title"
        >
          <div className="playtest-status-heading">
            <h2 id="playtest-current-status-title">
              Current WARDOGS Playtest Status
            </h2>
            <StatusPill tone={isPlaytestLive ? "current" : "unknown"}>
              {isPlaytestLive ? "Live now" : "Ended"}
            </StatusPill>
          </div>

          <DirectAnswer>
            {isPlaytestLive ? (
              <>
                <p>
                  As of August 23, 2026, the WARDOGS Closed Beta is live on Steam
                  and is scheduled to end on August 24 at 02:00 UTC. Pre-purchasing
                  WARDOGS grants guaranteed Closed Beta access according to Steam,
                  while Steam Request Access is limited and not guaranteed.
                </p>
                <p>
                  If access has been granted, check your Steam library for WARDOGS
                  Playtest. For current crash, server-browser and voice-chat
                  information, see the{" "}
                  <a
                    href={officialSources.knownIssues}
                    target="_blank"
                    rel="noreferrer"
                  >
                    pinned developer Known Issues post
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <p>
                  The August 21–23 WARDOGS Closed Beta has ended. It closed on
                  August 24, 2026 at 02:00 UTC, so players can no longer enter the
                  game through that Beta access window.
                </p>
                <p>
                  No additional public WARDOGS playtest has been confirmed in the
                  official sources reviewed. Steam still offers Request Access for
                  future testing interest, while the next confirmed milestone is
                  Steam Early Access on September 10, 2026.
                </p>
              </>
            )}
          </DirectAnswer>

          <div className="playtest-status-table-wrap">
            <table className="playtest-status-table">
              <tbody>
                <tr>
                  <th scope="row">Closed Beta</th>
                  <td>{isPlaytestLive ? "Live now" : "Ended"}</td>
                </tr>
                <tr>
                  <th scope="row">Beta Window</th>
                  <td>
                    <a
                      href={officialSources.schedule}
                      target="_blank"
                      rel="noreferrer"
                    >
                      August 21, 2026 at 17:00 UTC – August 24, 2026 at 02:00 UTC
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ended</th>
                  <td>{isPlaytestLive ? "Scheduled for August 24, 02:00 UTC" : "August 24, 02:00 UTC"}</td>
                </tr>
                <tr>
                  <th scope="row">Current Access</th>
                  <td>
                    {isPlaytestLive ? (
                      <a
                        href={siteConfig.official.steam}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Guaranteed according to Steam
                      </a>
                    ) : (
                      "Closed Beta access ended"
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Next Public Playtest</th>
                  <td>{isPlaytestLive ? "No later public test announced" : "Not announced"}</td>
                </tr>
                <tr>
                  <th scope="row">Steam Early Access</th>
                  <td>September 10, 2026</td>
                </tr>
                <tr>
                  <th scope="row">Future Test Signup</th>
                  <td>
                    <a
                      href={siteConfig.official.playtest}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Future testing interest only; access not guaranteed
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Known Issues Context</th>
                  <td>
                    <a
                      href={officialSources.knownIssues}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {isPlaytestLive
                        ? "Official developer thread available"
                        : "Historical August Beta developer thread"}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="playtest-status-note">
            The event is commonly advertised as August 21–23. The precise official
            UTC schedule crosses into August 24 and ends at 02:00 UTC, so those two
            descriptions are not in conflict.
          </p>
        </section>
      </header>

      <GameVisual
        id="playtest-three-team-deployment"
        className="article-primary-visual"
        priority
      />

      <div className="article-body playtest-article-body">
        <h2>{isPlaytestLive ? "When Does the WARDOGS Beta End?" : "When Did the WARDOGS Beta End?"}</h2>
        <p>
          The WARDOGS Closed Beta {isPlaytestLive ? "is scheduled to end" : "ended"} on{" "}
          <strong>August 24, 2026 at 02:00 UTC</strong>. The official August 21–23
          label describes the playable weekend, while the precise UTC closing time
          falls just after midnight on August 24.
        </p>

        {isPlaytestLive ? (
          <>
            <h2>How to Get WARDOGS Beta Access</h2>

            <h3>Pre-order Access</h3>
            <p>
              The current{" "}
              <a
                href={siteConfig.official.steam}
                target="_blank"
                rel="noreferrer"
              >
                WARDOGS Steam offer
              </a>{" "}
              states that pre-purchasing grants guaranteed Closed Beta access. For
              purchase-model context, see the <Link href="/price">WARDOGS price</Link>{" "}
              briefing.
            </p>

            <h3>Steam Request Access</h3>
            <p>
              Steam Request Access offers a limited chance to be selected. A request
              is not an invitation, access is not guaranteed, and the official
              sources reviewed do not promise how quickly an entitlement will
              appear.
            </p>

            <h3>Can You Still Join?</h3>
            <p>
              As of this August 23 update, Steam still presents both the pre-purchase
              offer and Request Access. The store does not publish a precise final
              invitation cutoff or guarantee another random invitation wave before
              the Beta ends.
            </p>

            <h2>How to Download and Preload WARDOGS Playtest</h2>
            <ol>
              <li>Open the Steam account that received or purchased access.</li>
              <li>
                Search the Library for <strong>WARDOGS Playtest</strong>. This is the
                separate Steam entry used for the Closed Beta.
              </li>
              <li>
                If the entitlement has been granted, use that Library entry to
                preload or install the client.
              </li>
            </ol>
            <p>
              The{" "}
              <a
                href={siteConfig.official.steamCommunity}
                target="_blank"
                rel="noreferrer"
              >
                official Closed Beta schedule announcement
              </a>{" "}
              tells players to check Steam for access, so do not rely only on an
              email arriving.
            </p>

            <aside className="playtest-guide-cta">
              <div>
                <strong>Playing the Beta now?</strong>
                <p>Learn the Control Zone, team structure, Cash and support roles.</p>
              </div>
              <Link href="/beginner-guide" className="button">
                Start with the WARDOGS beginner guide
              </Link>
            </aside>

            <h2>Where Is My WARDOGS Playtest Invite?</h2>
            <p>
              The{" "}
              <a
                href={siteConfig.official.steamCommunity}
                target="_blank"
                rel="noreferrer"
              >
                official August 20 update
              </a>{" "}
              says the first Closed Beta invitation wave has been sent. Check the
              Steam account and Library connected to your access. Steam Request
              Access does not guarantee selection, while pre-order access is a
              separate guaranteed route according to the current Steam offer.
            </p>
          </>
        ) : (
          <>
            <h2>How WARDOGS Closed Beta Access Worked</h2>
            <p>
              During the August test, pre-purchase granted guaranteed access while
              Steam Request Access offered a limited chance of selection. Those were
              Beta access routes, not current Early Access instructions.
            </p>
            <h2>The August WARDOGS Playtest Client</h2>
            <p>
              WARDOGS Playtest was the separate Steam Library entry used for the
              Closed Beta. The August test window is now closed.
            </p>
          </>
        )}

        <h2>
          {isPlaytestLive
            ? "Current WARDOGS Beta Known Issues"
            : "August WARDOGS Beta Known Issues"}
        </h2>
        <p>
          The pinned{" "}
          <a
            href={officialSources.knownIssues}
            target="_blank"
            rel="noreferrer"
          >
            Official Closed Beta Known Issues &amp; Info
          </a>{" "}
          post documented the following points for the August test:
        </p>
        <ul>
          <li>Crashes were tracked as part of the testing process.</li>
          <li>
            Players were told to select only one Server Browser region because
            selecting more than one could prevent servers from appearing.
          </li>
          <li>
            The team investigated potential voice-chat outages involving its
            third-party provider.
          </li>
          <li>Supporter Pack content was not available during the Closed Beta.</li>
        </ul>
        <div className="callout">
          <strong>Player-reported symptoms</strong>
          <p>
            During the Beta, players reported queues, Access Denied messages and
            empty server lists. Those historical reports do not prove that every
            case had one confirmed cause, and they should not be treated as a
            current server diagnosis.
          </p>
        </div>

        <div className="callout">
          <strong>Controller scope</strong>
          <p>
            First-party material for the August Beta used limited or partial
            gamepad-support language; it did not guarantee full controller
            compatibility for every part of that build. See the{" "}
            <a
              href={officialSources.controller}
              target="_blank"
              rel="noreferrer"
            >
              official gamepad discussion
            </a>{" "}
            and the <Link href="/console">WARDOGS controller and console status</Link>.
          </p>
        </div>

        <h2>
          {isPlaytestLive
            ? "Can You Stream the WARDOGS Beta?"
            : "Was Streaming Allowed During the WARDOGS Beta?"}
        </h2>
        <p>
          <strong>Yes.</strong> The{" "}
          <a
            href={siteConfig.official.steamCommunity}
            target="_blank"
            rel="noreferrer"
          >
            official Closed Beta announcement
          </a>
          {isPlaytestLive ? " says the NDA is lifted and invites" : " said the NDA was lifted and invited"}
          {" "}players to share clips and streams. This does not override any separate
          rules that may apply to other private testing programs.
        </p>

        <div className="callout">
          <strong>Official Twitch Drops</strong>
          <p>
            WARDOGS confirmed{" "}
            <a
              href={officialSources.twitchDrops}
              target="_blank"
              rel="noreferrer"
            >
              Twitch Drops during the Beta
            </a>
            . This page does not invent past reward items, watch time or claim steps
            without a complete first-party rules page.
          </p>
        </div>

        <h2>What Happens After the Beta?</h2>
        <p>
          WARDOGS is scheduled to enter Steam Early Access on{" "}
          <strong>September 10, 2026</strong>. See the{" "}
          <Link href="/release-date">WARDOGS release date</Link> for the confirmed
          launch phase and platform.
        </p>
        <p>
          No additional public test has been confirmed in the official sources
          reviewed for this update. The{" "}
          <a
            href={siteConfig.official.playtest}
            target="_blank"
            rel="noreferrer"
          >
            official community signup
          </a>{" "}
          remains available for future playtesting interest, not access to the ended
          August Closed Beta or confirmation of another public test.
        </p>
      </div>

      <SourceList
        sources={[
          { label: "WARDOGS on Steam", href: siteConfig.official.steam },
          {
            label: "Official Steam Beta announcements",
            href: siteConfig.official.steamCommunity,
          },
          { label: "Official WARDOGS schedule", href: officialSources.schedule },
          {
            label: "Official Closed Beta Known Issues",
            href: officialSources.knownIssues,
          },
          {
            label: "Official future playtest signup",
            href: siteConfig.official.playtest,
          },
        ]}
      />
      <FAQSection items={faq} />
      <RelatedGuides
        links={[
          {
            title: "Beginner guide",
            href: "/beginner-guide",
            text: "Learn the core match systems before deploying.",
          },
          {
            title: "Release date",
            href: "/release-date",
            text: "The September 10 Early Access timeline.",
          },
          {
            title: "Price",
            href: "/price",
            text: "Current Steam purchase status.",
          },
          {
            title: "Cash economy",
            href: "/cash-economy",
            text: "How WARDOGS Cash works between matches.",
          },
        ]}
      />
    </article>
  );
}
