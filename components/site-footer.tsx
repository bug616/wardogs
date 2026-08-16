import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid footer-editorial">
    <div className="footer-brand"><Link href="/" className="brand"><strong>WARDOGS HUB</strong><span>UNOFFICIAL PLAYER GUIDE</span></Link><p>{siteConfig.disclosure}</p><small>Source-checked information for players, with confirmed facts separated from open questions.</small></div>
    <div className="footer-nav-group"><h2>Field Guides</h2><Link href="/beginner-guide">Beginner Guide</Link><Link href="/cash-economy">Cash & Economy</Link><Link href="/playtest">Playtest Status</Link></div>
    <div className="footer-nav-group"><h2>Game Information</h2><Link href="/release-date">Release Date</Link><Link href="/price">Price</Link><Link href="/console">Console Status</Link></div>
    <div className="footer-nav-group"><h2>Verify</h2><a href={siteConfig.official.steam} target="_blank" rel="noreferrer">Steam Store</a><a href={siteConfig.official.team17} target="_blank" rel="noreferrer">Team17</a><a href={siteConfig.official.playtest} target="_blank" rel="noreferrer">WARDOGS Community</a></div>
  </div><div className="footer-base"><span>Information checked {siteConfig.lastChecked}</span><span>WARDOGS trademarks belong to their respective owners.</span></div></footer>;
}
