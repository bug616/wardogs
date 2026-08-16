import Link from "next/link";
import { Icon } from "@/components/icons";
import { GuideVisual, type GuideVisualVariant } from "@/components/visuals";
import type { FaqItem } from "@/lib/site";

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function StatusPill({ children, tone = "confirmed" }: { children: React.ReactNode; tone?: "confirmed" | "current" | "unknown" }) { return <span className={`status-pill ${tone}`}>{children}</span>; }

export function DirectAnswer({ label = "Direct answer", children }: { label?: string; children: React.ReactNode }) {
  return <aside className="direct-answer"><span>{label}</span><div>{children}</div></aside>;
}

export function FactCard({ label, value, detail, tone = "confirmed", statusLabel }: { label: string; value: string; detail: string; tone?: "confirmed" | "current" | "unknown"; statusLabel?: string }) {
  return <article className="fact-card"><div><span>{label}</span><StatusPill tone={tone}>{statusLabel ?? (tone === "unknown" ? "Unconfirmed" : tone === "current" ? "Current" : "Confirmed")}</StatusPill></div><strong>{value}</strong><p>{detail}</p></article>;
}

export function GuideCard({ href, title, text, tag, visual }: { href: string; title: string; text: string; tag: string; visual: GuideVisualVariant }) {
  return <Link href={href} className="guide-card"><GuideVisual variant={visual}/><div className="guide-card-copy"><span className="card-tag">{tag}</span><h3>{title}</h3><p>{text}</p><span className="card-link">Open briefing <Icon name="arrow" size={18}/></span></div></Link>;
}

export function SourceList({ sources }: { sources: { label: string; href: string }[] }) {
  return <section className="sources"><Eyebrow>Verification</Eyebrow><h2>Official sources</h2><p>Use these first-party pages to verify announcements and availability.</p><ul>{sources.map(({ label, href }) => <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}<Icon name="arrow" size={16}/></a></li>)}</ul></section>;
}

export function RelatedGuides({ links }: { links: { title: string; href: string; text: string }[] }) {
  return <section className="related"><Eyebrow>Continue reading</Eyebrow><h2>Related briefings</h2><div className="related-grid">{links.map(link => <Link href={link.href} key={link.href}><strong>{link.title}</strong><span>{link.text}</span><Icon name="arrow" size={18}/></Link>)}</div></section>;
}

export function FAQSection({ items }: { items: FaqItem[] }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <section className="faq"><Eyebrow>Field questions</Eyebrow><h2>Frequently asked questions</h2><div>{items.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/></section>;
}

export function ArticleHero({ eyebrow, title, intro, status, tone = "confirmed" }: { eyebrow: string; title: string; intro: string; status: string; tone?: "confirmed" | "current" | "unknown" }) {
  return <header className="article-hero"><Eyebrow>{eyebrow}</Eyebrow><StatusPill tone={tone}>{status}</StatusPill><h1>{title}</h1><p>{intro}</p></header>;
}
