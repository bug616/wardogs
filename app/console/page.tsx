import type { Metadata } from "next";
import Link from "next/link";
import {
  DirectAnswer,
  Eyebrow,
  FAQSection,
  RelatedGuides,
  SourceList,
  StatusPill,
} from "@/components/ui";
import { absoluteUrl, buildMetadata, siteConfig } from "@/lib/site";

const pageTitle = "Is WARDOGS Coming to Console? PS5 & Xbox Status";
const metaDescription =
  "Is WARDOGS coming to console? BULKHEAD plans Xbox and PlayStation after Early Access, but no console date or crossplay details are announced.";
const baseMetadata = buildMetadata(pageTitle, metaDescription, "/console");

export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: pageTitle },
};

const officialSources = {
  februaryReply:
    "https://steamcommunity.com/app/1867240/discussions/0/762932162500722099/",
  consoleQAndA: "https://www.youtube.com/watch?v=u8se1yOcv0o",
  mayReply:
    "https://steamcommunity.com/app/1867240/discussions/0/806847153386445136/",
  controllerVideo: "https://www.youtube.com/watch?v=ugkuP4a3xk4",
} as const;

const faq = [
  {
    question: "Is WARDOGS on console now?",
    answer:
      "No. The announced Early Access release is for Windows PC through Steam. Xbox and PlayStation are developer-stated plans, not currently released console versions.",
  },
  {
    question: "Is WARDOGS coming to PS5?",
    answer:
      "BULKHEAD has named PlayStation as part of its plan, but a specific PS5 version, PlayStation Store listing, and release date have not been formally announced.",
  },
  {
    question: "Is WARDOGS coming to Xbox?",
    answer:
      "BULKHEAD has named Xbox as part of its console plan, but no Xbox version, Microsoft Store listing, or release date has been formally announced.",
  },
  {
    question: "When will WARDOGS release on console?",
    answer:
      "There is no announced console release date. A developer said console is on the cards for after Early Access, but that sequence is not a release window.",
  },
  {
    question: "Is WARDOGS cross-platform?",
    answer:
      "The announced Early Access release is for Windows PC through Steam. Xbox and PlayStation are longer-term developer plans, but no multi-platform release has been formally announced.",
  },
  {
    question: "Will WARDOGS have crossplay?",
    answer:
      "Crossplay has not been officially announced for any combination of PC, PlayStation, or Xbox.",
  },
  {
    question: "Will WARDOGS crossplay be mandatory?",
    answer:
      "No crossplay policy has been announced, so it is not known whether future crossplay would be mandatory, optional, or available at all.",
  },
  {
    question: "Does WARDOGS support controller?",
    answer:
      "The developers have confirmed partial gamepad support for the Windows PC Early Access launch. Keyboard and mouse remain the PC-focused input method.",
  },
  {
    question: "Does WARDOGS have aim assist?",
    answer:
      "The developers have confirmed limited controller aim assist on PC. This does not confirm how aim assist would work on any future console version.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl("/console")}#webpage`,
      url: absoluteUrl("/console"),
      name: pageTitle,
      description: metaDescription,
      dateModified: "2026-08-22",
      breadcrumb: { "@id": `${absoluteUrl("/console")}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl("/console")}#breadcrumb`,
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
          name: "Console Status",
          item: absoluteUrl("/console"),
        },
      ],
    },
  ],
};

