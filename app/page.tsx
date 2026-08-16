import Link from "next/link";
import { Icon } from "@/components/icons";
import { GuideVisual, OperationsMap, TacticalLoopVisual } from "@/components/visuals";
import { Eyebrow, FAQSection, StatusPill } from "@/components/ui";
import { currentFacts } from "@/lib/content";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata("WARDOGS Guide, Release Info & Playtest Status", "Verified WARDOGS playtest, release, price, platform, beginner, and Cash economy information in one unofficial player hub.", "", "website");

const faqs = [
  { question: "When is the next WARDOGS playtest?", answer: "The official Steam announcement lists a Closed Beta for August 21–23, 2026. Pre-orders include guaranteed access, while some additional players may be selected through Steam Playtest." },
  { question: "When does WARDOGS release?", answer: "WARDOGS is scheduled to launch in Steam Early Access on September 10, 2026." },
  { question: "Is WARDOGS free to play?", answer: "No free-to-play announcement has been made. Paid pre-orders are currently available on Steam with regional pricing." },
  { question: "Is WARDOGS coming to PS5 or Xbox?", answer: "Official pages currently confirm Steam on PC. PS5, Xbox, other console versions, and crossplay have not been confirmed." },
  { question: "How does Cash work in WARDOGS?", answer: "Players start with $10,000 and Cash persists across matches. It funds weapons, equipment, and vehicles; official examples of earning it include reviving, transporting teammates, and controlling the objective." },
];

const statusItems = [
  { label: "Playtest", value: currentFacts.playtest.answer, detail: currentFacts.playtest.detail, tone: "current" as const, status: "Upcoming" },
  { label: "Release", value: currentFacts.release.answer, detail: currentFacts.release.detail, tone: "confirmed" as const, status: "Confirmed" },
  { label: "Price", value: currentFacts.price.answer, detail: currentFacts.price.detail, tone: "current" as const, status: "Paid" },
  { label: "Platforms", value: currentFacts.platforms.answer, detail: currentFacts.platforms.detail, tone: "unknown" as const, status: "Partial" },
];

