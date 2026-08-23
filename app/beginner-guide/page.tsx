import Link from "next/link";
import { GameVisual } from "@/components/game-visual";
import { Icon } from "@/components/icons";
import { BattlefieldBriefing, ControlZoneDiagram } from "@/components/visuals";
import {
  DirectAnswer,
  Eyebrow,
  RelatedGuides,
  SourceList,
  StatusPill,
} from "@/components/ui";
import { absoluteUrl, buildMetadata, siteConfig } from "@/lib/site";

const pageTitle = "WARDOGS Beginner Guide: Your First Match";
const metaDescription =
  "New to WARDOGS? Learn how matches work, what to do in your first life, how Cash and loadouts work, and which beginner mistakes to avoid.";

export const metadata = buildMetadata(
  pageTitle,
  metaDescription,
  "/beginner-guide",
);

const officialSources = {
  developerFaq:
    "https://steamcommunity.com/app/1867240/discussions/0/762932533852726673/",
  teamworkReply:
    "https://steamcommunity.com/app/1867240/discussions/0/766311475521464329/",
  gameModeVideo: "https://www.youtube.com/watch?v=cSn5IGknapM",
} as const;

type BeginnerFaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

const faq: BeginnerFaqItem[] = [
  {
    question: "How do you play WARDOGS?",
    answer:
      "Three teams compete for the Control Zone. Every 30 seconds, the team with the most players inside earns one point, and the first team to 100 wins.",
  },
  {
    question: "What should I do first?",
    answer:
      "Select a team, identify the Control Zone, check the current score, and review your starting Cash before choosing a loadout for your first life.",
  },
  {
    question: "Is WARDOGS an extraction shooter?",
    answer:
      "No. Official descriptions explicitly state that WARDOGS is not a battle royale or extraction shooter.",
  },
  {
    question: "How much Cash do new players start with?",
    answer: "Every player starts their WARDOGS journey with $10,000.",
  },
  {
    question: "Does Cash reset after every match?",
    answer:
      "No. Official descriptions state that Cash persists from match to match.",
  },
  {
    question: "How do Loadouts work?",
    answer:
      "Each life, you purchase a custom loadout containing weapons, gear, utility, or vehicles. Exact prices and optimal builds can change as the game develops.",
  },
  {
    question: "What happens when you die?",
    answer:
      "Official sources confirm that each life uses a purchased custom loadout. Current Beta players report preparing another life and using a previous-loadout or rebuy option, but the complete death and respawn flow is not yet documented in the reviewed first-party sources.",
  },
  {
    question: "What happens if you run out of Cash?",
    answer:
      "Reviewed first-party sources do not yet provide a complete zero-Cash explanation. Community claims about basic or free options are not treated as confirmed here.",
  },
  {
    question: "Does WARDOGS have Classes?",
    answer:
      "WARDOGS does not use traditional locked classes. The equipment and vehicles you purchase let you take on different combat or support roles for that life.",
  },
  {
    question: "Can support players earn Cash?",
    answer:
      "Yes. Official examples include reviving teammates, transporting players to the zone, and helping control the objective.",
  },
  {
    question: "How does Spotting work?",
    answer:
      "Current Beta players use Spotting as a support activity, but its exact visibility, duration, Cash rewards, and XP rules are not fully documented in the reviewed first-party sources.",
  },
  {
    question: "Should beginners fly Helicopters?",
    answer:
      "Helicopters are part of WARDOGS, but current Beta feedback shows a noticeable control-learning curve. Consider learning the controls before taking responsibility for a full transport.",
  },
  {
    question: "Does WARDOGS support controllers?",
    answer:
      "Controller support is currently limited. See the WARDOGS controller and console status for the latest verified details.",
    link: {
      href: "/console",
      label: "WARDOGS controller and console status",
    },
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl("/beginner-guide")}#webpage`,
      url: absoluteUrl("/beginner-guide"),
      name: pageTitle,
      description: metaDescription,
      dateModified: "2026-08-23",
      breadcrumb: { "@id": `${absoluteUrl("/beginner-guide")}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl("/beginner-guide")}#breadcrumb`,
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
          name: "Beginner Guide",
          item: absoluteUrl("/beginner-guide"),
        },
      ],
    },
  ],
};

function BeginnerFaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="faq">
      <Eyebrow>Field questions</Eyebrow>
      <h2>Frequently asked questions</h2>
      <div>
        {faq.map((item, index) => {
          const linkStart = item.link
            ? item.answer.indexOf(item.link.label)
            : -1;
          return (
            <details key={item.question} open={index === 0}>
              <summary>
                {item.question}
                <span>+</span>
              </summary>
              <p>
                {item.link && linkStart >= 0 ? (
                  <>
                    {item.answer.slice(0, linkStart)}
                    <Link href={item.link.href}>{item.link.label}</Link>
                    {item.answer.slice(linkStart + item.link.label.length)}
                  </>
                ) : (
                  item.answer
                )}
              </p>
            </details>
          );
        })}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}