export default function ConsolePage() {
  return (
    <article className="article-shell console-page">
      <header className="article-hero console-hero">
        <Eyebrow>Platform status</Eyebrow>
        <StatusPill tone="current">Developer plan stated</StatusPill>
        <p className="article-updated">
          Last Updated: <time dateTime="2026-08-22">August 22, 2026</time>
        </p>
        <h1>Is WARDOGS Coming to Console?</h1>
        <p>
          The current status of WARDOGS on PlayStation, PS5, Xbox, cross-platform
          release, and crossplay—separating developer plans from formal release
          announcements.
        </p>
        <DirectAnswer>
          <p>
            WARDOGS is scheduled to launch into{" "}
            <a href={siteConfig.official.steam} target="_blank" rel="noreferrer">
              Steam Early Access for Windows PC on September 10, 2026
            </a>
            . BULKHEAD has publicly said that bringing the game to{" "}
            <a href={officialSources.consoleQAndA} target="_blank" rel="noreferrer">
              Xbox and PlayStation is part of its plan
            </a>
            , and a developer later said console support is{" "}
            <a href={officialSources.mayReply} target="_blank" rel="noreferrer">
              on the cards for after Early Access
            </a>
            .
          </p>
          <p>
            However, no specific console version, console release date, store
            listing, or crossplay plan has been formally announced.
          </p>
        </DirectAnswer>
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="article-body console-article-body">
        <section aria-labelledby="current-console-status">
          <h2 id="current-console-status">Current Status</h2>
          <div className="status-table-wrap">
            <table className="status-table">
              <thead>
                <tr>
                  <th scope="col">Platform or feature</th>
                  <th scope="col">Current status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Windows PC / Steam</th>
                  <td>Confirmed — Early Access September 10, 2026</td>
                </tr>
                <tr>
                  <th scope="row">PlayStation</th>
                  <td>Developer-stated plan — release not formally announced</td>
                </tr>
                <tr>
                  <th scope="row">PS5</th>
                  <td>Specific PS5 version not formally announced</td>
                </tr>
                <tr>
                  <th scope="row">Xbox</th>
                  <td>Developer-stated plan — release not formally announced</td>
                </tr>
                <tr>
                  <th scope="row">Console release date</th>
                  <td>Not announced</td>
                </tr>
                <tr>
                  <th scope="row">Cross-platform release</th>
                  <td>No multi-platform release formally announced yet</td>
                </tr>
                <tr>
                  <th scope="row">Crossplay</th>
                  <td>Not announced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <h2>WARDOGS Console Release Status</h2>
        <p>
          WARDOGS currently has one formally announced release: Windows PC through
          Steam Early Access on September 10, 2026. The console picture has become
          clearer through several first-party statements, but it has not yet become
          a formal platform release announcement.
        </p>
        <ul>
          <li>
            In February 2026, a developer said the team would{" "}
            <a href={officialSources.februaryReply} target="_blank" rel="noreferrer">
              consider console at a later date
            </a>
            .
          </li>
          <li>
            In March, BULKHEAD said in an{" "}
            <a href={officialSources.consoleQAndA} target="_blank" rel="noreferrer">
              official console Q&amp;A
            </a>{" "}
            that Xbox and PlayStation are part of its plan, while the timing is not
            known.
          </li>
          <li>
            In May, a developer said console is on the cards for after Early Access
            but that it was too early to provide more detail.
          </li>
        </ul>
        <div className="callout">
          <strong>Developer plan ≠ formal release announcement</strong>
          <p>
            The statements show platform intent. They do not provide a console
            release date, confirm a specific PS5 or Xbox product, or guarantee that
            the plan cannot change during development.
          </p>
        </div>

        <h2>Is WARDOGS Coming to PS5?</h2>
        <p>
          <strong>
            BULKHEAD has said that bringing WARDOGS to PlayStation is part of its
            plan, but a specific PS5 version, PlayStation Store listing, and release
            date have not been formally announced.
          </strong>
        </p>
        <p>
          “PlayStation” expresses the developer&apos;s intended platform direction;
          it should not be presented as a completed PS5 release announcement until
          BULKHEAD, Team17, or an official store page supplies those details.
        </p>

        <h2>Is WARDOGS Coming to Xbox?</h2>
        <p>
          <strong>
            BULKHEAD has named Xbox as part of its console plan, but no Xbox version,
            Microsoft Store listing, or release date has been formally announced.
          </strong>
        </p>
        <p>
          The official Q&amp;A establishes the developer&apos;s intent, not a dated
          Xbox release or a guarantee about the final launch plan.
        </p>

        <h2>When Is WARDOGS Coming to Console?</h2>
        <p>
          <strong>There is currently no announced WARDOGS console release date.</strong>
        </p>
        <p>
          Steam Early Access begins September 10, 2026, and the developer has placed
          console after Early Access in its current plan. “After Early Access” is a
          sequence, not a release window. The estimated duration of Early Access
          cannot be used to calculate a console release year. See the confirmed{" "}
          <Link href="/release-date">WARDOGS release date</Link> for the dated PC
          milestone.
        </p>

        <h2>Is WARDOGS Cross-Platform?</h2>
        <p>
          The currently announced Early Access release is for Windows PC through
          Steam. Xbox and PlayStation are part of the developer&apos;s longer-term
          plan, but no multi-platform release has been formally announced yet.
        </p>
        <p>
          A cross-platform release means the game is available on more than one
          platform. Crossplay is a separate feature that determines whether players
          on different platforms can play together.
        </p>

        <h2>Will WARDOGS Have Crossplay?</h2>
        <p>
          <strong>Crossplay has not been officially announced.</strong> There is no
          confirmed support for PC ↔ PlayStation, PC ↔ Xbox, or PlayStation ↔ Xbox.
          Player discussions do not establish any of those combinations as game
          features.
        </p>
        <h3>Will crossplay be mandatory?</h3>
        <p>
          No crossplay policy has been announced, so it is not known whether future
          crossplay would be mandatory, optional, or available at all.
        </p>

        <h2>Controller and Aim Assist on PC</h2>
        <p>
          In an{" "}
          <a href={officialSources.controllerVideo} target="_blank" rel="noreferrer">
            official WARDOGS development video
          </a>
          , the team confirmed partial gamepad support at the PC Early Access launch
          and described keyboard and mouse as the PC-focused input method. Limited
          controller aim assist will also exist on PC.
        </p>
        <p>
          These PC input details do not confirm how aim assist or matchmaking would
          work on a future console version.
        </p>

        <h2>WARDOGS PC Release and Early Access</h2>
        <p>
          WARDOGS launches for Windows PC through Steam Early Access on September 10,
          2026. For the short timeline, read the{" "}
          <Link href="/release-date">WARDOGS release date</Link>. For the ended
          August Beta and future test status, see the{" "}
          <Link href="/playtest">WARDOGS Playtest status</Link>. You can
          also check the current <Link href="/price">WARDOGS price</Link> or start
          with the <Link href="/beginner-guide">WARDOGS beginner guide</Link>.
        </p>
      </div>

      <SourceList
        sources={[
          { label: "WARDOGS on Steam", href: siteConfig.official.steam },
          {
            label: "February developer console reply",
            href: officialSources.februaryReply,
          },
          {
            label: "Official BULKHEAD / Team17 console Q&A",
            href: officialSources.consoleQAndA,
          },
          {
            label: "May developer console reply",
            href: officialSources.mayReply,
          },
          {
            label: "Official controller and aim assist video",
            href: officialSources.controllerVideo,
          },
        ]}
      />
      <FAQSection items={faq} />
      <RelatedGuides
        links={[
          {
            title: "Release date",
            href: "/release-date",
            text: "The confirmed Windows PC Early Access date.",
          },
          {
            title: "Playtest",
            href: "/playtest",
            text: "Ended August Beta and future test status.",
          },
          {
            title: "Beginner guide",
            href: "/beginner-guide",
            text: "Learn the confirmed match systems.",
          },
        ]}
      />
    </article>
  );
}
