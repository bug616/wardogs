import Link from "next/link";

const links = [
  ["Guides", "/beginner-guide"],
  ["Game Info", "/release-date"],
  ["Cash & Economy", "/cash-economy"],
] as const;

export function SiteHeader() {
  return <header className="site-header"><div className="header-inner">
    <Link href="/" className="brand"><strong>WARDOGS HUB</strong><span>UNOFFICIAL PLAYER GUIDE</span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<Link className="button button-small" href="/playtest">Playtest Status</Link></nav>
    <details className="mobile-menu"><summary aria-label="Open navigation"><span/><span/><span/></summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<Link href="/playtest">Playtest Status</Link></nav></details>
  </div></header>;
}