export default function BeginnerPage() {
  return (
    <article className="article-shell beginner-page">
      <header className="article-hero beginner-hero">
        <Eyebrow>First match field guide</Eyebrow>
        <StatusPill tone="current">Closed Beta evidence reviewed</StatusPill>
        <p className="article-updated">
          Last Updated: <time dateTime="2026-08-23">August 23, 2026</time>
        </p>
        <h1>WARDOGS Beginner Guide: Your First Match Explained</h1>
        <DirectAnswer>
          <p>
            <a
              href={siteConfig.official.steam}
              target="_blank"
              rel="noreferrer"
            >
              WARDOGS is a three-team Control Zone FPS, not a battle royale or
              extraction shooter
            </a>
            . Every 30 seconds, the team with the most players in the Control
            Zone earns one point, and the first team to 100 wins. You begin with
            $10,000, purchase a custom loadout for each life, and keep your Cash
            between matches.
          </p>
          <p>
            For your first match, select a team, identify the Control Zone,
            check what your loadout costs, and choose equipment that gives you a
            useful role for that life. Some death, respawn and zero-Cash details
            seen in the current Beta are not yet fully documented in first-party
            sources, so this guide labels those separately.
          </p>
        </DirectAnswer>

        <div className="beginner-quick-start" aria-label="First match priorities">
          <span>Choose a team</span>
          <span>Find the Control Zone</span>
          <span>Check the score</span>
          <span>Review loadout cost</span>
        </div>
        <p className="beginner-version-note">
          For current test availability, see the{" "}
          <Link href="/playtest">WARDOGS Playtest status</Link>.
        </p>
      </header>

      <GameVisual
        id="beginner-battlefield-overlook"
        className="article-primary-visual"
        priority
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="article-body beginner-article-body">
        <section aria-labelledby="beginner-sixty-seconds">
          <h2 id="beginner-sixty-seconds">WARDOGS in 60 Seconds</h2>
          <ul className="beginner-fact-list">
            <li>Up to 100 players fight across three teams.</li>
            <li>The central match objective is the Control Zone.</li>
            <li>
              Every 30 seconds, the team with the most players in the zone earns
              one point.
            </li>
            <li>The first team to reach 100 points wins.</li>
            <li>WARDOGS is not a battle royale or extraction shooter.</li>
          </ul>
          <p>
            The wider battlefield and randomized 2×2 km Control Zone are
            described on the{" "}
            <a
              href={siteConfig.official.team17}
              target="_blank"
              rel="noreferrer"
            >
              official Team17 WARDOGS page
            </a>
            .
          </p>
        </section>

        <BattlefieldBriefing />

        <section aria-labelledby="how-a-match-works">
          <h2 id="how-a-match-works">How Does a WARDOGS Match Work?</h2>

          <h3>Three Teams</h3>
          <p>
            The three teams are Valkyra, Lonestar, and Manticore. The reviewed
            official material does not assign beginner-friendly strengths or
            special abilities to those factions, so choose a team without
            assuming hidden faction bonuses.
          </p>

          <h3>Control Zone Scoring</h3>
          <p>
            According to the{" "}
            <a
              href={officialSources.developerFaq}
              target="_blank"
              rel="noreferrer"
            >
              official developer FAQ
            </a>
            , the game compares how many players from each team are inside the
            Control Zone every 30 seconds. The team with the most players there
            earns one point.
          </p>
          <ControlZoneDiagram />

          <h3>Win Condition</h3>
          <p>
            The first team to 100 points wins. Eliminations can support control
            of the battlefield, but the kill count is not the match win
            condition.
          </p>

          <h3>What WARDOGS Is Not</h3>
          <p>
            WARDOGS is not a battle royale or extraction shooter. Its core loop
            is not about reaching a safe extraction point or carrying loot into
            a traditional extraction stash.
          </p>
        </section>

        <section aria-labelledby="before-first-deployment">
          <h2 id="before-first-deployment">
            What Should You Do Before Your First Deployment?
          </h2>

          <h3>Select a Team</h3>
          <p>
            Choose Valkyra, Lonestar, or Manticore. The developer FAQ states
            that a player must select a team to be considered active in the
            match.
          </p>

          <h3>Understand the Objective</h3>
          <p>
            Check the Control Zone and current score before chasing a fight.
            More players in the zone at the scoring check move the team toward
            victory; kills alone do not.
          </p>

          <h3>Understand Your $10,000</h3>
          <p>
            Every player starts with $10,000. Cash persists between matches, and
            each life uses a purchased loadout, so check the cost before you
            deploy. For the detailed resource system, read the{" "}
            <Link href="/cash-economy">WARDOGS Cash economy guide</Link>.
          </p>

          <h3>Choose a Role Without Fixed Classes</h3>
          <p>
            WARDOGS does not lock you into traditional classes. The weapons,
            medical items, transport, vehicles, or building tools you purchase
            let you take on a useful combat or support role for that life. These
            are examples of possible contributions, not a fixed class list.
          </p>
        </section>

        <section aria-labelledby="first-twenty-minutes">
          <h2 id="first-twenty-minutes">
            Your First 10–20 Minutes in WARDOGS
          </h2>
          <ol className="beginner-journey">
            <li>Select Valkyra, Lonestar, or Manticore.</li>
            <li>Check the Control Zone and current score.</li>
            <li>Review your starting Cash before buying a loadout.</li>
            <li>Choose equipment that gives you a clear role for this life.</li>
            <li>
              For a first match, consider using existing team transport when it
              is practical instead of immediately funding your own vehicle.
            </li>
            <li>
              Contribute through combat, revives, transport, or objective play.
            </li>
            <li>Track your remaining Cash before the next life.</li>
            <li>
              Continue playing or leave when needed; WARDOGS supports
              drop-in/drop-out sessions.
            </li>
          </ol>

          <aside className="first-match-checklist" aria-labelledby="checklist-title">
            <span className="checklist-label">Deployment card</span>
            <h3 id="checklist-title">First Match Checklist</h3>
            <ul>
              <li>Choose a team.</li>
              <li>Find the Control Zone.</li>
              <li>Check the current score.</li>
              <li>Remember that kills alone do not win the match.</li>
              <li>Review your $10,000 starting Cash.</li>
              <li>Check the total cost of this life&apos;s loadout.</li>
              <li>Choose equipment that gives you a useful role.</li>
              <li>Use combat or support actions to help the objective.</li>
              <li>
                Reassess your remaining Cash before buying the next loadout.
              </li>
              <li>Leave when needed; sessions support drop-in/drop-out.</li>
            </ul>
          </aside>
        </section>

        <section aria-labelledby="cash-and-loadouts">
          <h2 id="cash-and-loadouts">
            How Cash and Loadouts Affect Every Life
          </h2>
          <p>
            You start with $10,000, and Cash persists from match to match. Each
            life uses a purchased custom loadout that can include weapons, gear,
            utility, or vehicles. Teamplay actions—including reviving teammates,
            transporting players to the zone, and helping control the
            objective—can earn Cash.
          </p>
          <p>
            This page does not publish farming routes, exact payout tables, Gold
            conversion, or an optimal loadout. Those details are either outside
            the beginner scope or not fully documented. Continue with the{" "}
            <Link href="/cash-economy">WARDOGS Cash economy guide</Link>.
          </p>
        </section>

        <section aria-labelledby="what-happens-when-you-die">
          <h2 id="what-happens-when-you-die">
            What Happens When You Die?
          </h2>
          <div className="evidence-boundaries">
            <article>
              <span className="evidence-label confirmed">
                Officially Confirmed
              </span>
              <p>
                Official descriptions state that each life uses a purchased
                custom loadout. That is the safe first-party basis for explaining
                why the next life is another resource decision.
              </p>
            </article>
            <article>
              <span className="evidence-label observed">
                Observed in the Current Beta
              </span>
              <p>
                Current Beta players and gameplay material show players preparing
                another life after death, with previous-loadout or rebuy behavior
                visible in the current interface. These are current observations,
                not promises that the UI or flow will remain unchanged.
              </p>
            </article>
            <article>
              <span className="evidence-label unconfirmed">
                Not Yet Confirmed
              </span>
              <p>
                Reviewed first-party sources do not fully explain exactly which
                items are lost, the complete respawn flow, respawn cooldowns,
                corpse persistence, or stash rules.
              </p>
            </article>
          </div>
          <div className="callout">
            <strong>What if you run out of Cash?</strong>
            <p>
              Reviewed first-party sources do not yet provide a complete
              zero-Cash explanation. Community claims about basic or free options
              are not treated as confirmed here.
            </p>
          </div>
        </section>

        <section aria-labelledby="help-without-kills">
          <h2 id="help-without-kills">
            How to Help Your Team Without Chasing Kills
          </h2>
          <div className="mechanics-grid">
            <article className="mechanic">
              <Icon name="shield" />
              <h3>Revive</h3>
              <p>
                Reviving teammates is an official example of a teamplay action
                that can earn Cash.
              </p>
            </article>
            <article className="mechanic">
              <Icon name="vehicle" />
              <h3>Transport</h3>
              <p>
                Transporting players to the zone can support the objective and
                earn Cash.
              </p>
            </article>
            <article className="mechanic">
              <Icon name="map" />
              <h3>Objective</h3>
              <p>
                Helping control the objective contributes to the team&apos;s score
                and is listed as a Cash-earning action.
              </p>
            </article>
          </div>
          <div className="callout">
            <span className="evidence-label observed">
              Observed in the Current Beta
            </span>
            <strong>Spotting as support</strong>
            <p>
              Current Beta players use Spotting as a support activity. Its exact
              visibility, duration, Cash rewards, and XP rules are not fully
              documented in the reviewed first-party sources, so no payout or
              range is stated here.
            </p>
          </div>
        </section>

        <section aria-labelledby="vehicles-for-beginners">
          <h2 id="vehicles-for-beginners">
            Vehicles and Helicopters for Beginners
          </h2>
          <p>
            Vehicles and aircraft are part of WARDOGS combined-arms play. They
            can be purchased as part of a life, while transport can help other
            players reach the objective. A developer has also explained that
            taking lifts from other players can reduce what you spend each life
            in the{" "}
            <a
              href={officialSources.teamworkReply}
              target="_blank"
              rel="noreferrer"
            >
              official teamwork reply
            </a>
            .
          </p>
          <div className="callout">
            <span className="evidence-label observed">
              Current Beta practical advice
            </span>
            <p>
              Helicopter controls are a repeated new-player problem in current
              Beta discussions and creator guides. Consider learning the controls
              before taking responsibility for a full transport. This is practical
              community-informed advice, not an official rule or required playstyle.
            </p>
          </div>
        </section>

        <section aria-labelledby="beginner-mistakes">
          <h2 id="beginner-mistakes">
            WARDOGS Beginner Mistakes to Avoid
          </h2>
          <ol className="beginner-mistakes">
            <li>
              <strong>Treating WARDOGS like Team Deathmatch.</strong> Control Zone
              scoring, not the kill count, determines the winner.
            </li>
            <li>
              <strong>Treating WARDOGS like an extraction shooter.</strong> The
              official game description explicitly says it is not one.
            </li>
            <li>
              <strong>Ignoring that Cash persists between matches.</strong> The
              cost of this life&apos;s loadout can affect later deployment choices.
            </li>
            <li>
              <strong>Looking for a locked Class system.</strong> Equipment and
              vehicles define the role you can perform for that life.
            </li>
            <li>
              <strong>Only chasing kills.</strong> Revives, transport, and
              objective play are official Cash-earning contributions.
            </li>
            <li>
              <strong>Flying an expensive transport before learning the controls.</strong>{" "}
              This is current Beta practical advice based on repeated player
              problems, not an official restriction.
            </li>
            <li>
              <strong>Treating community claims as fixed rules.</strong> APC
              timers, free gear, exact Spotting payouts, and precise respawn rules
              are not confirmed here.
            </li>
          </ol>
        </section>

        <section aria-labelledby="not-documented">
          <h2 id="not-documented">What Is Still Not Officially Documented?</h2>
          <ul>
            <li>Exact death item-loss rules</li>
            <li>The complete respawn flow</li>
            <li>The zero-Cash fallback</li>
            <li>Exact Spotting rewards</li>
            <li>Current armor values and weapon meta</li>
            <li>Gold conversion and its detailed gameplay loop</li>
          </ul>
          <p>
            This guide will not fill those gaps with community guesses. The
            wording will be updated when first-party evidence becomes available.
          </p>
        </section>
      </div>

      <SourceList
        sources={[
          { label: "WARDOGS on Steam", href: siteConfig.official.steam },
          {
            label: "Official WARDOGS developer FAQ",
            href: officialSources.developerFaq,
          },
          {
            label: "Official Team17 WARDOGS page",
            href: siteConfig.official.team17,
          },
          {
            label: "Developer teamwork reply",
            href: officialSources.teamworkReply,
          },
          {
            label: "Official Game Mode Explained video",
            href: officialSources.gameModeVideo,
          },
        ]}
      />
      <BeginnerFaqSection />
      <RelatedGuides
        links={[
          {
            title: "WARDOGS price",
            href: "/price",
            text: "Paid purchase model and regional Steam pricing.",
          },
          {
            title: "WARDOGS release date",
            href: "/release-date",
            text: "The confirmed Steam Early Access timeline.",
          },
        ]}
      />
    </article>
  );
}