const mechanics = [
  { icon: "map" as const, title: "Control the Zone", text: "A randomized 2×2 km objective appears within the wider 256 km² battlefield. Three teams compete to reach 100 points first." },
  { icon: "cash" as const, title: "Earn through action", text: "Combat, transport, support, and objective play can all contribute. Cash persists between matches." },
  { icon: "vehicle" as const, title: "Equip and deploy", text: "Cash funds custom loadouts, equipment, and vehicles, giving each deployment an economic cost." },
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="home-hero-grid">
        <div className="home-hero-copy">
          <Eyebrow>Unofficial player intelligence</Eyebrow>
          <h1>
            <span className="hero-title-line">WARDOGS Guide,</span>{" "}
            <span className="hero-title-line">Release Info &amp;</span>{" "}
            <span className="hero-title-line">Playtest Status</span>
          </h1>
          <p className="home-hero-answer">A clear, source-checked field guide to the large-scale tactical FPS—from access dates and platforms to the persistent Cash economy.</p>
          <div className="hero-actions">
            <Link href="/beginner-guide" className="button">Start with the guide</Link>
            <Link href="/playtest" className="button button-secondary">Check playtest status</Link>
          </div>
          <p className="hero-source-note">Confirmed facts first. Open questions stay clearly marked.</p>
        </div>
        <div className="home-hero-visual">
          <OperationsMap/>
          <div className="hero-visual-caption"><span>TACTICAL MAP FALLBACK</span><small>Original editorial visual — not an in-game screenshot</small></div>
        </div>
      </div>
    </section>

    <section className="status-operations" aria-labelledby="current-status-title">
      <div className="status-operations-inner">
        <header className="status-heading">
          <div><Eyebrow>Live situation board</Eyebrow><h2 id="current-status-title">What is confirmed now</h2></div>
          <p>Checked against official first-party pages on {siteConfig.lastChecked}.</p>
        </header>
        <div className="operations-board">
          {statusItems.map((item, index) => <article className={index === 0 ? "operation-cell operation-cell-primary" : "operation-cell"} key={item.label}>
            <div className="operation-cell-label"><span>{item.label}</span><StatusPill tone={item.tone}>{item.status}</StatusPill></div>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="home-section start-here" aria-labelledby="start-here-title">
      <header className="home-section-head home-section-head-featured">
        <div><Eyebrow>Start here</Eyebrow><h2 id="start-here-title">Your first field briefing</h2></div>
        <p>Learn the match structure first, then check access or understand why every deployment has an economic cost.</p>
      </header>
      <div className="start-here-layout">
        <Link href="/beginner-guide" className="featured-guide">
          <GuideVisual variant="beginner"/>
          <div className="featured-guide-copy">
            <span className="card-tag">Field manual · Read this first</span>
            <h3>Beginner guide</h3>
            <p>The Control Zone, three-team structure, loadouts, support actions, and the basic match flow.</p>
            <span className="editorial-link">Open beginner briefing <Icon name="arrow" size={19}/></span>
          </div>
        </Link>
        <div className="supporting-briefings">
          <Link href="/playtest" className="supporting-entry supporting-entry-playtest">
            <div className="supporting-entry-copy"><span className="card-tag">Access</span><h3>Playtest status</h3><p>Dates, eligibility, and the official ways players can enter the next Closed Beta.</p><span className="editorial-link">Check status <Icon name="arrow" size={17}/></span></div>
            <GuideVisual variant="playtest"/>
          </Link>
          <Link href="/cash-economy" className="supporting-entry supporting-entry-economy">
            <div className="supporting-entry-copy"><span className="card-tag">Resources</span><h3>Cash economy</h3><p>What persists, what Cash buys, and the officially described ways to earn more.</p><span className="editorial-link">Read economy briefing <Icon name="arrow" size={17}/></span></div>
            <GuideVisual variant="economy"/>
          </Link>
        </div>
      </div>
    </section>

    <section className="home-section mechanics-section" aria-labelledby="mechanics-title">
      <header className="home-section-head">
        <div><Eyebrow>Core systems</Eyebrow><h2 id="mechanics-title">How WARDOGS works</h2></div>
        <p>A combined-arms battlefield rewards combat, transport, support, and objective play—not just eliminations.</p>
      </header>
      <div className="mechanics-editorial">
        <figure className="mechanics-visual">
          <GuideVisual variant="beginner"/>
          <figcaption><span>FIELD ORIENTATION</span><strong>One wider battlefield. One randomized Control Zone.</strong><small>Original editorial illustration — not an in-game screenshot.</small></figcaption>
        </figure>
        <div className="mechanics-list">
          {mechanics.map((mechanic, index) => <article className="mechanic-row" key={mechanic.title}>
            <div className="mechanic-number"><span>0{index + 1}</span><Icon name={mechanic.icon}/></div>
            <div><h3>{mechanic.title}</h3><p>{mechanic.text}</p>{index === 1 && <Link href="/cash-economy">Read the economy briefing →</Link>}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="tactical-loop-section" aria-labelledby="tactical-loop-title">
      <div className="tactical-loop-inner">
        <header className="tactical-loop-head"><div><Eyebrow>Operation cycle</Eyebrow><h2 id="tactical-loop-title">The tactical loop</h2></div><p>Contribution, Cash, equipment, and deployment form one continuous decision cycle.</p></header>
        <TacticalLoopVisual/>
      </div>
    </section>

    <section className="home-section game-info-section" aria-labelledby="game-info-title">
      <header className="home-section-head home-section-head-quiet">
        <div><Eyebrow>Game information</Eyebrow><h2 id="game-info-title">Check the essentials</h2></div>
        <p>Compact briefings preserve the context behind the situation board without repeating every status detail.</p>
      </header>
      <div className="game-info-list">
        <Link href="/release-date"><span>Release</span><strong>Steam Early Access · September 10, 2026</strong><small>Read the release briefing</small><Icon name="arrow" size={18}/></Link>
        <Link href="/price"><span>Price</span><strong>Paid pre-orders · Regional Steam pricing</strong><small>Read the price briefing</small><Icon name="arrow" size={18}/></Link>
        <Link href="/console"><span>Console / Platforms</span><strong>Steam / PC confirmed</strong><small>Check what remains unconfirmed</small><Icon name="arrow" size={18}/></Link>
      </div>
    </section>

    <section className="home-section editorial-updates" aria-labelledby="latest-situation-title">
      <header className="home-section-head home-section-head-quiet">
        <div><Eyebrow>Verified updates</Eyebrow><h2 id="latest-situation-title">Latest official situation</h2></div>
        <Link href="/release-date" className="editorial-link">Full release briefing <Icon name="arrow" size={18}/></Link>
      </header>
      <div className="briefing-layout">
        <div className="briefing-date"><strong>16</strong><span>AUG 2026</span><small>LAST CHECKED</small></div>
        <article className="briefing-primary"><span className="card-tag">Playtest · Current</span><h3>Closed Beta scheduled for August 21–23</h3><p>The latest official Steam announcement states that pre-order customers receive guaranteed access. A smaller random group may also enter through the native Steam Playtest system.</p><a href={siteConfig.official.steamCommunity} target="_blank" rel="noreferrer">View official Steam announcements →</a></article>
        <div className="briefing-log">
          <article><time>CONFIRMED</time><h3>Early Access begins September 10</h3><p>The currently announced launch platform is Steam on PC.</p></article>
          <article><time>CURRENT</time><h3>Paid pre-orders are live</h3><p>Displayed prices vary by Steam region; no free-to-play model has been announced.</p></article>
        </div>
      </div>
    </section>

    <section className="home-section home-faq"><FAQSection items={faqs}/></section>
    <div className="notice"><div className="notice-inner">{siteConfig.disclosure} This site separates confirmed facts from open questions and links to first-party sources wherever practical.</div></div>
  </>;
}
